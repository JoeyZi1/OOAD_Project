<template>
  <div>
    <div style="min-height: 850px;">
        <div class="container-xxl">
  <div class="row">
    
    <div class="col-md-3 col-0 border-end">
       
      <img class="mt-3 media-object img-thumbnail rounded-circle w-100 mb-3" :src="MockImg" style="max-width: 310px;">
      <div class="vstack gap-2 w-100 mt-3">
      <div class="w-100">
          

        <h4 class="ms-2">{{userName}}</h4> 
          
      </div>

        <button v-if="account===userName" type="button" class="btn btn-outline-secondary" disabled>Follow</button>
        <button v-else type="button" class="btn btn-outline-secondary">Follow</button>

        <div class="w-100">
          <el-link style="margin-right: 2px" :underline="false">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-people-fill" viewBox="0 2 16 16" style="margin-right: 2px">
              <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
              <path fill-rule="evenodd" d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"/>
              <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>
            </svg>
            <span style="margin-right: 2px">0</span>Followers
          </el-link>
          <span style="margin-right: 2px">·</span>
          <el-link :underline="false"><span style="margin-right: 2px">0</span>Following</el-link></div>
      </div>
    </div>
    <div class="col-md-9 col-12">
        <br>


        <ul class="nav nav-tabs bg-white" id="myTab" role="tablist">
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
          
          <div class="text-start mt-3" style="font-weight: bolder;">Popular repositories</div>
          <div class="row mt-1">
            <div v-if="!(recommendPepo1===null)" class="col-sm-6">
              <div class="card text-start">
                <div class="card-body">
                  <div class="hstack"> 

                    <el-link class="text-primary" style="margin-right: 8px" @click="enterRepo(recommendPepo1.repoName)"  data-bs-dismiss="modal">
                      <h5 class="card-title">{{recommendPepo1.repoName}}</h5>
                    </el-link>   

                    <span class="badge rounded-pill bg-secondary ms-auto">{{checkVisibility(recommendPepo1.authority)}}</span>
                  </div> 
                  <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                  <div class="hstack">
                    <svg v-if="recommendPepo1.star > 0" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
                      <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
                    </svg>
                    <span v-if="recommendPepo1.star > 0" class="ms-1 me-1">{{recommendPepo1.star}}</span>
                    <svg v-if="recommendPepo1.fork > 0" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-diagram-2 ms-2" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M6 3.5A1.5 1.5 0 0 1 7.5 2h1A1.5 1.5 0 0 1 10 3.5v1A1.5 1.5 0 0 1 8.5 6v1H11a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0v-1A.5.5 0 0 1 5 7h2.5V6A1.5 1.5 0 0 1 6 4.5v-1zM8.5 5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1zM3 11.5A1.5 1.5 0 0 1 4.5 10h1A1.5 1.5 0 0 1 7 11.5v1A1.5 1.5 0 0 1 5.5 14h-1A1.5 1.5 0 0 1 3 12.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm4.5.5a1.5 1.5 0 0 1 1.5-1.5h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1A1.5 1.5 0 0 1 9 12.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1z"/>
                    </svg>
                    <span v-if="recommendPepo1.fork > 0" class="ms-1 me-1">{{recommendPepo1.fork}}</span>
                  </div>
                  
                </div>
              </div>
            </div>

            <div v-else class="col-sm-6">
              <div class="card text-start">
                <div class="card-body">
                  <h5 class="card-title">No recommended repository</h5>
                  <p class="card-text">Create a repository now</p>
                  <a class="btn btn-primary">New repository</a>
                </div>
              </div>
            </div>

            <div v-if="!(recommendPepo2===null)" class="col-sm-6">
              <div class="card text-start">
                <div class="card-body">
                  <div class="hstack"> 
                    <el-link class="text-primary" style="margin-right: 8px" @click="enterRepo(recommendPepo2.repoName)"  data-bs-dismiss="modal">
                      <h5 class="card-title">{{recommendPepo2.repoName}}</h5>
                    </el-link>  
                    <span class="badge rounded-pill bg-secondary ms-auto">{{checkVisibility(recommendPepo2.authority)}}</span>
                  </div>
                  <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                  <div class="hstack">
                    <svg v-if="recommendPepo2.star > 0" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
                      <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
                    </svg>
                    <span v-if="recommendPepo2.star > 0" class="ms-1 me-1">{{recommendPepo2.star}}</span>
                    <svg v-if="recommendPepo2.fork > 0" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-diagram-2 ms-2" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M6 3.5A1.5 1.5 0 0 1 7.5 2h1A1.5 1.5 0 0 1 10 3.5v1A1.5 1.5 0 0 1 8.5 6v1H11a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0v-1A.5.5 0 0 1 5 7h2.5V6A1.5 1.5 0 0 1 6 4.5v-1zM8.5 5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1zM3 11.5A1.5 1.5 0 0 1 4.5 10h1A1.5 1.5 0 0 1 7 11.5v1A1.5 1.5 0 0 1 5.5 14h-1A1.5 1.5 0 0 1 3 12.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm4.5.5a1.5 1.5 0 0 1 1.5-1.5h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1A1.5 1.5 0 0 1 9 12.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1z"/>
                    </svg>
                    <span v-if="recommendPepo2.fork > 0" class="ms-1 me-1">{{recommendPepo2.fork}}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div v-if="!(recommendPepo3===null)" class="row">
            <div v-if="!(recommendPepo3===null)" class="col-sm-6 ">
              <div class="card text-start">
                <div class="card-body">
                  <div class="hstack"> 
                    <el-link class="text-primary" style="margin-right: 8px" @click="enterRepo(recommendPepo3.repoName)"  data-bs-dismiss="modal">
                      <h5 class="card-title">{{recommendPepo3.repoName}}</h5>
                    </el-link>  
                    <span class="badge rounded-pill bg-secondary ms-auto">{{checkVisibility(recommendPepo3.authority)}}</span>
                  </div>
                  <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                  <div class="hstack">
                    <svg v-if="recommendPepo3.star > 0" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
                      <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
                    </svg>
                    <span v-if="recommendPepo3.star > 0" class="ms-1 me-1">{{recommendPepo3.star}}</span>
                    <svg v-if="recommendPepo3.fork > 0" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-diagram-2 ms-2" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M6 3.5A1.5 1.5 0 0 1 7.5 2h1A1.5 1.5 0 0 1 10 3.5v1A1.5 1.5 0 0 1 8.5 6v1H11a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0v-1A.5.5 0 0 1 5 7h2.5V6A1.5 1.5 0 0 1 6 4.5v-1zM8.5 5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1zM3 11.5A1.5 1.5 0 0 1 4.5 10h1A1.5 1.5 0 0 1 7 11.5v1A1.5 1.5 0 0 1 5.5 14h-1A1.5 1.5 0 0 1 3 12.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm4.5.5a1.5 1.5 0 0 1 1.5-1.5h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1A1.5 1.5 0 0 1 9 12.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1z"/>
                    </svg>
                    <span v-if="recommendPepo3.fork > 0" class="ms-1 me-1">{{recommendPepo3.fork}}</span>
                  </div>
                </div>
              </div>
            </div>
            <div v-if="!(recommendPepo4===null)" class="col-sm-6">
              <div class="card text-start">
                <div class="card-body">
                  <div class="hstack"> 
                    <el-link class="text-primary" style="margin-right: 8px" @click="enterRepo(recommendPepo4.repoName)"  data-bs-dismiss="modal">
                      <h5 class="card-title">{{recommendPepo4.repoName}}</h5>
                    </el-link>  
                    <span class="badge rounded-pill bg-secondary ms-auto">{{checkVisibility(recommendPepo4.authority)}}</span>
                  </div>
                  <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                  <div class="hstack">
                    <svg v-if="recommendPepo4.star > 0" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
                      <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
                    </svg>
                    <span v-if="recommendPepo4.star > 0" class="ms-1 me-1">{{recommendPepo4.star}}</span>
                    <svg v-if="recommendPepo4.fork > 0" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-diagram-2 ms-2" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M6 3.5A1.5 1.5 0 0 1 7.5 2h1A1.5 1.5 0 0 1 10 3.5v1A1.5 1.5 0 0 1 8.5 6v1H11a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0v-1A.5.5 0 0 1 5 7h2.5V6A1.5 1.5 0 0 1 6 4.5v-1zM8.5 5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1zM3 11.5A1.5 1.5 0 0 1 4.5 10h1A1.5 1.5 0 0 1 7 11.5v1A1.5 1.5 0 0 1 5.5 14h-1A1.5 1.5 0 0 1 3 12.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm4.5.5a1.5 1.5 0 0 1 1.5-1.5h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1A1.5 1.5 0 0 1 9 12.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1z"/>
                    </svg>
                    <span v-if="recommendPepo4.fork > 0" class="ms-1 me-1">{{recommendPepo4.fork}}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="text-start mt-5 mb-1" style="font-weight: bolder;">User overview</div>
          <div class="card mt-2">
            <div class="card-body">
              <v-sparkline
                :fill=true
                :gradient="gradient"
                :line-width="width"
                :padding="padding"
                :smooth="radius || false"
                :value="value"
                auto-draw
              ></v-sparkline>
            </div>
          </div>
          
            
          
          




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
                <button type="button" class="btn btn-success oneLine" @click="newRepo()">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-seam" viewBox="0 0 16 16">
                    <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2l-2.218-.887zm3.564 1.426L5.596 5 8 5.961 14.154 3.5l-2.404-.961zm3.25 1.7-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z"/>
                    </svg>
                    New
                </button>
            </div>

            <el-dialog title="创建仓库" :visible.sync="createRepoFormVisible" @close="onClose" width="600px">
              <el-form ref="createRepoForm" :model="createRepoForm" label-width=auto style="align:left" :rules="createRepoRules">
                <el-form-item label="Repository name:" prop="repoName" >
                    <el-input placeholder="Please input repository name" v-model="createRepoForm.repoName"></el-input>
                </el-form-item>
                <el-form-item label="Description:" prop="description">
                    <el-input v-model="createRepoForm.description"></el-input>
                </el-form-item>
                <el-form-item label="Permissions:" prop="permission">
                  <el-col span="15">
                    <el-radio-group v-model="createRepoForm.permission">
                      <el-radio :label="1" >Public</el-radio>
                      <el-radio :label="0">Private</el-radio>
                    </el-radio-group>
                  </el-col>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="submitCreateRepoForm('createRepoForm')">Create repository</el-button>
                  <el-button type="danger" @click="createRepoFormVisible = false; this.createRepoForm = {repoName:'', description:'',permission:'' }">Cancel</el-button>
                </el-form-item>
              </el-form>
            </el-dialog>

            <ul class="list-group list-group-flush" v-for="repo in controlRepoList" :key="repo.id">
              <li class="list-group-item p-4 border-bottom">
                <div class="d-flex w-100 justify-content-start mb-2">
                    <el-link class="text-primary" style="margin-right: 8px" @click="enterRepo(repo.repoName)">
                    <span class="repoName">{{repo.repoName}}</span>
                    </el-link>
                  
                  <span class="ms-2 badge rounded-pill bg-secondary me-auto align-self-center">{{checkVisibility(repo.authority)}}</span>

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
        <!-- //仓库管理区域 -->

        
        <!-- star  -->
        <div class="tab-pane fade" id="star-tab-pane" role="tabpanel" aria-labelledby="star-tab" tabindex="0">

          <ul class="list-group list-group-flush" v-for="repo in starRepoList" :key="repo.id">
              <li class="list-group-item p-4 border-bottom">
                <div class="d-flex w-100 justify-content-start mb-2">
                    <el-link class="text-primary" style="margin-right: 8px" @click="enterStarRepo(repo.agentName,repo.repoName)">
                    <span class="repoName">{{repo.repoName}}</span>
                    </el-link>       
                  <span class="ms-2 badge rounded-pill bg-secondary me-auto align-self-center">{{checkVisibility(repo.authority)}}</span>

                  <Avatar class="btn btn-outline me-1" :username="repo.agentName" color="#fff" :background-color="extractColorByName(repo.agentName)" :size=25 id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  </Avatar>
                  {{repo.agentName}}
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
        <!-- star -->
        </div>



    </div>
  </div>
</div>


    </div>

    <v-footer padless class="mt-5">
  <v-col
    class="text-center"
    cols="12"
  >
    {{ new Date().getFullYear() }} — <strong>CS309 Project</strong>
  </v-col>
</v-footer>

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
import axios from '@/axios';
import Demo from './Demo.vue'
import Avatar from 'vue-avatar'
import store from '@/store'

const gradients = [
  ['#222'],
  ['#42b3f4'],
  ['red', 'orange', 'yellow'],
  ['purple', 'violet'],
  ['#00c6ff', '#F0F', '#FF0'],
  ['#f72047', '#ffd200', '#1feaea'],
]

export default {
  components: {
    Demo,
    Avatar
  },

  watch: {
  },

  computed: {
    testHeight() {
      return parseInt((window.innerWidth)/70) 
    },
    controlRepoList() {
      if (this.account===this.$route.params.userName) {
        return this.repoList;
      } else {
        const publicrepo = this.repoList.filter(item => (item.authority === 1)||(item.contributors.indexOf(store.state.userName)>-1))
        return publicrepo
      }
    },

    account(){
      var userInfo = store.state.userName;
      return userInfo;
    },

    filterItemList () {
      const folder_arr = this.itemList.filter(item => item.type === "folder")
      const file_arr = this.itemList.filter(item => item.type === "file")
      var arr = folder_arr.concat(file_arr)
      // // 可能需要排序
      // if (sortType!==1) {
      //   arr.sort((p1, p2) => {
      //     if (sortType===2) { // 升序
      //       return p1.age - p2.age 
      //     } else { // 降序
      //       return p2.age - p1.age
      //     }
      //   })
      // }
      return arr
    },

    rankRepoList() {
      const public_arr = this.repoList.filter(item => this.checkVisibility(item.authority) === "public")
      public_arr.sort((p1, p2) => {
        return (p2.star + p2.fork) - (p1.star + p1.fork)
      })
      return public_arr
    },

    recommendPepo1() {
      if (this.rankRepoList.length >= 1){
        return this.rankRepoList[0]
      } else {
        return null;
      }
    },

    recommendPepo2() {
      if (this.rankRepoList.length >= 2){
        return this.rankRepoList[1]
      } else {
        return null;
      }
    },

    recommendPepo3() {
      if (this.rankRepoList.length >= 3){
        return this.rankRepoList[2]
      } else {
        return null;
      }
    },

    recommendPepo4() {
      if (this.rankRepoList.length >= 4){
        return this.rankRepoList[3]
      } else {
        return null;
      }
    },
  },

 

  created: async function() {
    if (sessionStorage.getItem("name")){
        store.commit('USERNAME', sessionStorage.getItem('name'))
        sessionStorage.removeItem('name')
    }
    window.addEventListener('beforeunload',()=>{
      sessionStorage.setItem('name', store.state.userName)
    })

    await axios.get(this.$route.path).then((response)=>{
    // axios.get(this.$route.path).then((response)=>{
      this.repoList = response.repoList
      this.userName = response.userName
      this.starRepoList = response.StarRepo
    })

    await axios.get('/mock/'+this.userName).then((response)=>{
      this.MockImg = response.Img
    })
  },

  // created:function() {
    
  // },

  data: function(){
    return {
      //控件
      fill: true,
      gradient: gradients[4],
      gradients,
      padding: 8,
      radius: 10,
      value: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0],
      width: 2,





      starRepoList: [],
      MockImg: '',
      createRepoRules: {
        repoName: [{ required: true, message: "Please enter the repository name!", trigger: "blur" }],
        permission: [{ required: true, message: "Please choose permission!", trigger: "blur" }],
      },
      createRepoFormVisible:false,
      createRepoForm:{repoName:'', description:'',permission:'' },

      userName: "",
      userImg: "",
      repoList: [


      ]
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

    checkVisibility: function(auth) {
      if (auth === 1){
        return "public"
      } else {
        return "private"
      }
    },

    test: async function() {
      await axios.get('/UserPage/'+this.$route.params.userName+'/checkToken').then((response)=>{
      console.log("-------response------");
      console.log(response);
    })

    },

    async deleteRepo(reponame){
      var deletejudge  = 0
      await axios.get("/Repository/delete/" + this.$route.params.userName + '/' +  reponame + '/' + this.createRepoForm.permission).then((response)=>{
        deletejudge = response
      })
      if(deletejudge==1){
        this.$router.push({
          name: "UserPage",
          params:{
            userName: this.$route.params.userName,
          },
          query: {
            path: +new Date() 
          }
        })
      }
    },
    submitCreateRepoForm(formName){
      this.$refs[formName].validate(async (valid) => {
          if(valid){
            this.createRepoFormVisible = false
            var createjudge = 0
            await axios.get("/Repository/init/" + this.$route.params.userName + '/' +  this.createRepoForm.repoName + '/' + this.createRepoForm.permission).then((response)=>{
              console.log(response.code)
              createjudge = response
            })
            console.log('createjudge',createjudge)
            if(createjudge==1){
              this.$router.push({
                name: "UserPage",
                params:{
                  userName: this.$route.params.userName,
                },
                query: {
                  path: +new Date() 
                }
              })
              console.log('It is new page')
            }
          }
      })
  
      
    },
    newRepo(){
      this.createRepoFormVisible = true
      this.createRepoForm = {repoName:'', description:'',permission:'' }
    },
    onClose() {
      this.createRepoForm = {repoName:'', description:'',permission:'' }
    },

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
    },

    enterStarRepo: function(user, repoName){ 
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
    }

  },

 
}

</script>