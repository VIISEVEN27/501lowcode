<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { ref, watch } from "vue";
import { InfoFilled } from '@element-plus/icons-vue';
import { cancelLast,restoreLast } from './UndoLogic';
import {useAppStore} from "@/stores/app"
import axios from "axios"


const radioDevice = ref("pc");

const appStore = useAppStore();

async function generate() {
    await axios.get("/api/download", {params: {id: appStore.id}})
}
</script>

<template>
  <div class="top-area">
    <el-row align="middle">
      <el-col :span="6">
        <span class="top-left-area">501-低代码平台</span>
      </el-col>
      <el-col :span="6">
        <el-radio-group v-model="radioDevice">
          <el-radio-button label="pc" />
          <el-radio-button label="pad" />
          <el-radio-button label="phone" />
        </el-radio-group>
      </el-col>
      <el-col :span="12">
        <div class="top-right-area">
          <!-- 撤销-->
<!--          <el-popconfirm-->
<!--            confirm-button-text="确定"-->
<!--            cancel-button-text="取消"-->
<!--            :icon="InfoFilled"-->
<!--            icon-color="#626AEF"-->
<!--            title="确认要撤销上一步的操作吗？"-->
<!--            @confirm="cancelLast()"-->
<!--          >-->
<!--            <template #reference>-->
              <el-button @click="cancelLast">
                  撤销
                  <Icon icon="akar-icons:arrow-back-thick" />
              </el-button>
<!--            </template>-->
<!--          </el-popconfirm>-->
          
          
          <!-- 恢复 -->
<!--          <el-popconfirm-->
<!--            confirm-button-text="确定"-->
<!--            cancel-button-text="取消"-->
<!--            :icon="InfoFilled"-->
<!--            icon-color="#626AEF"-->
<!--            title="确认要恢复到撤销前的状态吗？"-->
<!--            @confirm="restoreLast()"-->
<!--          >-->
<!--            <template #reference>-->
              <el-button @click="restoreLast">
                  恢复
                  <Icon icon="akar-icons:arrow-forward-thick" />
              </el-button>
<!--            </template>-->
<!--          </el-popconfirm>-->
          

          <el-button>异步加载资源</el-button>
          <el-button>保存到本地</el-button>
          <el-button>重置页面</el-button>
          <el-button type="primary" @click="generate">出码</el-button>
          <el-button type="primary">预览</el-button>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="scss" scoped>
.top-area {
  top: 50%;
  transform: translateY(-50%);
}

.top-left-area {
  font-size: 30px;
  color: #0e0303;
  text-shadow: 0px 1px 0px #c0c0c0, 0px 2px 0px #b0b0b0, 0px 3px 0px #a0a0a0,
    0px 4px 0px #909090, 0px 5px 10px rgba(0, 0, 0, 0.9);
}

.top-right-area {
  text-align: right;
}
</style>
