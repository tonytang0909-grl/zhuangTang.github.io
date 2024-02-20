<template>
    <div class="demo-progress">
        <el-progress :text-inside="false" :stroke-width="6" :percentage="100"   status="success">JAVA</el-progress>
        <el-progress :text-inside="false" :stroke-width="6" :percentage="100"   status="success">SpringBoot/Maven</el-progress>
        <el-progress :text-inside="false" :stroke-width="6" :percentage="80"  status="success">C++</el-progress>
        <el-progress :text-inside="false" :stroke-width="6" :percentage="80"  status="success">Python</el-progress>
        <el-progress :text-inside="false" :stroke-width="6" :percentage="50"  status="success">HTML/CSS/JS</el-progress>
        <el-progress :text-inside="false" :stroke-width="6" :percentage="80"  status="success">Vue</el-progress>
        <el-progress :text-inside="false" :stroke-width="6" :percentage="40"  status="success">React</el-progress>
        <el-progress :text-inside="false" :stroke-width="6" :percentage="100"  status="success">Node.js</el-progress>
        <el-progress :text-inside="false" :stroke-width="6" :percentage="60"  status="success">Express</el-progress>
        <el-progress :text-inside="false" :stroke-width="6" :percentage="60"  status="success">MongoDB</el-progress>
        <el-progress :text-inside="false" :stroke-width="6" :percentage="80"  status="success">MySQL</el-progress>
        <el-progress :text-inside="false" :stroke-width="6" :percentage="60"  status="success">Redis</el-progress>
        <el-progress :text-inside="false" :stroke-width="6" :percentage="60"  status="success">Docker</el-progress>
        <el-progress :text-inside="false" :stroke-width="6" :percentage="50"  status="success">Kubernetes</el-progress>
        <el-progress :text-inside="false" :stroke-width="6" :percentage="60"  status="success">Jenkins</el-progress>
        <el-progress :text-inside="false" :stroke-width="6" :percentage="80"  status="success">Git</el-progress>
        <el-progress :text-inside="false" :stroke-width="6" :percentage="60"  status="success">JIRA</el-progress>
    </div>

    <div class="demo-progress1">
        <el-progress :text-inside="false" :stroke-width="6" :percentage="60"   status="alert">Machine Learning</el-progress>
        <el-progress :text-inside="false" :stroke-width="6" :percentage="50"   status="alert">Data Visualization</el-progress>
        <el-progress :text-inside="false" :stroke-width="6" :percentage="50"   status="alert">Data Processing</el-progress>
        <el-progress :text-inside="false" :stroke-width="6" :percentage="20"   status="alert">HDL/VHDL</el-progress>
        </div>
</template>

<style scoped>
.demo-progress{
    margin-top: 100px;
}
.demo-progress .el-progress--line {
    float: left;
    margin-right: 50px;
  margin-bottom: 15px;
  width: 350px;
}
.demo-progress1 .el-progress--line{
    width: 350px;
    margin-top: 50px;
    margin-right: 50px;
    float: left;
}
</style>