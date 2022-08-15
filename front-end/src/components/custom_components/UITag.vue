<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "UITag",
});
</script>

<script setup lang="ts">
defineProps({
  text: {
    type: String,
    default: "标签",
  },
  type: {
    type: String,
    default: "",
  },
  round: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <el-tag :type="type" :round="round">{{ text }}</el-tag>
</template>
