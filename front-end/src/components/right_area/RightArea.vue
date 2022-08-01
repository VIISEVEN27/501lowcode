<!--
 * @Author: yky
 * @Date: 2022-07-30 22:12:48
 * @LastEditTime: 2022-07-31 23:54:03
-->
<script setup lang="ts">
import SettingStyle from "@/components/setting_style/SettingStyle.vue";
import NodeAttribute from "@/components/node-attribute/PageAttribute.vue";

import { ref } from "vue";

let selectSetting = ref(1);

const handleSelect = (item: selectSetting) => {
  console.log(item);
};

defineProps<{
  component: { path1: string; path2: string; path3: string };
}>();
</script>

<template>
  <div class="right-area">
    <el-breadcrumb separator="/" class="settings-navigator">
      <el-breadcrumb-item :to="{ path: '/' }">{{ path1 }}</el-breadcrumb-item>
      <el-breadcrumb-item>{{ path2 }}</el-breadcrumb-item>
      <el-breadcrumb-item>{{ path3 }}</el-breadcrumb-item>
    </el-breadcrumb>
    <el-menu
      class="class-nav"
      mode="horizontal"
      :default-active="selectSetting"
    >
      <el-menu-item class="class-nav-item" index="1">属性</el-menu-item>
      <el-menu-item class="class-nav-item" index="2">样式</el-menu-item>
      <el-menu-item class="class-nav-item" index="3">高级</el-menu-item>
    </el-menu>
    <div class="setting-content">
      <div class="setting-title"></div>
      <div class="setting-style">
        <SettingStyle v-show="true" />
        <NodeAttribute />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.right-area {
  width: 400px;
  min-height: 100%;
  // box-shadow: ;
  background-color: #fff;
  .class-nav {
    width: 100%;
    display: flex;
    box-sizing: border-box;
    justify-content: space-between;
    .class-nav-item {
      flex: 1;
    }
  }
  .setting-content {
    .setting-style {
      border: 1px solid var(--el-collapse-border-color);
    }
  }
}
</style>
