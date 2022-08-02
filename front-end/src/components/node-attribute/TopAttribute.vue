<!--
 * @Author: yky
 * @Date: 2022-08-02 02:51:34
 * @LastEditTime: 2022-08-02 03:43:40
-->
<script setup lang="ts">
import { reactive, ref } from "vue";
const pageTop_ref_form = ref();
const pageTop_function_form = reactive({
  bg_color: "#c7a5a5",
  inner_spacing: "none",
});
// 选择背景颜色
const selectChangeColor = (value: string): void => {
  pageTop_function_form.bg_color = value;
  console.log(pageTop_function_form);
};
</script>
<template>
  <el-form
    ref="pageTop_ref_form"
    class="pageTop-function-form"
    :model="pageTop_function_form"
    label-position="left"
    label-width="100px"
  >
    <el-form-item label="主体背景色">
      <el-color-picker
        v-model="pageTop_function_form.bg_color"
        @change="selectChangeColor"
      ></el-color-picker>
    </el-form-item>
    <el-form-item label="内间距">
      <el-radio-group
        v-model="pageTop_function_form.inner_spacing"
        class="inner-spacing-content"
      >
        <el-radio-button label="none"> 无 </el-radio-button>
        <el-radio-button label="have"> 有 </el-radio-button>
      </el-radio-group>
    </el-form-item>
  </el-form>
</template>

<style lang="scss" scoped>
.pageTop-function-form {
  padding: 20px;
}
</style>
