<!--
  中间面板的实现，只实现了静态页面，后续还需完善
 -->

<script setup lang="ts">
import Preview from "@/components/main_area/Preview.vue"
import {Page} from "@/entities/page"
import {inject} from "vue"

const page = inject("page") as Page
</script>

<template>

  <div class="lc-workbench">

    <el-container>
      <el-header class="lc-workbench-header">

            <div class="lc-workbench-header-contentArea">
              <div class="lc-workbench-header-content">
                  {{ page.title }}
              </div>
            </div>

      </el-header>

      <el-main class="lc-workbench-main">
          <Preview/>
          <!-- area、block分别表示区域、区块，参考阿里低代码平台 -->
<!--          <div class="lc-workbench-main-full">-->
<!--            <div class="area">-->
<!--              <div class="areaTitle">-->
<!--                区域标题-->
<!--              </div>-->
<!--              <div class="block">-->
<!--                <div class="blockTitle">-->
<!--                  区块标题-->
<!--                </div>-->
<!--                <el-divider />-->
<!--                <div class="dragArea">-->
<!--                  拖拽组件或模板到此处-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->

<!--          </div>-->

<!--          <el-divider>-->
<!--            <el-icon><star-filled /></el-icon>-->
<!--          </el-divider>-->

<!--          &lt;!&ndash; 待添加的 &ndash;&gt;-->
<!--          <div class="lc-workbench-main-empty">-->
<!--            <div class="lc-workbench-main-empty-text">-->
<!--              <div>待添加内容区域</div>-->
<!--            </div>-->
<!--          </div>-->

      </el-main>
    </el-container>
  </div>

</template>

<style lang="scss" scoped>
.lc-workbench{
    margin-left: 0;
    margin-right: 0;
}

//.lc-workbench,.block{
//
//  border: 1px solid var(--darker-border-color);
//}

.lc-workbench-main{
  background-color: white;
  border: 1px solid var(--darker-border-color);
}

//.lc-workbench-header-content{
//  margin: 10px;
//  font-size: 20px;
//}

//.block{
//  margin: 10px;
//  background-color:azure;
//}
//
//.areaTitle{
//  font-size:25px;
//  margin: 5px;
//}
//
//.blockTitle{
//  font-size:20px;
//  margin: 10px;
//}
</style>