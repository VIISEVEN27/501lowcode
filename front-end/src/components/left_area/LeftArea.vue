<!--
 * @Author: yky
 * @Date: 2022-07-30 21:13:39
 * @LastEditTime: 2022-08-02 14:10:41
-->
<script lang="ts">
import { defineComponent } from "vue";
import LeftAreaMenu from "@/components/left_area/LeftAreaMenu.vue";
import LibraryPanel from "@/components/component_library/LibraryPanel.vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<template>
  <div class="left-area">
    <!-- <LeftAreaMenu></LeftAreaMenu> -->
    <LibraryPanel />
  </div>
</template>

<style scoped></style>
