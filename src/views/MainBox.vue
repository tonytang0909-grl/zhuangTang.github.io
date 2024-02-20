<template>
    <div class="common-layout">
    <el-container>
      <el-header>
        <Header/>
      </el-header>
      <el-container>
        <el-aside width="200px"> <SideMenu></SideMenu></el-aside>
        <el-container>
          <el-main><RouterView></RouterView></el-main>
          <el-footer><Footer /></el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import Footer from '@/components/Footer.vue'
import { RouterView } from 'vue-router'
import SideMenu from '@/components/SideMenu.vue'
import Header from '@/components/Header.vue'
</script>
<style lang="scss" scoped>
.el-aside {
    background-color: #f4f4f5;
    color: #333;
    text-align: center;
    line-height: 60px;
    height: 100vh;
}
.el-header {
    background-color: #b3c0d1;
    color: #333;
    text-align: center;
    line-height: 60px;
    opacity: 0.5;
}
.el-footer {
    background-color: #b3c0d1;
    color: #333;
    text-align: center;
    line-height: 60px;
    //transparency 0.5
    opacity: 0.3;
}

</style>
```