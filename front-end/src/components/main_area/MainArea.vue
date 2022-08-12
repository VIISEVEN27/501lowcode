<script setup lang="ts">
// import Preview from "@/components/main_area/Preview.vue";
// import { Page } from "@/entities/page";
// import { inject } from "vue";
import { useAppStore } from "@/stores/app";
import EditorContent from "./EditorContent";

// const page = inject("page") as Page;

function clickHandler(e: MouseEvent) {
  const node = e.target as HTMLElement;
  if (node.classList.contains("root")) {
    const appStore = useAppStore();
    appStore.activeComponent = node.id;
    console.log('MainArea click:', appStore.activeComponent);
    e.stopPropagation();
  }
}
</script>

<template>
  <div class="main-area">
    <EditorContent @click="clickHandler" />
  </div>
  <!-- <div class="lc-workbench">
    <el-container>
      <el-header class="lc-workbench-header">
        <div class="lc-workbench-header-contentArea">
          <div class="lc-workbench-header-content">
            {{ page.title }}
          </div>
        </div>
      </el-header>
      <el-main class="lc-workbench-main">
        <Preview />
      </el-main>
    </el-container>
  </div> -->
</template>

<style lang="scss">
.main-area {
  height: 100%;
  padding: 1em;

  .hover {
    outline: 1px dashed var(--hover-border-color);
  }

  .near-left {
    border-left: 3px solid var(--active-border-color);
  }
  .near-top {
    border-top: 3px solid var(--active-border-color);
  }
  .near-right {
    border-right: 3px solid var(--active-border-color);
  }
  .near-bottom {
    border-bottom: 3px solid var(--active-border-color);
  }

  .focus {
    outline: 2px solid var(--focus-border-color);
  }
}
// .lc-workbench {
//   margin-left: 0;
//   margin-right: 0;
// }

// .lc-workbench-main {
//   background-color: white;
//   border: 1px solid var(--darker-border-color);
// }
</style>
