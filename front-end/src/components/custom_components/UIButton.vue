<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "UIButton",
});
</script>

<script setup lang="ts">
defineProps<{
  text?: string;
}>();
</script>

<template>
  <el-button :plain="true">{{ text || '按钮' }}</el-button>
</template>

<style lang="scss" scoped>

</style>