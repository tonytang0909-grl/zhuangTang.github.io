<template>
    <el-descriptions title="Full stack Shortest Path Project" direction="horizontal" column="1">
    <el-descriptions-item label="Type">Full Stack</el-descriptions-item>
    <el-descriptions-item label="Front End">vue</el-descriptions-item>
    <el-descriptions-item label="Back End">SpringBoot</el-descriptions-item>
    <el-descriptions-item label="BackEnd SQL Server">MySQL</el-descriptions-item>
    <el-descriptions-item label="GitHub Link">
        <el-button
    type="primary"
    tag="a"
    href="https://github.com/tonytang0909-grl/MiningRouteOptimization"
    target="_blank"
    rel="noopener noreferrer"

  >
     Source Code   </el-button>
       
      </el-descriptions-item
    >
    <el-descriptions-item label="Description" >
        <p style="width: 800px;">
            MiningRouteOptimization is a full-stack application designed to optimize material transportation in the mining industry.
         It utilizes advanced algorithms to generate the top K shortest paths between specified source and destination points, considering various constraints. The front end is built with Vue3 and Element UI, enhanced by Axios for HTTP requests. The back end is powered by Spring Boot 3, using Maven for dependency management and MySQL for database operations.
    
        </p>
        </el-descriptions-item>
  </el-descriptions>
  
    
</template>

<style lang="scss" scoped>
.el-descriptions {
  margin-top: 50px;
}
.el-descriptions-item {
  margin-top: 30px;
  
}
</style>
