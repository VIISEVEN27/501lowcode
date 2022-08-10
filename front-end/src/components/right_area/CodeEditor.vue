<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
  name: "CodeEditor",
});
</script>

<script setup lang="ts">
import * as monaco from "monaco-editor";
import { getFuncBody } from "@/scripts/utils";

const props = defineProps<{
  event: string;
  code?: string;
}>();

onMounted(() => {
  monaco.editor.create(document.getElementById("code-editor")!, {
    value: `function ${props.event}Handler(event) {\n  ${
      props.code ? getFuncBody(props.code) : ""
    }\n}`,
    language: "javascript",
    theme: "vs-dark",
    tabSize: 2,
    fontSize: 15,
    automaticLayout: true,
    fixedOverflowWidgets: true,
  });
});
const code = ref(`onClick() {}`);
</script>

<template>
  <div id="code-editor"></div>
</template>

<style>
#code-editor {
  width: 100%;
  height: 400px;
}
</style>
