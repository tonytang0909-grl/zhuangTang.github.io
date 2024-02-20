<template>
    <el-row class="tac">
    <el-col >
      
      <el-menu 
      default-active="/home"
      :router="true"
      background-color="#f4f4f5"
      >
        <el-menu-item index="/home">
            <el-icon><HomeFilled /></el-icon>
          <span>WELCOME</span>
        </el-menu-item>


        <el-sub-menu index="/experience">
          <template #title>
            <el-icon><Promotion /></el-icon>
            <span>EXPERIENCES</span>
          </template>
            <el-menu-item index="/experience1">EXPERIENCES 1</el-menu-item>
            <el-menu-item index="/experience2">EXPERIENCES 2</el-menu-item>
            <!-- <el-menu-item index="/experience3">EXPERIENCES 3</el-menu-item> -->
        </el-sub-menu>

        <el-sub-menu index="/project">
          <template #title>
            <el-icon><Files /></el-icon>
            <span>PROJECTS</span>
          </template>
            <el-menu-item index="/project1">MiningRouteOptimization</el-menu-item>
            <el-menu-item index="/project2">Page Replacement Simulator</el-menu-item>
            <el-menu-item index="/project3">Recommendation System</el-menu-item>
            <el-menu-item index="/project4">Compiler</el-menu-item>
        </el-sub-menu>
        <el-menu-item index="/award">
            <el-icon><Trophy /></el-icon>
          <span>HONORS & AWARDS</span>
        </el-menu-item>

        <el-menu-item index="/skills">
            <el-icon><Tools /></el-icon>
          <span>SKILLS</span>
        </el-menu-item>

        <el-menu-item index='/education'>
            <el-icon><Reading /></el-icon>
          <span>EDUCATION</span>
        </el-menu-item>

        <el-menu-item index="/about">
            <el-icon><Postcard /></el-icon>
          <span>ABOUT</span>
        </el-menu-item>

      </el-menu>
      

    </el-col>
  </el-row>
</template>

<script setup>
import { HomeFilled, Promotion, Files, Trophy, Tools, Reading, Postcard} from '@element-plus/icons-vue'
</script>

<style lang="scss" scoped>  

</style>
