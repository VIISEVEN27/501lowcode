<script setup lang="ts">

    import { Icon } from '@iconify/vue';

    import { ref } from 'vue'

    const radioDevice = ref('pc');

</script>

<template>        
    
    <div class="top-area">
        <el-row :gutter="10" >
            
            <el-col :span="6"><span class="top-left-area">501-低代码平台</span></el-col> 

            <el-col :span="6">
                <span class="top-center-area">
                    <div >
                        <el-radio-group v-model="radioDevice">
                        <el-radio-button label="pc" />
                        <el-radio-button label="pad" />
                        <el-radio-button label="phone" />
                        
                        </el-radio-group>
                    </div>
                </span>
            </el-col>

            <el-col :span="12">
                <span class="top-right-area">
                <div class="mb-4">
                    <!-- 撤销-->
                    <el-button><Icon icon="akar-icons:arrow-forward-thick" /></el-button>
                    <!-- 恢复 -->
                    <el-button><Icon icon="akar-icons:arrow-back-thick" /></el-button>
                    <el-button>异步加载资源</el-button>
                    <el-button>保存到本地</el-button>
                    <el-button>重置页面</el-button>
                    <el-button type="primary">出码</el-button>
                    <el-button type="primary">预览</el-button>
                </div>
                </span>
            </el-col>
            
        </el-row>
    </div>
    
        
</template>

<style lang="scss" scoped>
    .top-area {
        border: 1px solid var(--darker-border-color);
        padding: 1em;
    }
    
    .top-left-area{
        font-size: 30px;
        color:#0e0303;
        text-shadow:0px 1px 0px #c0c0c0,
            0px 2px 0px #b0b0b0,
            0px 3px 0px #a0a0a0,
            0px 4px 0px #909090,
            0px 5px 10px rgba(0, 0, 0, .9);
    }
    
    .top-center-area{
        margin-top: 10px;
    }
    .top-right-area{
        margin-top: 10px;
        text-align: right;
    }
    

    
</style>