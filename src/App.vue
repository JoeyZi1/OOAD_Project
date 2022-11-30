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
              <a class="nav-link active text-light" aria-current="page" @click="gotoUser(userName)">Home</a>
            </li>
          </ul>
          <form class="d-flex me-1" role="search">
            <input class="form-control me-2" type="search" placeholder="Search a respository" aria-label="Search" v-model="searchText">
            <button class="btn btn-outline-success text-light" data-bs-toggle="modal" data-bs-target="#searchModal" @click="startSearch()">Search</button>
          </form>


          <Avatar v-if="userName" class="btn btn-outline " :username="userName" color="#fff" :background-color="extractColorByName(userName)" :size=35 id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
          </Avatar>
          <div v-if="userName" class="dropdown" style="transform: translate(-175px, 19px)">
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li><a class="dropdown-item" @click="gotoUser(userName)">
                Signed in as
                <span style="font-weight: bolder;">{{userName}}</span>
              </a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" @click="logout()">Sign out</a></li>
            </ul>
          </div>
          <button v-else class="btn btn-outline-primary text-light" @click="gotoLogin()">Log in</button>
          
        </div>
      </div>
    </nav>
    <router-view :key="key"></router-view> 

<!-- search Modal -->
<div class="modal fade modal-lg" id="searchModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-scrollable">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Search result</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div v-if="searchList.length<=0">No matching result</div>
        <ul class="list-group list-group-flush" v-for="repo in searchList" :key="repo.id">
          <li class="list-group-item p-4 border-bottom">
            <div class="d-flex w-100 justify-content-start mb-2">
                <el-link class="text-primary" style="margin-right: 8px" @click="enterSearchRepo(repo.agentName,repo.repoName)"  data-bs-dismiss="modal">
                <span class="repoName">{{repo.repoName}}</span>
                </el-link>       
              <span class="ms-2 badge rounded-pill bg-secondary me-auto align-self-center">{{checkVisibility(repo.authority)}}</span>

              <Avatar class="btn btn-outline me-1" :username="repo.agentName" color="#fff" :background-color="extractColorByName(repo.agentName)" :size=25 id="dropdownMenuButton1">
              </Avatar>
              <span @click="gotoUser(repo.agentName)" data-bs-dismiss="modal">{{repo.agentName}}</span>
              
            </div>

            

            <div class="hstack">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
              </svg>
              <span class="ms-1 me-1">{{repo.star}}</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-diagram-2 ms-2" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M6 3.5A1.5 1.5 0 0 1 7.5 2h1A1.5 1.5 0 0 1 10 3.5v1A1.5 1.5 0 0 1 8.5 6v1H11a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0v-1A.5.5 0 0 1 5 7h2.5V6A1.5 1.5 0 0 1 6 4.5v-1zM8.5 5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1zM3 11.5A1.5 1.5 0 0 1 4.5 10h1A1.5 1.5 0 0 1 7 11.5v1A1.5 1.5 0 0 1 5.5 14h-1A1.5 1.5 0 0 1 3 12.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm4.5.5a1.5 1.5 0 0 1 1.5-1.5h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1A1.5 1.5 0 0 1 9 12.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1z"/>
              </svg>
              <span class="ms-1 me-1">{{repo.fork}}</span>
            </div>             
          </li>

        </ul>




      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>


  </div>
</template>

<script>
import Demo from './components/Demo.vue'
import UserPage from './components/UserPage.vue'
import RepoBrowser from './components/RepoBrowser.vue'
import page404 from './components/404.vue'
import Avatar from 'vue-avatar'
import store from '@/store'
import axios from '@/axios'


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
      searchText: '',

      searchList:[
        // {agentName: "User_A",repoName: "searchResult",star: 1,fork: 0,authority: 1,ownerRepoId: ''}
      ],

      starRepoList:[
        {"agentName":"User_A","authority":1,"fork":0,"ownerRepoId":"2666908d8f3dad76eb0b45899a556e0a071f32d7","repoName":"Repo_001","star":0},
        {"agentName":"User_A","authority":1,"fork":0,"ownerRepoId":"4a0f2acceaa4049a570bc52169fbd4683895af74","repoName":"qq","star":0},
        {"agentName":"User_B","authority":1,"fork":0,"ownerRepoId":"5d9f1778a1471c0f9cd24524dc0366756bc0041e","repoName":"Repo_002","star":0},
        {"agentName":"User_A","authority":1,"fork":0,"ownerRepoId":"2666908d8f3dad76eb0b45899a556e0a071f32d7","repoName":"Repo_001","star":0},
        {"agentName":"User_A","authority":1,"fork":0,"ownerRepoId":"4a0f2acceaa4049a570bc52169fbd4683895af74","repoName":"qq","star":0},
        {"agentName":"User_B","authority":1,"fork":0,"ownerRepoId":"5d9f1778a1471c0f9cd24524dc0366756bc0041e","repoName":"Repo_002","star":0},
        {"agentName":"User_A","authority":1,"fork":0,"ownerRepoId":"2666908d8f3dad76eb0b45899a556e0a071f32d7","repoName":"Repo_001","star":0},
        {"agentName":"User_A","authority":1,"fork":0,"ownerRepoId":"4a0f2acceaa4049a570bc52169fbd4683895af74","repoName":"qq","star":0},
        {"agentName":"User_B","authority":1,"fork":0,"ownerRepoId":"5d9f1778a1471c0f9cd24524dc0366756bc0041e","repoName":"Repo_002","star":0},
        {"agentName":"User_A","authority":1,"fork":0,"ownerRepoId":"2666908d8f3dad76eb0b45899a556e0a071f32d7","repoName":"Repo_001","star":0},
        {"agentName":"User_A","authority":1,"fork":0,"ownerRepoId":"4a0f2acceaa4049a570bc52169fbd4683895af74","repoName":"qq","star":0},
        {"agentName":"User_B","authority":1,"fork":0,"ownerRepoId":"5d9f1778a1471c0f9cd24524dc0366756bc0041e","repoName":"Repo_002","star":0},
      ]
    };
  },

  computed: {
    key() {
      return this.$route.fullPath
    },
    userName(){
      var userInfo = store.state.userName;
      return userInfo;
    }
  },

  methods: {
    enterSearchRepo: function(user, repoName){ 
      this.$router.push(
        {
          name: "RepoBrowser",
          params:{
            userName: user,
            repoParam: repoName,
            branchName: "master",
            queryPath: "root"
          }
        }
      )

      //console.log(this.$route.path)
    },

    async startSearch() {
      await axios.get('/fuzzySearch/'+this.searchText).then((response)=>{
            this.searchList = response
          })
      
    },

    checkVisibility: function(auth) {
      if (auth === 1){
        return "public"
      } else {
        return "private"
      }
    },

    extractColorByName(name) {
	      var temp = [];
	      temp.push("#");
	      for (let index = 0; index < name.length; index++) {
	        temp.push(parseInt(name[index].charCodeAt(0), 10).toString(16));
	      }
	      return temp.slice(0, 5).join('').slice(0, 4);
	    },

    gotoUser(name) {
      console.log('lllll=-------')
      this.$router.push(
        {
          name: "UserPage",
          params:{
            userName: name,
          },
          query: {
            path: +new Date() 
          }
        }
      )
    },

    gotoLogin() {
      this.$router.push(
        {
          name: "login",
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
        this.$message({
          type: 'success',
          message: '退出成功!'
        })
        location.reload()
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
