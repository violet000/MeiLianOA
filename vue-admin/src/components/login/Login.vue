<template>
    <div class="login_container">
        <div class="login_box">
            <!-- 头像区域 -->
            <div class="avatar_box">
                <img src="../logo.png" alt="">
            </div>
            <!-- 登录表单区域 -->
            <el-form ref="loginFormRef" :model="loginForm" :rules="loginFormRules" label-width="0px" class="login_form">
                <!-- 用户名 -->
                <el-form-item prop="username">
                    <el-input v-model="loginForm.username" prefix-icon="el-icon-user-solid"></el-input>
                </el-form-item>
                <!-- 密码 -->
                 <el-form-item prop="password">
                    <el-input type="password" v-model="loginForm.password" prefix-icon="el-icon-lock"></el-input>
                </el-form-item>
                <!-- 按钮 -->
                <el-form-item class="btns">
                  <el-button type="primary" @click="login">登录</el-button>
                  <el-button type="info" @click="reset">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            //登录表单的数据绑定对象
            loginForm:{
                username:'',
                password:''
            },
            //表单的验证规则对象
            loginFormRules:{
                //用户名的校验规则
                username:[
                    { required: true, message: '请输入用户名', trigger: 'blur' },
                    { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                ],
                //密码的校验规则
                password:[
                    { required: true, message: '请输入密码', trigger: 'blur' },
                    { min: 5, max: 10, message: '请输入5-10位的密码', trigger: 'blur' }
                ]
            }
        }
    },
    methods:{
        //重置表单
        reset(){
           this.$refs.loginFormRef.resetFields();
        },
        //登录
        login(){
            this.$refs.loginFormRef.validate(valid => {
               //验证失败，返回
               if(!valid) return;
              const { data : res } = this.$http.post("login",this.loginForm);
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.login_container {
    width: 100%;
    height: 100%;
    background-color: #2b4b6b;
}
.login_box {
    width: 450px;
    height: 300px;
    background-color: #fff;
    border-radius: 3px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
}
.avatar_box {
    width: 130px;
    height: 130px;
    border: 1px solid #eee;
    border-radius: 50%;
    padding: 10px;
    box-shadow: 0px 0px 10px #ddd;
    position: absolute;
    left: 50%;
    top: -50%;
    transform: translate(-50%,50%);
    background-color: #ddd;
    img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background-color: #eee;
    }
}
.login_form {
    position: absolute;
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
    bottom: 0;
}
.btns {
    display: flex;
    justify-content: flex-end;
}
</style>