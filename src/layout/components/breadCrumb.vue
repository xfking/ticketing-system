<template>
  <el-breadcrumb :separator-icon="ArrowRight" class="breadcrumb">
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item v-if="currentRouteName !== '首页'">
      {{ currentRouteName }}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script lang="ts" setup>
import { ref, watch } from "vue";
import { ArrowRight } from "@element-plus/icons-vue";
import { useRoute } from "vue-router";
const route = useRoute(); // 注入router对象
let currentRouteName = ref(""); // 获取当前路由对象
// 监听当前路由变化
watch(
  () => route.meta.title,
  (newVal: string) => {
    currentRouteName.value = newVal;
  },
  { immediate: true, deep: true }
);
</script>
<style scoped>
.breadcrumb {
  padding: 0 20px;
  height: 40px;
  line-height: 40px;
  box-sizing: border-box;
}
</style>