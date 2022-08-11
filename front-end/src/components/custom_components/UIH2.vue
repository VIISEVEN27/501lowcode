<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "UIH2",
});
</script>

<script setup lang="ts">
defineProps<{
  text?: string;
}>();
</script>

<template>
  <h2>{{ text || '二级标题' }}</h2>
</template>

<style lang="scss" scoped></style>
