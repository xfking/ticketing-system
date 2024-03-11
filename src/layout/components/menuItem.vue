<template>
  <div v-if="!menuItem.meta.hidden">
    <el-sub-menu :index="menuIndex" v-if="menuItem.children?.length > 1">
      <template #title>
        <el-icon><location /></el-icon>
        <span>{{ menuItem.meta.title }}</span>
      </template>
      <template v-for="(item, index) in menuItem.children" :key="index">
        <MenuItem :router="item" :index="`${menuIndex}-${index}`" />
      </template>
    </el-sub-menu>
    <el-menu-item v-else :index="menuIndex">
      <el-icon><document /></el-icon>
      <span>{{ menuItem.meta.title }}</span>
    </el-menu-item>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, computed } from "vue";

const props = defineProps({
  router: {
    required: true,
  },
  index: {
    type: Number,
    default: 0,
  },
});

const menuItem = computed(() => {
  return props.router;
});

const menuIndex = computed(() => {
  return props.index;
});
</script>
