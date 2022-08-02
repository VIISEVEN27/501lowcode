<!--
 * @Author: yky
 * @Date: 2022-07-30 08:51:36
 * @LastEditTime: 2022-08-02 02:50:17
-->
<script setup lang="ts">
import LibraryPanel from "@/components/component_library/LibraryPanel.vue";
import LeftArea from "@/components/left_area/LeftArea.vue";
import RightArea from "@/components/right_area/RightArea.vue";
</script>

<template>
  <el-container>
    <el-header>Header</el-header>
    <el-main>
      <div class="workbench-body">
        <LeftArea />
      </div>
      <!-- <LibraryPanel /> -->
      <!-- <div class="select-btn" @click="handleSelectPath">
        <el-button type="primary">页面</el-button>
        <el-button type="primary">页面>页面</el-button>

        <el-button type="primary">页面>header>页面头部</el-button>
        <el-button type="primary">header>页面头部>行列容器</el-button>
        <el-button type="primary">页面头部>行列容器>行</el-button>
        <el-button type="primary">行列容器>行>列</el-button>
        <el-button type="primary">行>列>段落</el-button>
        <el-button type="primary">列>段落>文本</el-button>

        <el-button type="primary">页面>页面>区域</el-button>

        <el-button type="primary">页面>区域>区块</el-button>
        <el-button type="primary">区域>区块>行列容器</el-button>
        <el-button type="primary">区块>行列容器>行</el-button>
        <el-button type="primary">行列容器>行>列</el-button>
      </div> -->

      <!-- <el-scrollbar> -->
      <RightArea />
      <!-- </el-scrollbar> -->
    </el-main>
  </el-container>
</template>

<style lang="scss" scoped>
.select-btn {
  position: absolute;
  top: 200px;
  right: 500px;
  display: flex;
  flex-direction: column;
}

.el-container {
  height: 100%;
  background-color: #edeff3;
  .el-main {
    padding: 0;
    display: flex;
    justify-content: space-between;
  }
  .workbench-body {
    height: 100%;
  }
}
</style>
