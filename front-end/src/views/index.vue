<script setup lang="ts">
import LibraryPanel from "@/components/component_library/LibraryPanel.vue";
import TopArea from "@/components/component_library/TopArea.vue";
import MainArea from "@/components/component_library/MainArea.vue"
</script>

<template>

  <div class="common-layout">
        <el-container>
          <el-header>
            <TopArea />
          </el-header>

          <el-main>
            <MainArea />
          </el-main>
        </el-container>
  </div>
  <!-- <LibraryPanel /> -->
</template>

<style lang="scss" scoped>
  .common-layout{
      align-items: center;
    }
</style>
