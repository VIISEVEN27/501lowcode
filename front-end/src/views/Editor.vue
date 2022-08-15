<script setup lang="ts">
import TopArea from "@/components/top_area/TopArea.vue";
import LeftArea from "@/components/left_area/LeftArea.vue";
import MainArea from "@/components/main_area/MainArea.vue";
import RightArea from "@/components/right_area/RightArea.vue";
// import { Page } from "@/entities/page";
// import { provide, reactive } from "vue";
// import { useRoute } from "vue-router";

// const route = useRoute();
// const id = route.params.id as string;
// const page = reactive(new Page(id));
// page.init();

// provide("page", page);
</script>

<template>
  <el-container class="container">
    <el-header class="header">
      <TopArea />
    </el-header>
    <el-main class="main">
      <el-row class="main-row">
        <el-col :span="5">
          <LeftArea />
        </el-col>
        <el-col :span="15" class="middle-col">
          <MainArea />
        </el-col>
        <el-col :span="4">
          <RightArea />
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<style scoped>
.container {
  height: 100vh;
}

.header {
  border-bottom: 1px solid var(--darker-border-color);
}

.main {
  padding: 0;
  height: calc(100vh - 60px);
  overflow: hidden;
}

.main-row {
  height: 100%;
}
</style>