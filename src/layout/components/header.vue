<template>
  <div class="header">
    <div class="header-left"></div>
    <div class="header-right">
      <div class="header_user"></div>
      <div class="user">{{ userInfo.name || "暂未获取到用户名称" }}</div>
      <div class="layout">登 出</div>
    </div>
  </div>
</template>
<script lang="ts" setup>
const userInfo = {
  name: "ces",
};
</script>

<style lang="less" scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 64px;
  padding: 0 24px;
  box-sizing: border-box;
  background-color: #242424;
  color: #fff;

  .header-right {
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .header_user {
    width: 32px;
    height: 32px;
    background: #fff;
    border-radius: 20px 20px 20px 20px;
    margin-right: 12px;
  }

  .user {
    margin-right: 24px;
  }

  .layout:hover {
    color: #ffd04b;
  }
}
</style>
