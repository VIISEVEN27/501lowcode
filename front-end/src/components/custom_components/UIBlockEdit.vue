<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "UIBlockEdit",
});
</script>

<template>
  <div class="ui-block">
    <slot></slot>
    <UIEmpty v-if="!$slots.default" />
  </div>
</template>

<style lang="scss" scoped>
.ui-block {
  padding: 20px;
}
</style>