<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "UIH6",
});
</script>

<script setup lang="ts">
defineProps<{
  text?: string;
}>();
</script>

<template>
  <h6>{{ text || '六级标题' }}</h6>
</template>

<style lang="scss" scoped></style>
