<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "UIH1",
});
</script>

<script setup lang="ts">
defineProps<{
  text?: string;
}>();
</script>

<template>
  <h1>{{ text || '一级标题' }}</h1>
</template>

<style lang="scss" scoped></style>
