import {
  defineComponent,
  h,
  reactive,
  resolveComponent,
  type VNode,
} from "vue";
import componentInfo from "@/assets/component_info";
import { useAppStore } from "@/stores/app";

export class VComponent {
  name: string;
  type: string;
  props?: Record<string, any> = {};
  styles?: Record<string, any> = {};
  events?: Record<string, Function> = {};
  children?: VComponent[];

  constructor(vcomponentType: string) {
    this.name = getUniqueName(vcomponentType);
    this.type = vcomponentType;
  }
}

// 假设是从后端请求到的页面 JSON
const page: VComponent = reactive({
  name: "home",
  type: "UIPage",
  props: {},
  styles: {},
});

function generateNameCache(vcomponent: VComponent): Set<string> {
  if (!vcomponent.children) {
    return new Set();
  }
  const set: Set<string> = new Set();
  for (let i = 0; i < vcomponent.children.length; ++i) {
    const child = vcomponent.children[i];
    set.add(child.name);
    const subSet = generateNameCache(child);
    subSet.forEach((name) => {
      set.add(name);
    });
  }
  return set;
}

const nameSet = generateNameCache(page);

function blockNearEdge(node: HTMLElement, e: DragEvent) {
  const topDist = e.offsetY,
    bottomDist = node.clientHeight - e.offsetY;
  node.classList.remove("near-top");
  node.classList.remove("near-bottom");
  node.classList.add(topDist < bottomDist ? "near-top" : "near-bottom");
}

function inlineNearEdge(node: HTMLElement, e: DragEvent) {
  const leftDist = e.offsetX,
    rightDist = node.clientWidth - e.offsetX;
  node.classList.remove("near-left");
  node.classList.remove("near-right");
  node.classList.add(leftDist < rightDist ? "near-left" : "near-right");
}

function layerIndices(vcomponent: VComponent, id: string): number[] {
  if (!vcomponent.children) {
    return [];
  }
  const tokens: number[] = [];
  for (let i = 0; i < vcomponent.children.length; ++i) {
    tokens.push(i);
    const child = vcomponent.children[i];
    if (child.name === id) {
      return tokens;
    }
    const subTokens = layerIndices(child, id);
    if (subTokens.length > 0) {
      return tokens.concat(subTokens);
    }
    tokens.pop();
  }
  return [];
}

function getIndicesById(id: string): number[] {
  return layerIndices(page, id);
}

function searchVcomponentDeep(
  vcomponent: VComponent,
  id: string
): VComponent | undefined {
  if (vcomponent.name === id) {
    return vcomponent;
  }
  if (vcomponent.children) {
    for (let i = 0; i < vcomponent.children.length; ++i) {
      const child = vcomponent.children[i];
      const result = searchVcomponentDeep(child, id);
      if (result) {
        return result;
      }
    }
  }
  return undefined;
}

export function searchVcomponent(id: string): VComponent | undefined {
  return searchVcomponentDeep(page, id);
}

function getUniqueName(vcomponentType: string): string {
  let name = vcomponentType.slice(2).toLowerCase(),
    idx = 2;
  while (nameSet.has(name)) {
    name = vcomponentType + idx;
    ++idx;
  }
  nameSet.add(name);
  return name;
}

function insertBeforeVcomponent(indices: number[], vcomponent: VComponent) {
  if (indices.length === 0) {
    return;
  }
  let targetChildren = page.children!;
  for (let i = 0; i < indices.length - 1; ++i) {
    targetChildren = targetChildren[indices[i]].children!;
    if (!targetChildren) {
      return;
    }
  }
  const beforeIndex = indices[indices.length - 1];
  targetChildren.splice(beforeIndex, 0, vcomponent);
}

function insertAfterVcomponent(indices: number[], vcomponent: VComponent) {
  if (indices.length === 0) {
    return;
  }
  let targetChildren = page.children!;
  for (let i = 0; i < indices.length - 1; ++i) {
    targetChildren = targetChildren[indices[i]].children!;
    if (!targetChildren) {
      return;
    }
  }
  const afterIndex = indices[indices.length - 1] + 1;
  if (afterIndex >= targetChildren.length) {
    targetChildren.push(vcomponent);
  } else {
    targetChildren.splice(afterIndex, 0, vcomponent);
  }
}

function insertInnerComponent(indices: number[], vcomponent: VComponent) {
  let target = page;
  for (let i = 0; i < indices.length; ++i) {
    if (!target.children) {
      return;
    }
    target = target.children[indices[i]];
  }
  target.children = [vcomponent];
}

function insertVcomponent(
  node: HTMLElement,
  area: "top" | "bottom" | "left" | "right" | "inner" | string,
  vcomponent: VComponent
) {
  const indices = layerIndices(page, node.id);
  if (area === "top" || area === "left") {
    insertBeforeVcomponent(indices, vcomponent);
  } else if (area === "bottom" || area === "right") {
    insertAfterVcomponent(indices, vcomponent);
  } else if (area === "inner") {
    insertInnerComponent(indices, vcomponent);
  }
}

function removeVcomponent(indices: number[]): VComponent {
  if (indices.length === 0) {
    return page;
  }
  let targetChildren = page.children!;
  for (let i = 0; i < indices.length - 1; ++i) {
    targetChildren = targetChildren[indices[i]].children!;
    if (!targetChildren) {
      return targetChildren;
    }
  }
  const index = indices[indices.length - 1];
  const result = targetChildren.splice(index, 1)[0];
  return result;
}

export function removeVcomponentById(id: string): VComponent {
  const indices = getIndicesById(id);
  nameSet.delete(id);
  return removeVcomponent(indices);
}

function moveVcomponent(
  sourceIndices: number[],
  node: HTMLElement,
  area: "top" | "bottom" | "left" | "right" | "inner" | string
) {
  const vcomponent = removeVcomponent(sourceIndices);
  insertVcomponent(node, area, vcomponent);
}

const editableProps = (vcomponent: VComponent) => {
  let dragNearEdge = blockNearEdge;
  const editType = componentInfo[vcomponent.type].editType;
  if (editType === "inline") {
    dragNearEdge = inlineNearEdge;
  } else if (editType === "none") {
    dragNearEdge = () => {};
  }
  return {
    onMouseenter: (e: MouseEvent) => {
      const node = e.target as HTMLElement;
      node.parentElement?.classList.remove("hover");
      node.classList.add("hover");
    },
    onMouseleave: (e: MouseEvent) => {
      const node = e.target as HTMLElement;
      node.classList.remove("hover");
      node.parentElement?.classList.add("hover");
    },
    onDragstart: (e: DragEvent) => {
      const node = e.target as HTMLElement;
      e.dataTransfer?.setData(
        "text/indices",
        JSON.stringify(layerIndices(page, node.id))
      );
      e.dataTransfer?.setData("text/id", node.id);
      const appStore = useAppStore();
      appStore.activeComponent = "";
    },
    onDragover: (e: DragEvent) => {
      const node = e.currentTarget as HTMLElement;
      if (node.classList.contains("root")) {
        dragNearEdge(node, e);
        e.stopPropagation();
      }
      e.preventDefault();
    },
    onDrop: (e: DragEvent) => {
      const node = e.currentTarget as HTMLElement;
      if (node.classList.contains("root")) {
        const classes = [
          "near-left",
          "near-top",
          "near-right",
          "near-bottom",
          "inner",
        ];
        for (let cls of classes) {
          if (node.classList.contains(cls)) {
            if (e.dataTransfer?.getData("text/plain")) {
              const vcomponentType = e.dataTransfer?.getData("text/plain");
              insertVcomponent(
                node,
                cls === "inner" ? "inner" : cls.slice(5),
                new VComponent(vcomponentType)
              );
            } else if (e.dataTransfer?.getData("text/indices")) {
              const id = e.dataTransfer.getData("text/id");
              if (id !== node.id) {
                const sourceIndices = JSON.parse(
                  e.dataTransfer.getData("text/indices")
                );
                moveVcomponent(
                  sourceIndices,
                  node,
                  cls === "inner" ? "inner" : cls.slice(5)
                );
              }
            }
            node.classList.remove(cls);
            break;
          }
        }
        e.stopPropagation();
      }
    },
    onDragleave: (e: DragEvent) => {
      const node = e.currentTarget as HTMLElement;
      if (node.classList.contains("root")) {
        const classes = ["near-left", "near-top", "near-right", "near-bottom"];
        classes.forEach((cls) => node.classList.remove(cls));
        e.stopPropagation();
      }
    },
  };
};

function renderDeep(vcomponent: VComponent): VNode {
  const children: VNode[] = [];
  vcomponent.children?.forEach((child) => {
    children.push(renderDeep(child));
  });
  const appStore = useAppStore();
  const wrapTypeSet = new Set(["UILink", "UIButton", "UIVideo"]);
  const editTypeSet = new Set(["UIPage", "UIBlock", "ElImage", "ElDivider"]);
  return wrapTypeSet.has(vcomponent.type)
    ? h(
        "div",
        {
          ...editableProps(vcomponent),
          class: [
            "root",
            { focus: appStore.activeComponent === vcomponent.name },
          ],
          id: vcomponent.name,
          draggable: "true",
          style: {
            display:
              componentInfo[vcomponent.type].editType === "inline"
                ? "inline-block"
                : "block",
          },
        },
        h(
          resolveComponent(vcomponent.type),
          {
            ...vcomponent.props,
            style: {
              ...vcomponent.styles,
              pointerEvents: "none",
            },
          },
          children.length > 0 ? () => children : undefined
        )
      )
    : h(
        resolveComponent(
          editTypeSet.has(vcomponent.type)
            ? vcomponent.type + "Edit"
            : vcomponent.type
        ),
        {
          ...vcomponent.props,
          ...editableProps(vcomponent),
          class: [
            "root",
            { focus: appStore.activeComponent === vcomponent.name },
          ],
          id: vcomponent.name,
          draggable: "true",
          style: vcomponent.styles,
        },
        children.length > 0 ? () => children : undefined
      );
}

export default defineComponent({
  name: "EditorContent",
  render() {
    return renderDeep(page);
  },
});
