<!--
 * @Author: yky
 * @Date: 2022-08-02 03:40:55
 * @LastEditTime: 2022-08-02 03:48:03
-->
<script setup lang="ts">
import { ref } from "vue";
const min_height = ref(20);
</script>
<template>
  <div class="caculate_box">
    <label>最小高度</label>
    <el-input-number
      v-model="min_height"
      :min="1"
      :max="50"
      label="label"
      controls-position="right"
    ></el-input-number>
  </div>
</template>

<style lang="scss" scoped>
.caculate_box {
  padding: 20px;
  label {
    display: inline-block;
    width: 100px;
  }
}
</style>
