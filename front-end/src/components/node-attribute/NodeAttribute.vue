<!--
 * @Author: yky
 * @Date: 2022-08-01 21:51:43
 * @LastEditTime: 2022-08-02 08:38:41
-->
<script setup lang="ts">
import PageAttribute from "@/components/node-attribute/PageAttribute.vue";
import TopAttribute from "@/components/node-attribute/TopAttribute.vue";
import RowAndColumnAttribute from "@/components/node-attribute/RowAndColumnAttribute.vue";
import RowAttribute from "@/components/node-attribute/RowAttribute.vue";
import ColumnAttribute from "@/components/node-attribute/ColumnAttribute.vue";
</script>
<template>
  <div>
    <!-- 页面属性面版 -->
    <PageAttribute v-show="true" />
    <!-- 页面头部 -->
    <TopAttribute v-show="false" />
    <!-- 行列容器 -->
    <RowAndColumnAttribute v-show="false" />
    <!-- 行 -->
    <RowAttribute v-show="false" />
    <!-- 列 -->
    <ColumnAttribute v-show="false" />
  </div>
</template>

<style scoped></style>
