<template>
  <div id="app">

    <router-view :key="key"></router-view>
    <!-- <UserPage></UserPage>  -->
    <!-- <RepoBrowser></RepoBrowser> -->
  </div>
</template>

<script>
import Demo from './components/Demo.vue'
import UserPage from './components/UserPage.vue'
import RepoBrowser from './components/RepoBrowser.vue'

export default {
  name: 'App',
  components: {
    Demo,
    UserPage,
    RepoBrowser
  },
  computed: {
    key() {
        return this.$route.fullPath
    }
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
