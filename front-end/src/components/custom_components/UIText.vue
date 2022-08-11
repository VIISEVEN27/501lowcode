<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "UIText",
});
</script>

<script setup lang="ts">
defineProps<{
  text?: string;
}>();
</script>

<template>
  <span>{{ text || '文本' }}</span>
</template>

<style lang="scss" scoped></style>
