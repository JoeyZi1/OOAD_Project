<template>
    <div>
        <Demo></Demo>
        <div class="container-xxl">
  <div class="row">
    <div class="col-md-3 col-0 border-end">
      <img class="media-object img-thumbnail rounded-circle w-100 mb-3" :src=userImg>
      <div class="vstack gap-2 w-100">
        <div class="w-100"><h4>{{userName}}</h4></div>
        <button type="button" class="btn btn-outline-secondary">Edit profile</button>
        <div class="w-100">
          <el-link style="margin-right: 2px" :underline="false">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-people-fill" viewBox="0 2 16 16" style="margin-right: 2px">
              <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
              <path fill-rule="evenodd" d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"/>
              <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>
            </svg>
            <span style="margin-right: 2px">0</span>Followes
          </el-link>
          <span style="margin-right: 2px">·</span>
          <el-link :underline="false"><span style="margin-right: 2px">0</span>Following</el-link></div>
      </div>
    </div>
    <div class="col-md-9 col-12">
        <br>


        <ul class="nav nav-tabs sticky-top bg-white" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
                <button class="nav-link active" id="overview-tab" data-bs-toggle="tab" data-bs-target="#overview-tab-pane" type="button" role="tab" aria-controls="overview-tab-pane" aria-selected="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-book" viewBox="0 1 16 16">
                        <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"/>
                    </svg>
                    Overview
                </button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="repositroies-tab" data-bs-toggle="tab" data-bs-target="#repositroies-tab-pane" type="button" role="tab" aria-controls="repositroies-tab-pane" aria-selected="false">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-seam" viewBox="0 0 16 16">
                    <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2l-2.218-.887zm3.564 1.426L5.596 5 8 5.961 14.154 3.5l-2.404-.961zm3.25 1.7-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z"/>
                    </svg>
                    Repositories
                </button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="star-tab" data-bs-toggle="tab" data-bs-target="#star-tab-pane" type="button" role="tab" aria-controls="star-tab-pane" aria-selected="false">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 1.5 16 16">
                    <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
                    </svg>
                    Stars
                </button>
            </li>
        </ul>
        


        <!-- 概览区域 -->
        <div class="tab-content" id="myTabContent">
        <div class="tab-pane fade show active" id="overview-tab-pane" role="tabpanel" aria-labelledby="overview-tab" tabindex="0">
            Overview
        </div>
        <!-- //概览区域 -->


        <!-- 仓库管理区域 -->
        <div class="tab-pane fade" id="repositroies-tab-pane" role="tabpanel" aria-labelledby="repositroies-tab" tabindex="0">
            <div class="hstack gap-3 border-bottom resetPadding">
                <input class="form-control me-auto" type="text" placeholder="Find a repository..." aria-label="Find a repository..." @keyup.enter="submit">
                <div class="btn-group" role="group" aria-label="Button group with nested dropdown">
                    <div class="btn-group" role="group">
                        <button type="button" class="btn btn-outline-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                        Type
                        </button>
                        <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">All</a></li>
                        <li><a class="dropdown-item" href="#">Public</a></li>
                        <li><a class="dropdown-item" href="#">Private</a></li>
                        </ul>
                    </div>

                    <div class="btn-group" role="group">
                        <button type="button" class="btn btn-outline-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                        Language
                        </button>
                        <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">All</a></li>
                        <li><a class="dropdown-item" href="#">C</a></li>
                        <li><a class="dropdown-item" href="#">C++</a></li>
                        <li><a class="dropdown-item" href="#">JAVA</a></li>
                        <li><a class="dropdown-item" href="#">Python</a></li>
                        </ul>
                    </div>

                    <div class="btn-group" role="group">
                        <button type="button" class="btn btn-outline-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                        Sort
                        </button>
                        <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Last updated</a></li>
                        <li><a class="dropdown-item" href="#">Name</a></li>
                        <li><a class="dropdown-item" href="#">Stars</a></li>
                        </ul>
                    </div>
                    
                </div>

                <div class="vr"></div>
                <button type="button" class="btn btn-success oneLine">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-seam" viewBox="0 0 16 16">
                    <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2l-2.218-.887zm3.564 1.426L5.596 5 8 5.961 14.154 3.5l-2.404-.961zm3.25 1.7-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z"/>
                    </svg>
                    New
                </button>
            </div>

            <ul class="list-group list-group-flush" v-for="repo in repoList" :key="repo.id">
              <li class="list-group-item p-4 border-bottom">
                <div class="d-flex w-100 justify-content-start mb-2">
                  <!-- <router-link to="/RepoBrowser" @click="enterRepo(repo.repoName)">   -->
                    <el-link style="margin-right: 8px" @click="enterRepo(repo.repoName)">
                    <span class="repoName">{{repo.repoName}}</span>
                    </el-link>
                  <!-- </router-link> -->
                  
                  <span class="badge rounded-pill bg-secondary me-auto align-self-center">{{repo.permission}}</span>
                  <button type="button" class="btn btn-outline-secondary oneLine">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 1.5 16 16">
                      <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
                      </svg>
                      Star
                  </button>    
                </div>
                <div class="d-flex w-100 justify-content-start mb-3">
                  <small>{{repo.msg}}</small>
                </div>
              </li>
            </ul>
            
          





        </div>
        <!-- //仓库管理区域 -->


        <div class="tab-pane fade" id="star-tab-pane" role="tabpanel" aria-labelledby="star-tab" tabindex="0">
            Stars
        </div>
        </div>



    </div>
  </div>
</div>
    </div>
</template>

<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-main {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 60px;;
  }



  .bg-purple-dark {
    background: #99a9bf;
  }

  .bg-purple {
    background: #d3dce6;
  }

  .bg-purple-light {
    background: #e5e9f2;
  }

  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }

  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }

  .resetPadding{
    padding-bottom: 15px;
    padding-top: 15px;
  }

  .oneLine{
    white-space: nowrap;
  }

  .repoName{
    font-size: x-large;
  }

</style>

<script>
import axios from 'axios';
import Demo from './Demo.vue'

export default {
  components: {
    Demo,
  },

  mounted: function() {
    
    axios.get(this.$route.path).then((response)=>{
      this.repoList = response.data.repoList
      this.userName = response.data.userName
      this.userImg = response.data.userImg
    })
  },

  data: function(){
    return {
      userName: "",
      userImg: "",
      repoList: [
        {repoName: 'Demo', permission: 'public', msg: 'Updated 2 days ago'},
        {repoName: 'CS309', permission: 'private', msg: 'Updated 2 days ago'},
        {repoName: 'Demo2', permission: 'public', msg: 'Updated 2 days ago'},
        {repoName: 'Demo3', permission: 'public', msg: 'Updated 2 days ago'},
        {repoName: 'Demo4', permission: 'public', msg: 'Updated 2 days ago'},
        {repoName: 'Demo5', permission: 'public', msg: 'Updated 2 days ago'},
      ]
    }
  },

  methods: {
    enterRepo: function(repoName){ 
      this.$router.push(
        {
          name: "RepoBrowser",
          params:{
            userName: this.userName,
            repoParam: repoName,
            branchName: "master",
            queryPath: "root"
          }
        }
      )

      //console.log(this.$route.path)
    }

  }
}

</script>