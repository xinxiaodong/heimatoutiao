<template>
    <div class="login">
        <el-card class="login-card">
            <div class="title">
                <img src="../../assets/img/logo_index.png" alt="">
            </div>
            <!-- 登陆表单 表单容器-->
            <el-form style="margin-top: 30px">
               <el-form-item>
                   <el-input placeHolder="请输入手机号"></el-input>
               </el-form-item>
               <el-form-item>
                   <el-input style="width: 65%;" placeHolder="请输入验证码"></el-input>
                   <el-button style="float: right" plain></el-button>
               </el-form-item>
               <el-form-item>
                   <el-checkbox>我已阅读并同意用户协议和隐私条款</el-checkbox>
               </el-form-item>
               <el-form-item>
                   <el-button type="primary" style="width: 100%">登录</el-button>
               </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>

<script>
export default {
}
</script>

<style scoped>
    .login {
        background-image: url('../../assets/img/login_bg.jpg');
        height: 100vh;
        background-size: cover;
        display: flex;
        justify-content: center;
        align-items: center;

    }

    .login-card {
        width: 440px;
        height: 350px;
    }
    .login-card .title{
      text-align: center;
    }
    .login-card .title img{
     height: 44px;
    }

</style>
