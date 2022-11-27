<template>
    <div class="bg-light">
    <div class="container-fluid">
      <div class="row">
        <div class="col text-center py-4 mt-2">
          <img class="img-fluid" src="../assets/github.png" alt="GitHub">
        </div>
      </div>
      <div class="row">
        <div class="col text-center">
          <h4 class="text-muted font-weight-light mt-1">Sign in to MyGithub</h4>
        </div>
      </div>
      <div class="row row-custom">
        <div class="col">
          <div class="bg-white p-4 mt-3 border rounded">
            <!-- <form>
              <div class="form-group">
                <label for="usernameInput" class="text-dark">Username</label>
                <input type="text" class="form-control form-control-sm" id="usernameInput" placeholder="Enter username">
              </div>
              <div class="form-group">
                <label for="userpwdInput" class="text-dark d-block">Password
                  <a class="text-primary float-right">Forgot password?</a>
                </label>
                <input type="password" class="form-control form-control-sm" id="userpwdInput" placeholder="Password">
              </div>
              <button type="submit" class="btn rounded-sm btn-primary-custom btn-block btn-sm text-white mt-4" @click="signIn()">Sign in</button>
            </form> -->
            <el-form ref="loginForm" :model="loginForm" label-width="80px" :rules="loginRules">
              <el-form-item label="Username:" prop="account">
                <el-input v-model="loginForm.account" placeholder="Enter username"></el-input>
              </el-form-item>
              <el-form-item label="Password:" prop="passWord">
                <el-input v-model="loginForm.passWord" placeholder="Enter Password"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="success" @click="signIn('loginForm')">Sign in</el-button>
                <el-button type="warning" @click="findPassword()">Forgot password?</el-button>
              </el-form-item>
            </el-form>
          </div>
        </div>
      </div>
      <div class="row mt-3 row-custom">
        <div class="col text-center">
          <div class="border py-3 rounded">
            <span>New to GitHub?</span>
            <button type="button" class="btn btn-primary" @click="createAccount('loginForm')">Create an account.</button> 
          </div>
        </div>
      </div>
    </div>
    </div>
  </template>
  <script>
  import axios from '@/axios'
  // axios.defaults.baseURL = 'http://localhost:8080';

  export default {
    name: "Login",
    data: function () {
      return {
        loginjudge:0,
        loginForm: {
          account: "",
          passWord: "",
        },
        loginRules: {
          account: [{ required: true, message: "请输入账号", trigger: "blur" }],
          passWord: [{ required: true, message: "请输入密码", trigger: "blur" }],
        },
      };
    },
   
    methods: {
      signIn(formName){
        this.$refs[formName].validate(async (valid) => {
            var judge = false 
            var token
            if (valid) {
              judge = await this.$store.dispatch('userLogin',this.loginForm);

              if(judge){
                alert('Sign in suceessfully!')
                this.$router.push({
                  name: "UserPage",
                  params:{
                    userName: this.loginForm.account,
                  }
                })

              } else{
                 alert('Wrong account or passward!');
              }
            } else {
              alert('error submit!!');
              return false;
            }
        });
      },
      async createAccount(formName){
        this.$refs[formName].validate(async (valid) => {
          if (valid) {
             var data = {account:this.loginForm.account, passWord:this.loginForm.passWord}
             await axios.get('/login/signup/'+data.account+'/'+data.passWord)
                            .then((response)=>{this.loginjudge = response.data})
             if(this.loginjudge==1){
              alert('Create account successfully!');
             } else{
              alert('Duplicate user name!');
             }
          } else {
            alert('error submit!!');
              return false;
          }
        });
      }
      
    },
  };
  </script>
  
  <style scoped>/*login.css*/
  /*自定义Sign in 按钮的颜色*/
  .btn-primary-custom {
    background-color: #28a745;
    background-image: linear-gradient(-180deg, #34d058, #28a745 90%);
  }
  
  .btn-primary-custom:hover {
    background-color: #269f42;
    background-image: linear-gradient(180deg, #2fcb53, #269f42 90%);
    border-color: rgba(27, 31, 35, .5);
  }
  
  a {
    cursor: pointer;
  }
  
  .row-custom {
    width: 500px;
    margin: 0 auto;
  }
  
  </style>>
  
  