<template>
  <!-- 基本的页面结构 -->
  <el-card v-loading="loading">
    <bread-crumb slot="header">
      <template slot="title">素材管理</template>
    </bread-crumb>
    <el-row type='flex' justify="end">
      <el-upload :http-request="uploadImg" :show-file-list="false" action="abc">
        <el-button size="small" type="primary">点击上传</el-button>
      </el-upload>
    </el-row>
    <!-- 素材 -->
    <el-tabs v-model="activeName" @tab-click="changeTab">
      <el-tab-pane label="全部" name="all">
        <!-- 全部素材内容 -->
        <div class="img-list">
          <el-card class="img-card" v-for="item in list" :key="item.id">
            <img :src="item.url" alt="">
            <el-row class="operate" type="flex" align="middle" justify="space-around">
              <i @click="collectOrCancel(item)" :style="{color: item.is_collected ? 'red' : ''}" class="el-icon-star-on"></i>
              <i @click="delMaterial(item.id)" class="el-icon-delete-solid"></i>
            </el-row>
          </el-card>
        </div>
        <el-row type="flex" justify="center" style="height: 80px;" align="middle">
          <el-pagination background layout="prev,pager,next" :total="page.total" :current-page="page.currentPage"
            :page-size="page.pageSize" @current-change="changePage"></el-pagination>
        </el-row>
      </el-tab-pane>
      <el-tab-pane label="收藏" name="collect">
        <!-- 收藏素材内容 -->
        <div class="img-list">
          <el-card class="img-card" v-for="item in list" :key="item.id">
            <img :src="item.url" alt="">

          </el-card>
        </div>
      </el-tab-pane>
    </el-tabs>

  </el-card>
</template>

<script>
export default {
  data () {
    return {
      loading: false,
      activeName: 'all', // 默认选中全部
      list: [], // 接受全部数据
      page: {
        currentPage: 1, // 当前页码
        pageSize: 8, // 每页条数
        total: 0 // 总条数
      }
    }
  },
  methods: {
    // 定义一个删除方法
    async delMaterial (id) {
      try {
        await this.$confirm('您确定要删除该素材吗')
        // 只有点击了确定 才会执行
        // 调用删除接口
        await this.$axios({
          url: `/user/images/${id}`,
          method: 'delete'
        })
        // 重新拉取
        this.getAllMaterial() // 重新加载数据
      } catch (error) {

      }
    },
    // 收藏或者取消收藏
    async collectOrCancel (row) {
      // 调用 收藏或取消收藏接口
      await this.$axios({
        url: `/user/images/${row.id}`,
        method: 'put',
        data: {
          collect: !row.is_collected // 状态取反
        }
      })
      // 成功进入到then
      this.getAllMaterial()
    },
    // // 上传图片
    async uploadImg (params) {
      this.loading = true // 打开进度条
      let form = new FormData()
      form.append('image', params.file) // 添加文件到formDate
      await this.$axios({
        method: 'post',
        url: '/user/images',
        data: form
      })
      //   说明已经上传成功了一张图片
      this.loading = false // 关闭进度条
      this.getAllMaterial()
    },
    //  切换分页
    changePage (newPage) {
      this.page.currentPage = newPage // 得到最新页码
      this.getAllMaterial()
    },
    // 切换tab事件
    changeTab () {
      this.page.currentPage = 1
      this.getAllMaterial()
    },
    // 获取所有素材
    async getAllMaterial () {
      let result = await this.$axios({
        url: '/user/images',
        params: { collect: this.activeName === 'collect', page: this.page.currentPage, per_page: this.page.pageSize }
      })
      this.list = result.data.results
      this.page.total = result.data.total_count
    }
  },
  created () {
    this.getAllMaterial() // 获取所有的素材
  }
}
</script>
<style lang="less" scoped>
  .img-list {
    display: flex;
    flex-wrap: wrap;
  }

  .img-list .img-card {
    width: 200px;
    height: 240px;
    margin: 20px 50px;
    position: relative;
  }

  .img-card img {
    width: 100%;
    height: 100%;
  }

  .img-card .operate {
    width: 100%;
    font-size: 20px;
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: #f4f5f6;
    height: 30px;
  }
  .operate i{
    cursor: pointer;
  }
</style>
