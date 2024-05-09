<template>
  <div id="main-box">
    <SubMenu />
    <div id="content-box">
      <Header />
      <BreadCrumb />
      <div class="app-main">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from "./components/header.vue";
import SubMenu from "./components/subMenu.vue";
import BreadCrumb from "./components/breadCrumb.vue";
</script>

<style lang="less" scoped>
#main-box {
  width: 100%;
  height: 100%;
  display: flex;

  .sub-menu {
    height: 100%;
  }

  #content-box {
    flex: 1;

    .app-main {
      width: calc(100vw - 220px);
      // min-height: 100%;
      height: calc(100% - 64px - 40px); // 顶部导航栏64px,面包屑40px
      padding: 15px;
      box-sizing: border-box;
      background-color: rgba(0, 0, 0, 0.1);
    }
  }
}
</style>
