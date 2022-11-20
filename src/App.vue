<template>
  <div id="app">
    <!-- <router-view :key="key"></router-view> -->
    <login></login>
  </div>
</template>

<script>
import Demo from './components/Demo.vue'
import UserPage from './components/UserPage.vue'
import RepoBrowser from './components/RepoBrowser.vue'
import login from './components/login.vue'

export default {
  name: 'App',
  components: {
    Demo,
    UserPage,
    RepoBrowser,
    login
  },
  computed: {
    key() {
        return this.$route.fullPath
    }
  },
}

// router.beforeEach((to, from, next) =>{
//   let token = sessionStorage.getItem('token')
//   if(token || to.path === "/login"){
//     axios.get('token/' + token).then((response)=>{
//         judge = response.data.judge
//     })
//     if(judge){
//       next();
//     }else{
//       next('/login')
//     }
    
//   }else{
//     next('/login')
//   }
// })



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
