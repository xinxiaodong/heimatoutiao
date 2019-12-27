<template>
    <div class="cover-image">
        <div v-for="(item,index) in list" :key="index" class="cover-item ">
        <img :src="item ? item : defaultImg" alt="">
    </div>
    </div>
</template>

<script>
export default {
  props: ['list'], // 接受属性
  data () {
    return {
      defaultImg: require('../../assets//img/pic_bg.png') // 将图片变成变量
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
