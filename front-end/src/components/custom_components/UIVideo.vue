<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "UIVideo",
});
</script>

<script setup lang="ts">
defineProps<{
  src?: string
}>();
// Test URL: https://media.w3.org/2010/05/sintel/trailer.mp4
</script>

<template>
  <video :src="src" controls autoplay></video>
</template>

<style lang="scss" scoped>

</style>