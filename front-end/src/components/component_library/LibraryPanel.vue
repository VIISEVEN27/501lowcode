<script setup lang="ts">
import componentInfo from "@/assets/component.json";
import { ref } from "vue";
import LibraryItem from "./LibraryItem.vue";
import { Search } from "@element-plus/icons-vue";

const searchText = ref("");
</script>

<template>
  <div class="library-panel">
    <h3>组件库</h3>
    <el-input
      v-model="searchText"
      class="w-50 m-2"
      placeholder="搜索组件"
      :suffix-icon="Search"
    />
    <el-tabs class="tabs">
      <el-tab-pane v-for="(value, key) in componentInfo" :label="key">
        <el-scrollbar height="313px">
          <template v-for="item in value">
            <LibraryItem
              :component="item"
              v-if="
                searchText === '' ||
                item.name.toLowerCase().includes(searchText.toLowerCase()) ||
                item.zh.includes(searchText)
              "
            />
          </template>
        </el-scrollbar>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<style lang="scss" scoped>
.library-panel {
  min-width: 450px;
  max-width: 25%;
  border: 1px solid var(--darker-border-color);
  padding: 1em;
  height: 500px;
}
</style>
