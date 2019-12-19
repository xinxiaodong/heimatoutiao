<template>
   <el-container>
       <!-- 左右布局 -->
    <el-aside style="background-color:  #353b4e;height: 100vh; width: 230px;">
        <layout-aside></layout-aside>
    </el-aside>
       <!-- 放置container -->
       <el-container>
      <!-- 上下布局 -->
      <el-header>
          头部
      </el-header>
      <el-main>
          主体
      </el-main>
       </el-container>
   </el-container>
</template>

<script>
import layoutAside from '../../components/home/layout-aside' // 引入
export default {
  components: {
    'layout-aside': layoutAside
  }
}
</script>
<style scoped>

</style>
