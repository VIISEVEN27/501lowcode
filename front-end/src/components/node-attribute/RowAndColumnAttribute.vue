<!--
 * @Author: yky
 * @Date: 2022-08-02 03:30:48
 * @LastEditTime: 2022-08-02 03:37:43
-->
<script setup lang="ts">
import { reactive, ref } from "vue";
const row_column_form = reactive({
  row_spacing: 20,
  column_spacing: 20,
});
</script>
<template>
  <el-form
    ref="row_column_form"
    class="row-column-form"
    :model="row_column_form"
    label-position="left"
    label-width="100px"
  >
    <el-form-item label="行间距">
      <el-input-number
        v-model="row_column_form.row_spacing"
        :min="1"
        :max="10"
        size="small"
        controls-position="right"
      />
    </el-form-item>
    <el-form-item label="列间距">
      <el-input-number
        v-model="row_column_form.column_spacing"
        :min="1"
        :max="10"
        size="small"
        controls-position="right"
      />
    </el-form-item>
  </el-form>
</template>

<style lang="scss" scoped>
.row-column-form {
  padding: 20px;
}
</style>
