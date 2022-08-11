<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "UIH3",
});
</script>

<script setup lang="ts">
defineProps<{
  text?: string;
}>();
</script>

<template>
  <h3>{{ text || '三级标题' }}</h3>
</template>

<style lang="scss" scoped></style>
