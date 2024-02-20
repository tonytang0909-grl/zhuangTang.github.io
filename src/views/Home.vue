<template>
<div class="home">
    <h1 > WELCOME to MY</h1>
    <h2> PORTFOLIO </h2>
    <h3>  I'M ZHUANG TANG  </h3>
    <h4>  A SOFTWARE DEVELOPER  </h4>
    <div class="demo-image">
        <img src="../assets/WechatIMG1610.jpg" alt="gmail" width="300" height="400">
    </div>
</div>

</template>

<script setup>
const url = '@/assets/contacts/gmail.png'
const fit = 'fit'
</script>

<style lang="scss" scoped>
h1 {
    font-family: 'Courier New', Courier, monospace;
    font-size: xx-large;
    color: #170603;
    margin-left: 100px;
    margin-top: 100px;
}
h2 {
    font-family: 'Courier New', Courier, monospace;
    font-size: xx-large;
    color: #170603;
    margin-top: 50px;
    margin-left: 200px;
}
h3 {
    font-family: 'Courier New', Courier, monospace;
    font-size: x-large;
    color: #170603;
    margin-top: 100px;
    margin-left: 350px;
}
h4 {
    font-family: 'Courier New', Courier, monospace;
    font-size: x-large;
    color: #170603;
    margin-left: 100px;
    margin-top: 50px;
}
.demo-image {
    float: right;

    text-align: center;
    margin-top: -300px;
    margin-right: 200px;

}
img {
    border-radius: 50%;
}
.home {
    background-color: #f4f4f5;
    color: #333;
}

</style>
