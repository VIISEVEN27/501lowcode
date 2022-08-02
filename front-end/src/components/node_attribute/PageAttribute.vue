<!--
 * @Author: yky
 * @Date: 2022-07-31 20:13:34
 * @LastEditTime: 2022-08-02 02:31:02
-->
<script setup lang="ts">
import { ref, reactive } from "vue";
// 页面功能属性
const page_function_form = reactive({
  page_top: true, //开启页头
  page_bottom: false, //开启页尾
  pagination: false, //开启分页
});
// 页面背景色
const back_color = ref("#d2d1c7");
const layout_stretch = ref("stretch");
</script>
<template>
  <div class="node-attribute">
    <div class="page-function">
      <div class="page-function-title attributes-title">页面功能</div>
      <el-card class="page-function-content">
        <el-form
          ref="page-function-form"
          :model="page_function_form"
          label-width="70px"
        >
          <el-form-item label="开启页头">
            <el-switch
              v-model="page_function_form.page_top"
              size="large"
              width="80px"
              inline-prompt
              active-text="启用"
              inactive-text="关闭"
            />
          </el-form-item>
          <el-form-item label="开启页尾">
            <el-switch
              v-model="page_function_form.page_bottom"
              size="large"
              width="80px"
              inline-prompt
              active-text="启用"
              inactive-text="关闭"
            />
          </el-form-item>
          <el-form-item label="开启分页">
            <el-switch v-model="page_function_form.pagination" />
          </el-form-item>
        </el-form>
      </el-card>
    </div>
    <div class="layout-function">
      <div class="layout-function-title attributes-title">布局功能</div>
      <el-card class="layout-function-content">
        <span class="layout-stretch-title">内容自适应模式</span>
        <el-radio-group v-model="layout_stretch" class="layout-stretch-content">
          <el-radio-button label="stretch"> 内容拉伸 </el-radio-button>
          <el-radio-button label="center"> 内容居中 </el-radio-button>
        </el-radio-group>
      </el-card>
    </div>
    <div class="expand-function">
      <div class="expand-function-title attributes-title">拓展区域</div>
      <el-card class="expand-function-content">暂无</el-card>
    </div>
    <div class="style-function">
      <div class="style-function-title attributes-title">样式</div>
      <el-card class="style-function-content">
        <el-row :gutter="10">
          <span>主体背景色</span>
          <span>
            <el-input :value="back_color">
              <template #prefix>
                <el-color-picker v-model="back_color"></el-color-picker>
              </template>
            </el-input>
          </span>
        </el-row>
      </el-card>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.node-attribute {
  font-size: 15px;
  .attributes-title {
    line-height: 40px;
    width: 100%;
    text-indent: var(--form-font-indent);
    // background-color: var(--el-color-info-light-3);
    background: rgba(31, 56, 88, 0.06);
  }
  .el-form-item {
    align-items: center;
    margin-bottom: 9px;
  }
  // 布局功能
  .layout-stretch-content {
    vertical-align: middle;
    margin: 0 20px;
  }

  .style-function-content .el-card__body {
    display: flex;
  }
}
</style>
