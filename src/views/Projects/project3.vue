<template>
    <el-descriptions title="Page Replacement Algorithms implementation" direction="horizontal" column="1">
    <el-descriptions-item label="Type">Machine Learning / Big Data</el-descriptions-item>
    <el-descriptions-item label="Env">Python / Conda </el-descriptions-item>
    <el-descriptions-item label="Techs">Data Processing / Data visualization</el-descriptions-item>
    <el-descriptions-item label="Algorithms">collaborative Filtering / Simularity Calculation </el-descriptions-item>
    <el-descriptions-item label="GitHub Link">
        <el-button
    type="primary"
    tag="a"
    href="https://github.com/tonytang0909-grl/Data_mining"
    target="_blank"
    rel="noopener noreferrer"

  >
     Source Code   </el-button>
       
      </el-descriptions-item
    >
    <el-descriptions-item label="Description" >
        <p style="width: 800px;">
            Based on the user's previous purchase history, give the prediction of frequent itemsets and recommend items to be purchased.
Using Item-based and User-based collaborative filtering as the core algorithm, utilizing three different similarity calculations to cross-validate the results to increase the accuracy of prediction. Including more features and behaviors (user like, unlike, favorite, purchase, visited...) to increase the accuracy of the model.
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
