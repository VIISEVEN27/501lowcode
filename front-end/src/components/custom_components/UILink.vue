<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "UILink",
});
</script>

<script setup lang="ts">
defineProps<{
  text?: string;
  url?: string;
}>();
</script>

<template>
  <a :href="url || '/'">{{ text || "链接" }}</a>
</template>

<style lang="scss" scoped></style>
