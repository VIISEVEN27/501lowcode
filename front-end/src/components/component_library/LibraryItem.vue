<script setup lang="ts">
import { useAppStore } from "@/stores/app";

const props = defineProps<{
  type: string,
  component: { name: string, zh: string }
}>();

function dragstartHandler(e: DragEvent) {
  console.log('LibraryItem dragstart');
  e.dataTransfer?.setData('text/plain', props.type);
  const appStore = useAppStore();
  appStore.activeComponent = '';
  console.log(appStore.activeComponent);
}
</script>

<template>
  <div class="library-item" draggable="true" @dragstart="dragstartHandler">
    <div class="name">{{ component.name }}</div>
    <div class="zh">{{ component.zh }}</div>
  </div>
</template>

<style lang="scss">
.library-item {
  display: inline-block;
  width: 33.3%;
  text-align: center;
  border-style: solid;
  border-color: var(--base-border-color);
  border-width: 0 1px 1px 0;
  padding: 1em .5em;
  transition: box-shadow .2s;

  > .name {
    color: var(--brand-color);
    margin-bottom: 5px;
    line-height: 22px;
  }

  > .zh {
    font-size: .8em;
  }
}

.library-item:nth-child(-n+3) {
  border-top-width: 1px;
}

.library-item:nth-child(3n+1) {
  border-left-width: 1px;
}

.library-item:hover {
  box-shadow: 0 0 16px 0 rgb(0 0 0 / 25%);
}
</style>