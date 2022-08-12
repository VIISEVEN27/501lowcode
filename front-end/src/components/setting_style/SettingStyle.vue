<!--
 * @Author: yky
 * @Date: 2022-07-30 23:08:24
 * @LastEditTime: 2022-08-02 02:44:10
-->
<script setup lang="ts">
import { reactive } from "vue";
import { ref } from "vue";

// 文字表单
const font_form = reactive({
  font_size: 0, // 字号
  line_height: 0, // 行高
  font_weight: 100, //字重
  font_color: "#557846", //文字颜色
  align_direction: "left", //对齐方向
  opacity_value: 0, //透明度进度条
});

// 背景种类
const background_type = ref("fill");
// 背景颜色
const background_color = ref("rgba(19, 206, 102, 0.8)");
// 背景地址
const background_url = ref("");

//定位表单
const position_form = reactive({
  position: "static",
  cascading_order: 1,
  float_direction: "none",
  clear_float: "none",
});
</script>

<template>
  <!-- 行内样式 -->
  <el-collapse class="setting-part-style">
    <el-collapse-item name="1">
      <template #title class="collapse-title">布局</template>
      <div>暂无</div>
    </el-collapse-item>
    <el-collapse-item name="2">
      <template #title class="collapse-title">文字</template>
      <el-form :model="font_form" label-position="left" class="font-form">
        <el-form-item>
          <div class="input-number-box">
            <div>
              <span>字号</span>
              <el-input-number
                v-model="font_form.font_size"
                controls-position="right"
                :min="1"
                :max="60"
                size="small"
              ></el-input-number>
            </div>
            <div>
              <span>行高</span>
              <el-input-number
                v-model="font_form.line_height"
                controls-position="right"
                :min="1"
                :max="100"
                size="small"
              ></el-input-number>
            </div>
          </div>
        </el-form-item>
        <el-form-item label="字重">
          <el-select v-model="font_form.font_weight" placeholder="请选择">
            <el-option label="100 Thin" value="100" />
            <el-option label="200 Extra Light" value="200" />
            <el-option label="300 Light" value="300" />
            <el-option label="400 Normal" value="400" />
            <el-option label="500 Medium" value="500" />
            <el-option label="600 Semi Bold" value="600" />
            <el-option label="700 Bold" value="700" />
            <el-option label="Extra Bold" value="800" />
          </el-select>
        </el-form-item>
        <el-form-item label="文字颜色">
          <input type="color" :value="font_form.font_color" />
        </el-form-item>
        <el-form-item label="对齐">
          <el-radio-group v-model="font_form.align_direction" size="small">
            <el-radio-button label="left">
              <icon-align-text-left theme="outline" size="15" />
            </el-radio-button>
            <el-radio-button label="center">
              <icon-align-text-center theme="outline" size="15" />
            </el-radio-button>
            <el-radio-button label="right">
              <icon-align-text-right theme="outline" size="15" />
            </el-radio-button>
            <el-radio-button label="both">
              <icon-align-text-both theme="outline" size="15" />
            </el-radio-button>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="透明度">
          <el-slider
            class="el-slider-box"
            v-model="font_form.opacity_value"
            size="small"
          />
        </el-form-item>
      </el-form>
    </el-collapse-item>
    <el-collapse-item name="3">
      <template #title class="collapse-title">背景</template>
      <span>背景类型</span>
      <el-radio-group v-model="background_type" class="background-type">
        <el-radio-button label="fill">
          <el-tooltip placement="top" trigger="hover" content="颜色填充">
            <icon-background-color theme="outline" size="15" class="bac-icon" />
          </el-tooltip>
        </el-radio-button>
        <el-radio-button label="img">
          <el-tooltip placement="top" trigger="hover" content="背景图片">
            <icon-pic theme="outline" size="15" class="bac-icon" />
          </el-tooltip>
        </el-radio-button>
      </el-radio-group>
      <div class="background-tools">
        <div v-if="background_type === 'fill'">
          <el-color-picker v-model="background_color" />
        </div>
        <div v-else>
          <el-input v-model="background_url" type="text" placeholder="">
            <template #prefix>
              <icon-save-one theme="outline" size="15" />
            </template>
          </el-input>
        </div>
      </div>
    </el-collapse-item>
    <el-collapse-item name="4">
      <template #title class="collapse-title">位置</template>
      <el-form
        :model="position_form"
        label-position="left"
        class="position-form"
        label-width="80px"
      >
        <el-form-item label="定位类型">
          <el-select v-model="position_form.position" placeholder="请选择">
            <el-option label="static" value="static" />
            <el-option label="relative" value="relative" />
            <el-option label="absolute" value="absolute" />
            <el-option label="fixed" value="fixed" />
            <el-option label="sticky" value="sticky" />
          </el-select>
        </el-form-item>
        <el-form-item label="层叠顺序">
          <el-input-number
            v-model="position_form.cascading_order"
            controls-position="right"
            :min="1"
            :max="60"
            size="small"
          ></el-input-number>
        </el-form-item>
        <el-form-item label="浮动方向">
          <el-radio-group
            v-model="position_form.float_direction"
            class="float-direction"
          >
            <el-radio-button label="none">
              <el-tooltip placement="top" trigger="hover" content="不浮动 none">
                <icon-close theme="outline" size="15" />
              </el-tooltip>
            </el-radio-button>
            <el-radio-button label="left">
              <el-tooltip placement="top" trigger="hover" content="左浮动 left">
                <icon-align-text-left-one theme="outline" size="15" />
              </el-tooltip>
            </el-radio-button>
            <el-radio-button label="right">
              <el-tooltip
                placement="top"
                trigger="hover"
                content="右浮动 right"
              >
                <icon-align-text-right-one theme="outline" size="15" />
              </el-tooltip>
            </el-radio-button>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="清除">
          <el-radio-group
            v-model="position_form.clear_float"
            class="clear-float"
          >
            <el-radio-button label="none">
              <el-tooltip placement="top" trigger="hover" content="不清除 none">
                <icon-close theme="outline" size="15" />
              </el-tooltip>
            </el-radio-button>
            <el-radio-button label="left">
              <el-tooltip placement="top" trigger="hover" content="左清除 left">
                <icon-split-turn-down-left theme="outline" size="15" />
              </el-tooltip>
            </el-radio-button>
            <el-radio-button label="right">
              <el-tooltip
                placement="top"
                trigger="hover"
                content="右清除 right"
              >
                <icon-split-turn-down-right theme="outline" size="15" />
              </el-tooltip>
            </el-radio-button>
            <el-radio-button label="both">
              <el-tooltip
                placement="top"
                trigger="hover"
                content="两边清除 both"
              >
                <icon-left-and-right-branch theme="outline" size="15" />
              </el-tooltip>
            </el-radio-button>
          </el-radio-group>
        </el-form-item>
      </el-form>
    </el-collapse-item>
    <el-collapse-item name="5">
      <template #title class="collapse-title">边框</template>
      <div>暂无</div>
    </el-collapse-item>
  </el-collapse>
</template>

<style lang="scss" scoped>
.setting-part-style {
  margin: 0 20px;
  // 文字表单
  .font-form {
    padding: 15px;
    font-size: 15px;
    .el-form-item__label {
      // padding-right: 40px;
      width: 70px;
    }
    .el-slider-box {
      padding-left: 10px;
    }
    // 字号、行高
    .input-number-box {
      width: 100%;
      display: flex;
      flex-wrap: nowrap;
      justify-content: space-between;
      span {
        margin-right: 10px;
      }
    }
  }
  // 背景种类
  .background-type {
    margin-left: 20px;
    .bac-icon {
      padding: 0 45px;
    }
  }
  .background-tools {
    float: right;
    margin: 15px;
    width: 273px;
  }
}
</style>
