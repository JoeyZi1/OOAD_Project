<template>
  <div>
    <el-empty class="mt-5" description="Forbidden!" :image-size="300">
      <el-button type="primary" @click="gotoUser(userName)">Back to home page</el-button>
    </el-empty>
  </div>
</template>

<script>
import Demo from './Demo.vue'
import store from '@/store'

export default {
  components: {
    Demo,
  },
  methods: {
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
  },
  computed: {
    userName(){
      var userInfo = store.state.userName;
      return userInfo;
    }
  }
}
</script>