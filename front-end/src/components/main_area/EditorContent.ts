import componentInfo from "@/assets/component_info"
import {addReco} from "@/components/top_area/UndoLogic"
import {useAppStore} from "@/stores/app"
import {useDebounceFn} from "@vueuse/core"
import axios from "axios"
import {storeToRefs} from "pinia"
import {computed, defineComponent, h, resolveComponent, type VNode, watch, WatchStopHandle} from "vue"
import {useRoute, useRouter} from "vue-router"


export class VComponent {
  name: string;
  type: string;
  props?: Record<string, any> = {};
  styles?: Record<string, any> = {};
  events?: Record<string, Function> = {};
  children?: VComponent[];

  /** 构造函数，传入组件名称即可 */
  constructor(name: string, vcomponentType: string) {
    // this.name = getUniqueName(vcomponentType);
    this.name = name
    this.type = vcomponentType;
  }
}

export class VPage extends VComponent{
  id?: string
  title: string
  time: Date

  constructor() {
    super("root", "UIPage")
    this.title = "未命名页面"
    this.time = new Date()
  }
}

export default defineComponent({
  name: "EditorContent",
  setup() {
    const route = useRoute()
    const router = useRouter()
    const id = route.params.id as string
    if (!id) {
      axios.get("/api/new").then((resp) => {
        const newId = resp.data.id as string
        router.push("/" + newId)
      })
    }
    const appStore = useAppStore()
    const {id: pageId, page} = storeToRefs(appStore)

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
    const nameSet = computed(() => generateNameCache(page.value))

    function getUniqueName(vcomponentType: string): string {
      let name = vcomponentType.slice(2).toLowerCase(),
          idx = 2;
      while (nameSet.value.has(name)) {
        name = vcomponentType + idx;
        ++idx;
      }
      nameSet.value.add(name);
      return name;
    }

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

    function insertBeforeVcomponent(indices: number[], vcomponent: VComponent) {
      if (indices.length === 0) {
        return;
      }
      let targetChildren = page.value.children!;
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
      let targetChildren = page.value.children!;
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
      let target: VComponent = page.value;
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
      const indices = appStore.getIndicesById(node.id);
      if (area === "top" || area === "left") {
        insertBeforeVcomponent(indices, vcomponent);
      } else if (area === "bottom" || area === "right") {
        insertAfterVcomponent(indices, vcomponent);
      } else if (area === "inner") {
        insertInnerComponent(indices, vcomponent);
      }
    }

    function moveVcomponent(
        sourceIndices: number[],
        node: HTMLElement,
        area: "top" | "bottom" | "left" | "right" | "inner" | string
    ) {
      const vcomponent = appStore.removeVcomponent(sourceIndices);
      insertVcomponent(node, area, vcomponent);
    }

    const editableProps = (vcomponent: VComponent) => {
      let dragNearEdge = blockNearEdge;
      const editType = componentInfo[vcomponent.type].editType;
      console.log(editType)
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
          console.log(node);
          e.dataTransfer?.setData(
              "text/indices",
              JSON.stringify(appStore.getIndicesById(node.id))
          );
          e.dataTransfer?.setData("text/id", node.id);
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
                      new VComponent(getUniqueName(vcomponentType) ,vcomponentType)
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
      const wrapTypeSet = new Set([
        "UILink",
        "UIButton",
        "UIVideo",
        "ElTable",
        "ElCalendar",
        "ElProgress",
      ]);
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

    async function initPage(id: string) {
      const resp = await axios.get("/api/page", {params: {id}})
      appStore.page = resp.data
    }

    const debouncedSave = useDebounceFn((newPage: VPage) => {
      axios.post("/api/save", newPage).then((resp) => {
        console.log(resp.data.msg)
      })
    }, 2000)

    let stop: WatchStopHandle
    watch(pageId, (newId, oldId) => {
      if (newId !== oldId) {
        initPage(newId).then(() => {
          /**
           * 使用watch函数监听响应式对象page的变化
           */
          console.log("init: " + JSON.stringify(page.value))
          stop?.call(this)
          stop = watch(page, (newPage) => {
            console.log("changed: " + JSON.stringify(newId))
            //每次page更新，则保存原来的page数据
            addReco(newId);
            debouncedSave(newPage)
          }, { deep: true })
        })
      }
    })
    appStore.id = id

    return {page, renderDeep}
  },
  render() {
    return this.renderDeep(this.page);
  },
});
