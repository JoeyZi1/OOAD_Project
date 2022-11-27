<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand text-light" href="/">
            <img src="./assets/logo.png" alt="" width="26" height="26" class="d-inline-block align-text-top">
            MyGitHub
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active text-light" aria-current="page" >Home</a>
            </li>
          </ul>
          <form class="d-flex me-1" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success text-light" type="submit">Search</button>
          </form>

          <Avatar class="btn btn-outline " :username="userName" color="#fff" :background-color="extractColorByName(userName)" size=35 id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
          </Avatar>
          <div class="dropdown" style="transform: translate(-175px, 19px)">
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li><a class="dropdown-item" @click="gotoUser()">
                Signed in as
                <span style="font-weight: bolder;">{{userName}}</span>
              </a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" @click="logout()">Sign out</a></li>
            </ul>
          </div>
          
        </div>
      </div>
    </nav>

    <router-view :key="key"></router-view> 
  </div>
</template>

<script>
import Demo from './components/Demo.vue'
import UserPage from './components/UserPage.vue'
import RepoBrowser from './components/RepoBrowser.vue'
import page404 from './components/404.vue'
import Avatar from 'vue-avatar'
import store from '@/store'


export default {
  name: 'App',
  components: {
    Demo,
    UserPage,
    RepoBrowser,
    page404,
    Avatar,
  },

  data: function(){
    return {
      name: "store.state.userName"
    };
  },

  computed: {
    key() {
      return this.$route.fullPath
    },
    userName(){
      var userInfo = store.state.userName;
      console.log(userInfo);
      return userInfo;
    }
  },

  methods: {
    extractColorByName(name) {
	      var temp = [];
	      temp.push("#");
	      for (let index = 0; index < name.length; index++) {
	        temp.push(parseInt(name[index].charCodeAt(0), 10).toString(16));
	      }
	      return temp.slice(0, 5).join('').slice(0, 4);
	    },

    gotoUser() {
      this.$router.push(
        {
          name: "UserPage",
          params:{
            userName: this.$route.params.userName,
          },
        }
      )
    },

      // 退出事件
    logout() {
      this.$confirm('确定退出系统?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'info'
      }).then(() => {
        this.$store.dispatch('userLogout')
        // this.$store.commit('SET_PERMS', '')
        this.$message({
          type: 'success',
          message: '退出成功!'
        })
        setTimeout(() => {
          location.reload() // 强制刷新
        }, 1000)
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消退出'
        })
      })
    },

  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;
}
</style>
