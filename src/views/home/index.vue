<template>
  <el-container>
    <!-- 左右布局 -->
    <el-aside :style="{width:collaspse ? '60px' : '230px'}"
      style="transition:all 0.3s; background-color:  #353b4e;min-height: 100vh;">
      <!-- 放置左侧组件   -->
      <layout-aside :collaspse="collaspse"></layout-aside>
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
import eventBus from '../../utils/eventBus.js'
export default {
  data () {
    return {
      collaspse: false // 是否折叠
    }
  },
  components: {

  },
  created () {
    // 开启监听
    eventBus.$on('changeCollapse', () => {
      this.collaspse = !this.collaspse
    })
  }
}
</script>
<style scoped>

</style>
