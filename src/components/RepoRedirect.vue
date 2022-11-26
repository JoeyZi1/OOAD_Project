<template>
   
</template>
  
  <script>
  export default {
      created: function(){
        this.$router.push({
              name: "/RepoBrowser",
              params:{
                userName: this.$route.params.userName,
                repoParam: this.$route.params.repoParam,
                branchName: this.$route.params.branchName,
                queryPath: "root"
              }
            }
          )
      }
    }

  
  </script>
  
  <style>

  </style>
  