<template>
   <el-container>
       <!-- 左右布局 -->
    <el-aside style="background-color:  #353b4e;min-height: 100vh; width: 230px;">
        <layout-aside></layout-aside>
    </el-aside>
       <!-- 放置container -->
       <el-container>
      <!-- 上下布局 -->
      <el-header>
          <!-- 头部组件 -->
        <layout-header></layout-header>
      </el-header>
      <el-main style="padding: 0px">
          <!-- 二级路由容器 -->
          <router-view></router-view>
      </el-main>
       </el-container>
   </el-container>
</template>

<script>

export default {
  components: {

  }
}
</script>
<style scoped>

</style>
