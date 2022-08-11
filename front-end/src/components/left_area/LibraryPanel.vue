<script setup lang="ts">
import componentLibrary from "@/assets/component_library";
import componentInfo from "@/assets/component_info";
import { ref } from "vue";
import LibraryItem from "./LibraryItem.vue";

const searchText = ref("");
</script>

<template>
  <div class="library-panel">
    <h3>组件库</h3>
    <el-tabs class="tabs">
      <el-tab-pane v-for="(value, key) in componentLibrary" :label="key">
        <el-scrollbar height="313px">
          <template v-for="item in value">
            <LibraryItem
              :type="item"
              :component="componentInfo[item]"
              v-if="
                searchText === '' ||
                componentInfo[item].name.toLowerCase().includes(searchText.toLowerCase()) ||
                componentInfo[item].zh.includes(searchText)
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
  border: 1px solid var(--darker-border-color);
  border-width: 0 1px 1px 0;
  padding: 1em;
  background-color: #fff;
}
</style>
