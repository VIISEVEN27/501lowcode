<script setup lang="ts">
import componentInfo from "@/assets/component.json";
import { ref,onMounted } from "vue";
import LibraryItem from "./LibraryItem.vue";
import { Search } from "@element-plus/icons-vue";


interface RestaurantItem {
  name: String
  zh: string
}

const searchText = ref("");

const restaurants = ref<RestaurantItem[]>([])
const querySearch = (queryString: string, cb: any) => {
  const results = queryString
    ? restaurants.value.filter(createFilter(queryString))
    : restaurants.value
  // call callback function to return suggestions
  cb(results)
}
const createFilter = (queryString: string) => {
  return (restaurant: RestaurantItem) => {
    return (
      restaurant.name.toLowerCase().indexOf(queryString.toLowerCase()) !==-1 ||
      restaurant.zh.toLowerCase().indexOf(queryString.toLowerCase()) !==-1
    )
      
  }
}


const loadAll = () => {
 return Object.values(componentInfo).reduce(
  (pre,cur) => pre.concat(cur),[]
 )
}

const handleSelect = (item: RestaurantItem) => {
  console.log(item)
}


onMounted(() => {
  restaurants.value = loadAll();
})
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
        @select="handleSelect"
        :suffix-icon="Search"
      >
      <template #default="{ item }">
      <div class="result">{{ item.name }},{{ item.zh }}</div>
      </template>
      
      </el-autocomplete>
    
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
