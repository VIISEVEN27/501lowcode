<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "UIH5",
});
</script>

<script setup lang="ts">
defineProps<{
  text?: string;
}>();
</script>

<template>
  <h5>{{ text || '五级标题' }}</h5>
</template>

<style lang="scss" scoped></style>
