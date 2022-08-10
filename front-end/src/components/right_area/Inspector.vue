<script setup lang="ts">
import { useAppStore } from "@/stores/app.js";
import { computed, ref } from "vue";
import { searchVcomponent, removeVcomponentById } from "./EditorContent";
import componentInfo from "@/assets/component_info.js";
import CodeEditor from "./CodeEditor.vue";
import * as monaco from "monaco-editor";
import { ElMessage } from "element-plus";

const appStore = useAppStore();
const vcomponent = computed(() => searchVcomponent(appStore.activeComponent));
const propSchema = computed(() => {
  if (!vcomponent.value) {
    return undefined;
  }
  return componentInfo[vcomponent.value.type].propSchema;
});
const styleSchema = computed(() => {
  if (!vcomponent.value) {
    return undefined;
  }
  return componentInfo[vcomponent.value.type].styleSchema;
});
const eventSchema = computed(() => {
  if (!vcomponent.value) {
    return undefined;
  }
  return componentInfo[vcomponent.value.type].eventSchema;
});

function currentStyleValue(name: string) {
  const el = document.getElementById(vcomponent.value!.name);
  if (!el || !(name in el.style)) {
    return "";
  }
  return (el?.style as Record<string, any>)[name];
}

const showCodeEditor = ref(false);

function saveEventHandler(name: string) {
  const funcBody = monaco.editor
    .getModels()[0]
    .getLinesContent()
    .slice(1, -1)
    .join("\n");
  const func = new Function("event", funcBody);
  if (!vcomponent.value) {
    return;
  }
  if (!vcomponent.value.events) {
    vcomponent.value.events = {};
  }
  vcomponent.value!.events[name] = func;
  ElMessage({
    message: `${name} 事件处理函数保存成功`,
    type: 'success',
  });
  showCodeEditor.value = false;
}
</script>

<template>
  <div class="inspector">
    <div class="header">
      <h3 v-if="vcomponent">
        {{ vcomponent?.name }} ({{ componentInfo[vcomponent?.type].zh }})
      </h3>
      <h3 v-else>未选中组件</h3>
      <el-popconfirm
        v-if="vcomponent && vcomponent.type !== 'UIPage'"
        title="确认要删除组件吗?"
        @confirm="removeVcomponentById(vcomponent!.name)"
        confirm-button-text="删除"
        cancel-button-text="取消"
        confirm-button-type="danger"
      >
        <template #reference>
          <el-button type="danger">删除</el-button>
        </template>
      </el-popconfirm>
    </div>
    <el-tabs type="border-card" class="tabs">
      <el-tab-pane label="属性">
        <div v-if="!vcomponent || !propSchema">没有可以设置的属性</div>
        <div v-else v-for="schema in propSchema" class="form-item">
          <div class="prop-name">
            {{ schema.desc }}
          </div>
          <el-input-number
            v-if="schema.type === 'number'"
            :modelValue="vcomponent.props![schema.name] || schema.defaultValue"
            @update:modelValue="(newValue: number) => vcomponent!.props![schema.name] = newValue"
          />
          <el-input
            v-else-if="schema.type === 'string'"
            :modelValue="vcomponent.props![schema.name] || schema.defaultValue"
            @update:modelValue="(newValue: string) => vcomponent!.props![schema.name] = newValue"
          >
          </el-input>
          <el-switch
            v-else-if="schema.type === 'boolean'"
            :modelValue="vcomponent.props![schema.name] || schema.defaultValue"
            @update:modelValue="(newValue: boolean) => vcomponent!.props![schema.name] = newValue"
          />
          <el-select
            v-else-if="schema.type.endsWith('_select')"
            :modelValue="vcomponent.props![schema.name] || schema.defaultValue"
            @update:modelValue="(newValue: string) => vcomponent!.props![schema.name] = newValue"
          >
            <el-option
              v-for="option in schema.candidates"
              :key="option"
              :label="option"
              :value="option"
            />
          </el-select>
          <el-divider />
        </div>
      </el-tab-pane>
      <el-tab-pane label="样式">
        <div v-if="!vcomponent || !styleSchema">没有可以设置的样式</div>
        <div v-else v-for="schema in styleSchema" class="form-item">
          <div class="prop-name">
            {{ schema.desc }}
          </div>
          <el-input-number
            v-if="schema.type === 'number'"
            :modelValue="vcomponent.styles![schema.name] || currentStyleValue(schema.name)"
            @update:modelValue="(newValue: number) => vcomponent!.styles![schema.name] = newValue"
          />
          <el-input
            v-else-if="schema.type === 'string'"
            :modelValue="vcomponent.styles![schema.name] || currentStyleValue(schema.name)"
            @update:modelValue="(newValue: string) => vcomponent!.styles![schema.name] = newValue"
          >
          </el-input>
          <el-switch
            v-else-if="schema.type === 'boolean'"
            :modelValue="vcomponent.styles![schema.name] || currentStyleValue(schema.name)"
            @update:modelValue="(newValue: boolean) => vcomponent!.styles![schema.name] = newValue"
          />
          <el-select
            v-else-if="schema.type.endsWith('_select')"
            :modelValue="vcomponent.styles![schema.name] || currentStyleValue(schema.name)"
            @update:modelValue="(newValue: string) => vcomponent!.styles![schema.name] = newValue"
          >
            <el-option
              v-for="option in schema.candidates"
              :key="option"
              :label="option"
              :value="option"
            />
          </el-select>
          <el-color-picker
            v-else-if="schema.type === 'color'"
            :modelValue="vcomponent.styles![schema.name] || currentStyleValue(schema.name)"
            @update:modelValue="(newValue: string) => vcomponent!.styles![schema.name] = newValue"
          />
          <el-divider />
        </div>
      </el-tab-pane>
      <el-tab-pane label="事件">
        <div v-if="!vcomponent || !eventSchema">没有可以设置的事件</div>
        <div v-else v-for="schema in eventSchema" class="form-item">
          <div class="prop-name">
            {{ schema.desc }}
          </div>
          <el-button @click="showCodeEditor = true">写代码</el-button>
          <el-drawer
            v-model="showCodeEditor"
            direction="rtl"
            :append-to-body="true"
          >
            <template #header>
              <h3>{{ schema.desc }}</h3>
            </template>
            <template #default>
              <CodeEditor
                :event="schema.name"
                :code="
                  vcomponent.events && vcomponent.events[schema.name]
                    ? vcomponent.events[schema.name].toString()
                    : undefined
                "
              />
            </template>
            <template #footer>
              <div style="flex: auto">
                <el-button @click="showCodeEditor = false">取消</el-button>
                <el-button type="primary" @click="saveEventHandler(schema.name)"
                  >确认</el-button
                >
              </div>
            </template>
          </el-drawer>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<style lang="scss" scoped>
.inspector {
  height: 100%;
  border-left: 1px solid var(--base-border-color);
  padding: 1em;
  display: flex;
  flex-direction: column;

  > .header {
    display: flex;
    justify-content: space-between;
  }

  > .tabs {
    flex-grow: 1;
  }

  .prop-name {
    margin-bottom: 5px;
    color: var(--secondary-text-color);
    font-size: 0.9em;
  }
}
</style>
