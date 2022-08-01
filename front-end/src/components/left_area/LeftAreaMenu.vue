<!--
 * @Author: yky
 * @Date: 2022-07-30 10:55:39
 * @LastEditTime: 2022-08-01 10:32:26
-->

<script lang="ts">
import { defineComponent } from "vue";

const selectIndex = (index: any) => {
  console.log(index);
  console.log("896532");
};
export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<template>
  <el-menu class="left-area-menu" :collapse="true" @select="selectIndex">
    <div class="left-area-top">
      <el-menu-item index="1">
        <el-icon>
          <svg
            fill="currentColor"
            preserveAspectRatio="xMidYMid meet"
            width="20"
            height="20"
            viewBox="0 0 1024 1024"
            data-spm-anchor-id="0.0.0.i1.68b04b2cRfF7EI"
          >
            <path
              d="M128 96h512a64 64 0 0 1 64 64v64a64 64 0 0 1-64 64H128a64 64 0 0 1-64-64V160a64 64 0 0 1 64-64z m32 64a32 32 0 1 0 0 64h448a32 32 0 0 0 0-64H160z m224 576h512a64 64 0 0 1 64 64v64a64 64 0 0 1-64 64H384a64 64 0 0 1-64-64v-64a64 64 0 0 1 64-64z m32 64a32 32 0 0 0 0 64h448a32 32 0 0 0 0-64H416z m-32-384h512a64 64 0 0 1 64 64v64a64 64 0 0 1-64 64H384a64 64 0 0 1-64-64v-64a64 64 0 0 1 64-64z m32 64a32 32 0 0 0 0 64h448a32 32 0 0 0 0-64H416z"
            ></path>
          </svg>
        </el-icon>
        <template #title>大纲树</template>
      </el-menu-item>
      <el-menu-item index="2">
        <el-icon><icon-puzzle theme="outline" size="24" /></el-icon>
        <template #title>组件库</template>
      </el-menu-item>
      <!-- <el-menu-item index="3">
        <el-icon><icon-database-setting theme="outline" size="24" /></el-icon>
        <template #title>数据源</template>
      </el-menu-item>
      <el-menu-item index="4">
        <el-icon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            preserveAspectRatio="xMidYMid meet"
            width="20"
            height="20"
            viewBox="0 0 1024 1024"
            size="20"
            data-spm-anchor-id="0.0.0.i7.68b04b2chPk300"
          >
            <path
              d="M726.4 515.2c-12.8-6.4-41.6-16-83.2-28.8-28.8-9.6-48-16-54.4-19.2-16-6.4-22.4-19.2-22.4-32 0-16 6.4-25.6 19.2-32 9.6-6.4 25.6-9.6 44.8-9.6 22.4 0 41.6 3.2 54.4 12.8 12.8 9.6 19.2 22.4 25.6 41.6h51.2c-3.2-35.2-16-57.6-38.4-73.6-22.4-16-51.2-22.4-89.6-22.4-35.2 0-64 6.4-86.4 22.4-25.6 16-35.2 38.4-35.2 64s12.8 48 35.2 60.8c9.6 6.4 35.2 12.8 73.6 25.6 35.2 9.6 54.4 16 60.8 19.2 19.2 9.6 28.8 22.4 28.8 38.4 0 12.8-6.4 22.4-19.2 32-12.8 6.4-32 12.8-54.4 12.8-25.6 0-44.8-3.2-57.6-12.8-12.8-9.6-22.4-25.6-25.6-51.2h-51.2c3.2 38.4 16 67.2 44.8 86.4 22.4 16 54.4 22.4 92.8 22.4 41.6 0 73.6-9.6 96-22.4 22.4-16 32-38.4 32-64 0-32-12.8-54.4-41.6-70.4zM406.4 563.2c0 22.4-3.2 38.4-12.8 48-9.6 9.6-22.4 16-38.4 16-32 0-48-19.2-48-54.4v-9.6H256v12.8c0 28.8 9.6 54.4 25.6 70.4 16 16 41.6 25.6 73.6 25.6 38.4 0 64-9.6 80-25.6s22.4-41.6 22.4-80v-208h-51.2v204.8z"
            ></path>
            <path
              d="M896 128H128c-35.2 0-64 28.8-64 64v640c0 35.2 28.8 64 64 64h768c35.2 0 64-28.8 64-64V192c0-35.2-28.8-64-64-64z m0 672c0 16-12.8 32-32 32H160c-19.2 0-32-16-32-32V224c0-16 12.8-32 32-32h704c19.2 0 32 16 32 32v576z"
            ></path>
          </svg>
        </el-icon>
        <template #title>源码面板</template>
      </el-menu-item> -->
    </div>

    <!-- <div class="left-area-bottom">
      <el-menu-item index="5">
        <el-icon><icon-help theme="outline" size="24" /></el-icon>
        <template #title>如何使用</template>
      </el-menu-item>
      <el-menu-item index="6">
        <el-icon><icon-more-four theme="outline" size="24" /></el-icon>
        <template #title>schema</template>
      </el-menu-item>
      <el-menu-item index="7">
        <el-icon>
          <svg
            fill="currentColor"
            preserveAspectRatio="xMidYMid meet"
            width="20"
            height="20"
            viewBox="0 0 1024 1024"
          >
            <path
              d="M885.7 796.7h-37.3v81.4c0 45-33.4 81.4-74.7 81.4H138.9c-41.2 0-74.7-36.5-74.7-81.4v-570c0-45 33.4-81.4 74.7-81.4h37.3v-81.4c0-45 33.4-81.4 74.7-81.4h634.8c41.2 0 74.7 36.4 74.7 81.4v570c0 45-33.5 81.4-74.7 81.4zM138.9 267.4c-20.6 0-37.3 18.2-37.3 40.7v570c0 22.5 16.7 40.7 37.3 40.7h634.8c20.6 0 37.3-18.2 37.3-40.7v-570c0-22.5-16.7-40.7-37.3-40.7H138.9zM923 145.3c0-22.5-16.7-40.7-37.3-40.7H250.9c-20.6 0-37.3 18.2-37.3 40.7v81.4h560.1c41.2 0 74.7 36.5 74.7 81.4V756h37.3c20.6 0 37.3-18.2 37.3-40.7v-570zM624.3 593.1s4.3-40.7-37.3-40.7c-17 0-37.3 8.9-37.3 40.7V756H475V511.7h149.4c-2.2 0 74.7-5 74.7 81.4V756h-74.7l-0.1-162.9zM213.6 389.6h224v40.7H288.2v122.1h112v40.7h-112v122.1h149.4V756h-224V389.6z"
            ></path>
          </svg>
        </el-icon>
        <template #title>源码面板</template>
      </el-menu-item>
    </div> -->
  </el-menu>
</template>

<style scoped>
.left-area-menu {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 12px 0;
}
</style>
