<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Test",
});
</script>

<script setup lang="ts">
import LibraryPanel from "@/components/component_library/LibraryPanel.vue";
const color = ref('');
</script>

<template>
  <el-color-picker v-model="color"></el-color-picker>
</template>

<style lang="scss" scoped>

</style>