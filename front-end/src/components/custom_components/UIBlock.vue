<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "UIBlock",
});
</script>

<template>
  <div class="ui-block">
    <slot></slot>
  </div>
</template>

<style lang="scss">
.ui-block {
  padding: 20px;
}
</style>