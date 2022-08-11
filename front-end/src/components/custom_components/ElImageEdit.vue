<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ElImageEdit",
});
</script>

<script setup lang="ts">
defineProps<{
  src?: string;
}>();
</script>

<template>
  <div style="display: inline-block">
    <el-image v-if="src" :src="src" />
    <div v-else class="empty">请设置src</div>
  </div>
</template>

<style lang="scss" scoped>
.empty {
  width: 100px;
  height: 100px;
  text-align: center;
  line-height: 100px;
  pointer-events: none;
}
</style>
