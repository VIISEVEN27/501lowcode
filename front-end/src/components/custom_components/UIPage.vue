<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "UIPage",
});
</script>

<template>
  <div class="ui-page">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.ui-page {
  width: 100%;
  height: 100%;
  padding: 5px;
}
</style>
