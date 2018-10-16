<template>
  <div class="register-form">
      <el-form :model="registerForm" status-icon :rules="rules" ref="registerForm" label-width="100px">
        <el-form-item label="用户名" prop="username">
            <el-input type="text" v-model="registerForm.username" placeholder="用户名"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
            <el-input type="text" v-model="registerForm.email" placeholder="邮箱"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
            <el-input type="password" v-model="registerForm.pass" autocomplete="off" placeholder="密码"></el-input>
        </el-form-item>
        <el-form-item label="重复密码" prop="rePass">
            <el-input type="password" v-model="registerForm.rePass" autocomplete="off" placeholder="重复密码"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm('registerForm')">提交</el-button>
            <el-button @click="resetForm('registerForm')">重置</el-button>
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
    var validateEmail = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入邮箱"));
      } else {
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.registerForm.rePass !== "") {
          this.$refs.registerForm.vlaidateField("rePass");
        }
        callback();
      }
    };
    var validateRePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请两次输入密码"));
      } else if (value !== this.registerForm.pass) {
        callback(new Error("两次输入密码不一致"));
      } else {
        callback();
      }
    };
    return {
      registerForm: {
        username: "",
        pass: "",
        rePass: ""
      },
      rules: {
        username: [{ validator: validateUsername, trigger: "blur" }],
        email: [{ validator: validateEmail, trigger: "blur" }],
        pass: [{ validator: validatePass, trigger: "blur" }],
        rePass: [{ validator: validateRePass, trigger: "blur" }]
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
.register-form {
  padding: 100px 250px 0 250px;
  height: 500px;
}
.el-button {
  border-radius: 40px;
}
</style>
