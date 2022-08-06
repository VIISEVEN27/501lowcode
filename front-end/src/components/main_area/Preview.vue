<script lang="ts">
import {Page} from "@/entities/page"
import {defineComponent, inject} from "vue"

export default defineComponent({
    setup() {
        const page = inject("page") as Page
        return {page}
    },
    render() {
        return this.page.render()
    },
})
</script>