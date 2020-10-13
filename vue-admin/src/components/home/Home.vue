<template>
  <el-container class="home-container">
      <!-- 页面头部区域 -->
    <el-header>Header</el-header>
    <!-- 页面主体区 -->
    <el-container class="body-container">
    <!-- 侧边栏 -->
    <el-aside width="200px">Aside</el-aside>
    <!-- 内容区域 -->
    <el-main>Main</el-main>
  </el-container>
</el-container>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
 .el-header {
    background-color: #373d41;
  }

  .home-container {
    height: 100%;
  }

  .body-container {
    height:calc(100% - 60px);
  }

  .el-aside {
    float: left;
    height:100%;
    background-color: #333744;
  }
  
  .el-main {
    float: left;
    background-color: #eaedf1;
    width: calc(100% - 200px);
    height:100%;
  }
</style>