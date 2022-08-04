<script lang="ts">
import {Title} from "@/entities/component"
import {defineComponent} from "vue"

export default defineComponent({
    render() {
        return new Title("title0", 1, "这是一个标题").render()
    }
})
</script>