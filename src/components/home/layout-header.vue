<template>
    <el-row class='layout-header' type="flex" align="middle" justify="space-between">
        <el-col class="left" :sapn="6">
            <i class='el-icon-s-unfold'></i>
            <span class='title'>江苏传智播客教育科技股份有限公司</span>
        </el-col>
        <el-col class="right" :sapn="4">
            <el-row type='flex' justify="end" align="middle">
                <img src="../../assets/img/305222.jpg" alt="">
                <!-- 下拉菜单 -->
                <el-dropdown>
                    <span>美女如画</span>
                    <!-- 下拉菜单  具名插槽 -->
                    <el-dropdown-menu slot="dropdown">
                        <!-- 下拉内容 -->
                        <el-dropdown-item>个人信息</el-dropdown-item>
                        <el-dropdown-item>Git地址</el-dropdown-item>
                        <el-dropdown-item>退出</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </el-row>
        </el-col>
    </el-row>
</template>

<script>
export default {
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

    .right img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }
</style>
