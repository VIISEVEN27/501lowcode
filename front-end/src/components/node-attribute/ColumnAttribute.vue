<!--
 * @Author: yky
 * @Date: 2022-08-02 03:40:55
 * @LastEditTime: 2022-08-02 03:59:06
-->
<script setup lang="ts">
import { reactive, ref } from "vue";
const width_fixed = ref(20);
const column_width_form = reactive({
  type: "none",
  vertical_layout: "top",
});
</script>
<template>
  <el-form
    ref="column_width_form"
    class="column-width-form"
    :model="column_width_form"
    label-position="left"
    label-width="100px"
  >
    <el-form-item label="宽度类型">
      <el-radio-group v-model="column_width_form.type" class="width-content">
        <el-radio-button label="none"> 自适应 </el-radio-button>
        <el-radio-button label="have"> 固定 </el-radio-button>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="固定宽度">
      <el-input-number
        v-model="width_fixed"
        :min="1"
        :max="50"
        size="small"
        controls-position="right"
        class="width-content"
      />
    </el-form-item>
    <el-form-item label="垂直排版">
      <el-radio-group
        v-model="column_width_form.vertical_layout"
        class="width-content"
      >
        <el-radio-button label="top"> 居顶 </el-radio-button>
        <el-radio-button label="center"> 居中 </el-radio-button>
        <el-radio-button label="bottom"> 居递 </el-radio-button>
      </el-radio-group>
    </el-form-item>
  </el-form>
</template>

<style lang="scss" scoped>
.column-width-form {
  padding: 20px;
  .width-content {
    width: 200px;
  }
}
</style>
