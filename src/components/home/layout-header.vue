<template>
  <el-row class='layout-header' type="flex" align="middle" justify="space-between">
    <el-col class="left" :sapn="6">
      <!-- 左侧图标 -->
      <i @click="collaspseOrOpen" :class="{'el-icon-s-unfold': collaspse,'el-icon-s-fold': !collaspse}"></i>
      <span class='title'>江苏传智播客教育科技股份有限公司</span>
    </el-col>
    <el-col class="right" :sapn="4">
      <el-row type='flex' justify="end" align="middle">
        <img :src="!userInfo.photo ? userInfo.photo : defaultImg" alt="">
        <!-- 下拉菜单 -->
        <el-dropdown @command="handle">
          <span>{{userInfo.name}}</span>
          <!-- 下拉菜单  具名插槽 -->
          <el-dropdown-menu slot="dropdown">
            <!-- 下拉内容 -->
            <el-dropdown-item command="info">个人信息</el-dropdown-item>
            <el-dropdown-item command="git">Git地址</el-dropdown-item>
            <el-dropdown-item command="lgout">退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
import eventBus from '../../utils/eventBus.js' // 引入公共实例
export default {
  data () {
    return {
      collaspse: false, // 是否折叠
      userInfo: {}, // 用户信息
      defaultImg: require('../../assets/img/313400.jpg') // 先把地址转换称变量
    }
  },
  created () {
    // 查询数据
    this.getUserInfo()
    // 实例创建完毕 立刻监听
    eventBus.$on('updateUserInfoSuccess', () => {
      // 别人告诉你 他更新了数据 应该立刻处理
      this.getUserInfo()
    })
  },
  methods: {
    collaspseOrOpen () {
      // 直接取反
      this.collaspse = !this.collaspse // 直接返回
      // 通知要改变宽度的组件
      eventBus.$emit('changeCollapse') // 改变折叠状态
    },
    getUserInfo () {
      this.$axios({
        url: '/user/profile'
      }).then(result => {
        this.userInfo = result.data // 获取用户个人信息
      })
    },
    handle (command) {
      if (command === 'lgout') {
        window.localStorage.removeItem('user-token') // 删除用户的令牌
        this.$router.push('/login')
      } else if (command === 'git') {
        window.location.href = 'https://github.com/xinxiaodong/heimatoutiao'
      } else if (command === 'info') {
        this.$router.push('/home/account')
      }
    }
  }
}
</script>
<style scoped>
  .layout-header {
    height: 60px;
  }

  .layout-header .left {
    font-size: 18px
  }

  .left .title {
    margin-left: 4px;
    color: #2c3e50;
    font-size: 16px;
  }
  .left i{
    font-size: 22px;
  }
  .right img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
</style>
