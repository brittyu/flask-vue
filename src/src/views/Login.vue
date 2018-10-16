<template>
  <div class="login-form">
      <el-form :model="loginForm" status-icon :rules="rules2" ref="loginForm" label-width="100px">
        <el-form-item label="用户名" prop="username">
            <el-input type="text" v-model="loginForm.username" placeholder="用户名/邮箱/手机号"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
            <el-input type="password" v-model="loginForm.pass" autocomplete="off" placeholder="密码"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm('loginForm')">提交</el-button>
            <el-button @click="resetForm('loginForm')">重置</el-button>
        </el-form-item>
    </el-form>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  data() {
    var validateUsername = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入登录账户"));
      } else {
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        callback();
      }
    };
    return {
      loginForm: {
        username: "",
        pass: ""
      },
      rules2: {
        username: [{ validator: validateUsername, trigger: "blur" }],
        pass: [{ validator: validatePass, trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style scoped>
.login-form {
  padding: 100px 250px 0 250px;
  height: 500px;
}
.el-button {
  border-radius: 40px;
}
</style>
