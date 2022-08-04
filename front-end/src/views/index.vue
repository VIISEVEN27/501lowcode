<!--
 * @Author: yky
 * @Date: 2022-08-02 13:54:34
 * @LastEditTime: 2022-08-02 14:06:23
-->
<script setup lang="ts">
import LibraryPanel from "@/components/component_library/LibraryPanel.vue";
import TopArea from "@/components/component_library/TopArea.vue";
import MainArea from "@/components/component_library/MainArea.vue";
import LeftArea from "@/components/left_area/LeftArea.vue";
import RightArea from "@/components/right_area/RightArea.vue";
import {Page} from "@/entities/page"
import {useRoute} from "vue-router"

const route = useRoute()
const id = route.params.id as string
const page = new Page(id)
page.init()
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <TopArea />
      </el-header>
      <el-main>
        <div class="workbench-body">
          <LeftArea />
        </div>
        <MainArea class="main-area" />
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
        <el-scrollbar class="right-area">
          <RightArea />
        </el-scrollbar>
      </el-main>
    </el-container>
  </div>
  <!-- <LibraryPanel /> -->
</template>

<style lang="scss" scoped>
.common-layout {
  align-items: center;
}

// .select-btn {
//   position: absolute;
//   top: 200px;
//   right: 500px;
//   display: flex;
//   flex-direction: column;
// }

.el-container {
  height: 100%;
  background-color: #edeff3;
  .el-header,
  .el-main {
    padding-left: 0;
    padding-right: 0;
    box-sizing: border-box;
  }
  .el-main {
    widows: 100vw;
    display: flex;
    padding-bottom: 0;
    // justify-content: space-between;
  }
  .main-area {
    flex: 1;
    margin: 20px;
    height: auto;
  }
  .workbench-body {
    height: 100%;
    width: 450px;
  }
  .right-area {
    height: calc(100vh - 77px);
    background: #fff;
  }
}
</style>
