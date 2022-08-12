<script setup lang="ts">
import componentLibrary from "@/assets/component_library";
import componentInfo from "@/assets/component_info";
import { ref, onMounted } from "vue";
import LibraryItem from "./LibraryItem.vue";
import { Search } from "@element-plus/icons-vue";

interface RestaurantItem {
  id: string;
  name: String;
  zh: string;
}

const searchText = ref("");
let state = ref("布局");

const restaurants = ref<RestaurantItem[]>([]);
const querySearch = (queryString: string, cb: any) => {
  const results = queryString
    ? restaurants.value.filter(createFilter(queryString))
    : restaurants.value;
  cb(results);
};
const createFilter = (queryString: string) => {
  return (restaurant: RestaurantItem) => {
    return (
      restaurant.name.toLowerCase().indexOf(queryString.toLowerCase()) !== -1 ||
      restaurant.zh.indexOf(queryString) !== -1
    );
  };
};

const loadAll = () => {
  return Object.keys(componentInfo).map((key) => ({
    id: key,
    ...componentInfo[key],
  }));
};

const handleSelect = (item: RestaurantItem) => {
  Object.keys(componentLibrary).forEach((category) => {
    if (componentLibrary[category].includes(item.id)) {
      state.value = category;
    }
  });
};

onMounted(() => {
  restaurants.value = loadAll();
});
</script>

<template>
  <div class="library-panel">
    <h3>组件库</h3>
    <el-autocomplete
      v-model="searchText"
      class="w-50 m-2"
      placeholder="搜索组件"
      :fetch-suggestions="querySearch"
      :trigger-on-focus="false"
      clearable
      value-key="name"
      @select="handleSelect"
      :suffix-icon="Search"
    >
      <template #default="{ item }">
        <div class="name">{{ item.name }}</div>
        <span class="zh"> {{ item.zh }}</span>
      </template>
    </el-autocomplete>

    <el-tabs class="tabs" v-model="state">
      <el-tab-pane
        v-for="(value, key) in componentLibrary"
        :label="key"
        :name="key"
      >
        <el-scrollbar height="313px">
          <template v-for="item in value">
            <LibraryItem
              :type="item"
              :component="componentInfo[item]"
              v-if="
                searchText === '' ||
                componentInfo[item].name
                  .toLowerCase()
                  .includes(searchText.toLowerCase()) ||
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
  height: 500px;
  background-color: #fff;
}
</style>
