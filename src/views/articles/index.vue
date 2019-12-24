<template>
    <el-card class="articles">
        <bread-crumb slot="header">
            <template slot="title">文章列表</template>
        </bread-crumb>
        <!-- el-row 行 -->
        <el-row class="searchTool">
            <el-col :span="2" value>
                <span>文章状态</span>
            </el-col>
            <el-col :span="18">
                <el-radio-group v-model="formData.status">
                    <el-radio :label="5">全部</el-radio>
                    <el-radio :label="0">草稿</el-radio>
                    <el-radio :label="1">待审核</el-radio>
                    <el-radio :label="2">审核通过</el-radio>
                    <el-radio :label="3">审核失败</el-radio>
                </el-radio-group>
            </el-col>
        </el-row>
        <el-row class="searchTool">
            <el-col :span="2">
                <span>频道列表</span>
            </el-col>
            <el-col :span="18">
                <el-select v-model="formData.channel_id " value>
                    <el-option v-for="item in channels" :key="item.id" :label="item.name" :value="item.id"></el-option>
                </el-select>
            </el-col>
        </el-row>
        <el-row class="searchTool">
            <el-col :span="2">
                <span>时间列表</span>
            </el-col>
            <el-col :span="18">
                <el-date-picker v-model="formData.dateRange" type="daterange" range-separator="-"
                    start-placeholder="开始日期" end-placeholder="结束日期">
                </el-date-picker>
            </el-col>
        </el-row>
        <!-- // 主体 -->
        <el-row class="total">
            <span>共找到1000</span>
        </el-row>
        <!-- 循环的模版 -->
        <el-row v-for="item in 100" :key="item" class="article-item" type="flex" justify="space-between">
            <!-- 左侧 -->
            <el-col :span="14">
                <el-row type="flex">
                    <img src="../../assets//img//404.png" alt="">
                    <div class="info">
                        <span>niaho</span>
                        <el-tag class="tag">标签一</el-tag>
                        <p class="date">shijain</p>
                    </div>
                </el-row>
            </el-col>
            <!-- 右侧 -->
            <el-col :span="6">
                <el-row class="rigth" type="flex" justify="end">
                    <span><i class="el-icon-edit"></i>修改</span>
                    <span><i class="el-icon-delete"></i>删除</span>
                </el-row>
            </el-col>
        </el-row>
    </el-card>
</template>

<script>
export default {
  data () {
    return {
      formData: {
        status: 5, // 状态
        channel_id: null, // 默认是空
        dateRange: []
      },
      channels: [], // 定义一个channels接受频道
      value: ''
    }
  },
  methods: {
    getChannels () {
      this.$axios({
        url: 'channels'
      }).then(result => {
        this.channels = result.data.channels // 获取频道数据
      })
    }
  },
  created () {
    this.getChannels() // 调用获取频道数据
  }
}
</script>
<style scoped>
    .articles .searchTool {
        height: 60px;
        padding-left: 50px
    }

    .articles .total {
        margin: 60px 0;
        height: 30px;
        border-bottom: 1px solid #ccc;
    }
.articles .article-item{
    margin: 20px 0;
    padding: 10px 0;
    border-bottom: 1px solid #f2f3f5;
}
    .article-item img {
        width: 180px;
        height: 100px;
        margin-right: 10px;
        border-radius: 4px;
    }

    .article-item .info {
        height: 100px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .info .tag {
        max-width: 80px;
    }

    .info .date {
        color: #999;
        font-size: 12px;
    }

    .right span {
        margin-left: 8px;
        font-size: 14px;
        cursor: pointer;
    }
</style>
