<script lang="ts">
import {Checkbox, Title} from "@/entities/component"
import {defineComponent} from "vue"

export default defineComponent({
    render() {
        // return new Title("title0", "h1", undefined, undefined, ["这是一个标题", "测试一下"]).render()
        return new Checkbox("checkbox0", {label: "这是一个多选框"}).render()
    },
})
</script>