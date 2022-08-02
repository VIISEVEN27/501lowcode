<!--
 * @Author: yky
 * @Date: 2022-07-30 22:12:48
 * @LastEditTime: 2022-08-02 02:58:55
-->
<script setup lang="ts">
import SettingStyle from "@/components/setting_style/SettingStyle.vue";
import NodeAttribute from "@/components/node-attribute/NodeAttribute.vue";

import { Ref, ref } from "vue";

// 菜单绑定变量
let selectSetting = ref("1");

// 选择菜单 ==> 属性 | 样式
const handleSelectMenu = (index: string): void => {
  // 更新
  selectSetting.value = index;
};
</script>

<template>
  <div class="right-area">
    <div class="path">
      <el-icon class="path-icon"><Calendar /></el-icon>
      <el-breadcrumb separator-icon="ArrowRight" class="settings-navigator">
        <el-breadcrumb-item>页面</el-breadcrumb-item>
        <el-breadcrumb-item>页面</el-breadcrumb-item>
        <el-breadcrumb-item>区域</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <el-menu
      class="class-nav"
      mode="horizontal"
      :default-active="selectSetting"
      @select="handleSelectMenu"
    >
      <el-menu-item index="1">属性</el-menu-item>
      <el-menu-item index="2">样式</el-menu-item>
    </el-menu>
    <div class="setting-content">
      <div class="setting-title"></div>
      <div class="setting-style">
        <NodeAttribute v-show="selectSetting == '1'" />
        <SettingStyle v-show="selectSetting == '2'" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.right-area {
  width: 400px;
  height: auto;
  // box-shadow: ;
  background-color: #fff;
  .path {
    display: flex;
    align-items: center;
    height: 40px;
    border-bottom: 1px solid var(--dark-border-color);
    .path-icon {
      margin: 0 15px;
    }
  }
  .class-nav {
    display: flex;
  }
}
</style>
