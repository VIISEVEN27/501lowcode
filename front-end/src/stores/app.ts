import {VComponent, VPage} from "@/components/main_area/EditorContent"
import {defineStore} from "pinia"

function searchVcomponentDeep(
    vcomponent: VComponent,
    id: string,
): VComponent | undefined {
    if (vcomponent.name === id) {
        return vcomponent
    }
    if (vcomponent.children) {
        for (let i = 0; i < vcomponent.children.length; ++i) {
            const child = vcomponent.children[i]
            const result = searchVcomponentDeep(child, id)
            if (result) {
                return result
            }
        }
    }
    return undefined
}

function layerIndices(vcomponent: VComponent, id: string): number[] {
    if (!vcomponent.children) {
        return []
    }
    const tokens: number[] = []
    for (let i = 0; i < vcomponent.children.length; ++i) {
        tokens.push(i)
        const child = vcomponent.children[i]
        if (child.name === id) {
            return tokens
        }
        const subTokens = layerIndices(child, id)
        if (subTokens.length > 0) {
            return tokens.concat(subTokens)
        }
        tokens.pop()
    }
    return []
}

export const useAppStore = defineStore({
    id: "app",
    state: () => {
        return {
            id: "",
            page: new VPage(),
            activeComponent: "",
        }
    },
    actions: {
        searchVcomponent(id: string): VComponent | undefined {
            return searchVcomponentDeep(this.page, id)
        },

        getIndicesById(id: string): number[] {
            return layerIndices(this.page, id)
        },

        removeVcomponent(indices: number[]): VComponent {
            if (indices.length === 0) {
                return this.page
            }
            let targetChildren = this.page.children!
            for (let i = 0; i < indices.length - 1; ++i) {
                targetChildren = targetChildren[indices[i]].children!
                if (!targetChildren) {
                    return targetChildren
                }
            }
            const index = indices[indices.length - 1]
            return targetChildren.splice(index, 1)[0]
        },

        removeVcomponentById(id: string): VComponent {
            const indices = this.getIndicesById(id)
            if (indices.length === 0) {
                return this.page
            }
            let targetChildren = this.page.children!
            for (let i = 0; i < indices.length - 1; ++i) {
                targetChildren = targetChildren[indices[i]].children!
                if (!targetChildren) {
                    return targetChildren
                }
            }
            const index = indices[indices.length - 1]
            return targetChildren.splice(index, 1)[0]
        },
    },
})
