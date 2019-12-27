<template>
    <div class="cover-image">
        <div @click="openDialog(index)" v-for="(item,index) in list" :key="index" class="cover-item ">
        <img :src="item ? item : defaultImg" alt="">
    </div>
    <el-dialog :visible="dialogVisible" @close="closeDialog">
      <!-- 选择素材组件 -->
      <select-image @selectOneImg="receiveImg"></select-image>
    </el-dialog>
    </div>
</template>

<script>
export default {
  props: ['list'], // 接受属性
  data () {
    return {
      dialogVisible: false, // 控制弹层打开关闭的变量
      defaultImg: require('../../assets//img/pic_bg.png'), // 将图片变成变量
      selectIndex: -1 // 默认下标 -1
    }
  },
  methods: {
    // 接收方法
    receiveImg (img) {
      this.$emit('clickOneImg', img, this.selectIndex)
      this.closeDialog() // 直接关闭弹层
    },
    // 打开
    openDialog (index) {
      this.selectIndex = index // 记住点击的下标
      this.dialogVisible = true // 打开弹层
    },
    // 关闭
    closeDialog () {
      this.dialogVisible = false // 关闭弹层
    }
  }
}
</script>
<style scoped>
    .cover-image {
        display: flex;
        margin: 10px 0;
        margin-left: 100px;
    }

    .cover-image .cover-item {
        border: 1px solid #ccc;
        width: 250px;
        height: 250px;
        padding: 10px;
    }

    .cover-item img {
        height: 100%;
        width: 100%;
    }
</style>
