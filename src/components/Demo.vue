<template>
<div>
  <Avatar userName="sdf"></Avatar>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">
          <img src="../assets/logo.png" alt="" width="26" height="26" class="d-inline-block align-text-top">
          MyGitHub
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>

        <Avatar username="Jane Doe"></Avatar>
      </div>
    </div>
  </nav>




</div>
</template>

<script>
import Avatar from 'vue-avatar'
import store from '@/store'

export default {
  comments: {
    Avatar,
  },
  data: function(){
    return {
      name: "store.state.userName"
    };
  },
  computed:{
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


  }
}
</script>

<style>


    

</style>