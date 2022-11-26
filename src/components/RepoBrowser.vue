<template>
<div>
<Demo></Demo>

<div class="container-fluid bg-light ps-0 pe-0">
  <div class="hstack gap-1 align-items-center pt-4 ps-5 pe-5 mb-3" style="height: 40px;">
    <!-- <button type="button" class="btn btn-primary" @click="test()">test</button> -->
    <svg v-if="true" xmlns="http://www.w3.org/2000/svg" style="margin-bottom: 4px;" width="16" height="16" fill="currentColor" class="bi bi-lock" viewBox="0 0 16 16">
      <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"/>
    </svg>
    <svg v-else xmlns="http://www.w3.org/2000/svg" style="margin-bottom: 3px;" width="16" height="16" fill="currentColor" class="bi bi-box-seam" viewBox="0 0 16 16">
      <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2l-2.218-.887zm3.564 1.426L5.596 5 8 5.961 14.154 3.5l-2.404-.961zm3.25 1.7-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z"/>
    </svg>

    <el-breadcrumb separator="/" style="margin-right: auto;">
      <el-breadcrumb-item :to="{name:'UserPage' , params:{userName: this.$route.params.userName}}">
        <a style="font-size: 20px;" >
          {{this.$route.params.userName}}
        </a>
      </el-breadcrumb-item>
      <el-breadcrumb-item :to="{name:'RepoBrowser' , params:{userName: this.$route.params.userName, repoParam: this.$route.params.repoParam, branchName: this.$route.params.branchName, queryPath: 'root'}, query: {t: +new Date() }}">
        <a style="font-size: 20px;">
          {{this.$route.params.repoParam}}
        </a>
      </el-breadcrumb-item>
    </el-breadcrumb>



    <button type="button" class="btn btn-outline-secondary oneLine btn-sm">
      watch
    </button>  
    <button type="button" class="btn btn-outline-secondary oneLine btn-sm">
      folk
    </button>  
    <button type="button" class="btn btn-outline-secondary oneLine btn-sm">
      star
    </button>   
  </div>

  <ul class="nav nav-tabs sticky-top ps-4" id="myTab" role="tablist">
    <li class="nav-item" role="presentation">
        <button class="nav-link active" id="overview-tab" data-bs-toggle="tab" data-bs-target="#overview-tab-pane" type="button" role="tab" aria-controls="overview-tab-pane" aria-selected="true">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-code-slash" viewBox="0 2 16 16">
            <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z"/>
          </svg>
            Code
        </button>
    </li>
    <li class="nav-item" role="presentation">
        <button class="nav-link" id="commits-tab" data-bs-toggle="tab" data-bs-target="#commits-tab-pane" type="button" role="tab" aria-controls="repositroies-tab-pane" aria-selected="false">
            Commits
        </button>
    </li>
    <li class="nav-item" role="presentation">
        <button class="nav-link" id="repositroies-tab" data-bs-toggle="tab" data-bs-target="#repositroies-tab-pane" type="button" role="tab" aria-controls="repositroies-tab-pane" aria-selected="false">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-record-circle me-1" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
            <path d="M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
          </svg>
          Issues
          <span v-if="issueNumber > 0" class="badge rounded-pill bg-secondary ms-1">{{issueNumber}}</span>
        </button>
    </li>

    <li class="nav-item" role="presentation">
        <button class="nav-link" id="pr-tab" data-bs-toggle="tab" data-bs-target="#pr-tab-pane" type="button" role="tab" aria-controls="pr-tab-pane" aria-selected="false">
          <svg class="octicon octicon-git-pull-request open" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
            <path fill-rule="evenodd" d="M7.177 3.073L9.573.677A.25.25 0 0110 .854v4.792a.25.25 0 01-.427.177L7.177 3.427a.25.25 0 010-.354zM3.75 2.5a.75.75 0 100 1.5.75.75 0 000-1.5zm-2.25.75a2.25 2.25 0 113 2.122v5.256a2.251 2.251 0 11-1.5 0V5.372A2.25 2.25 0 011.5 3.25zM11 2.5h-1V4h1a1 1 0 011 1v5.628a2.251 2.251 0 101.5 0V5A2.5 2.5 0 0011 2.5zm1 10.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0zM3.75 12a.75.75 0 100 1.5.75.75 0 000-1.5z"></path>
          </svg>
          Pull request
          <span v-if="PRNumber > 0" class="badge rounded-pill bg-secondary ms-1">{{PRNumber}}</span>
        </button>
    </li>
    
    <li class="nav-item" role="presentation">
        <button class="nav-link" id="star-tab" data-bs-toggle="tab" data-bs-target="#star-tab-pane" type="button" role="tab" aria-controls="star-tab-pane" aria-selected="false">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gear" viewBox="0 0.5 16 16">
              <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"/>
              <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"/>
            </svg>
            Settings
        </button>
    </li>
  </ul>
</div>

<div class="container-xxl">
  <div class="tab-content" id="myTabContent">
  
  <!-- code区域 -->
  <div class="tab-pane fade show active" id="overview-tab-pane" role="tabpanel" aria-labelledby="overview-tab" tabindex="0">
    <div class="row">
      <div class="col">
        <div class="hstack gap-3 resetPadding">


          <div class="dropdown">
            <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" id="dropdownMenuButton1">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-diagram-2" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M6 3.5A1.5 1.5 0 0 1 7.5 2h1A1.5 1.5 0 0 1 10 3.5v1A1.5 1.5 0 0 1 8.5 6v1H11a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0v-1A.5.5 0 0 1 5 7h2.5V6A1.5 1.5 0 0 1 6 4.5v-1zM8.5 5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1zM3 11.5A1.5 1.5 0 0 1 4.5 10h1A1.5 1.5 0 0 1 7 11.5v1A1.5 1.5 0 0 1 5.5 14h-1A1.5 1.5 0 0 1 3 12.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm4.5.5a1.5 1.5 0 0 1 1.5-1.5h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1A1.5 1.5 0 0 1 9 12.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1z"/>
              </svg>
              {{this.$route.params.branchName}}
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li v-for="branch in branchList" :key="branch.id">
                <a class="dropdown-item" @click="enterBranch(branch.branchName)">{{branch.branchName}}</a>
              </li>
            </ul>
          </div>

          <el-link v-if="this.$route.params.queryPath===root"  :underline="false" class="me-auto" data-bs-toggle="collapse" href="#branchDashboard" role="button" aria-expanded="false" aria-controls="branchDashboard">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-diagram-2" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M6 3.5A1.5 1.5 0 0 1 7.5 2h1A1.5 1.5 0 0 1 10 3.5v1A1.5 1.5 0 0 1 8.5 6v1H11a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0v-1A.5.5 0 0 1 5 7h2.5V6A1.5 1.5 0 0 1 6 4.5v-1zM8.5 5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1zM3 11.5A1.5 1.5 0 0 1 4.5 10h1A1.5 1.5 0 0 1 7 11.5v1A1.5 1.5 0 0 1 5.5 14h-1A1.5 1.5 0 0 1 3 12.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm4.5.5a1.5 1.5 0 0 1 1.5-1.5h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1A1.5 1.5 0 0 1 9 12.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1z"/>
            </svg>
            <span style="margin-right: 2px">{{branchList.length}}</span>branch
          </el-link>

          <el-breadcrumb v-else separator="/" class="me-auto">
            <el-breadcrumb-item v-for="item in splitPath" :key = item.id>
              <a  @click="jumpTo(item)">{{item}}</a>
            </el-breadcrumb-item>

            <el-breadcrumn-item>
            </el-breadcrumn-item>
          </el-breadcrumb>

          <button type="button" class="btn btn-outline-secondary" @click="createBranch()">
              create new branch
          </button>
          <el-dialog title="Create new branch" :visible.sync="branchFormVisible" @close="onClose">
            <el-form ref="branchform" :model="branchform"  label-width="120px" style="align:center" >
              <el-form-item label="Branch Name">
                <el-input v-model="branchform.name"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="submitBranchForm('branchform')">Submit</el-button>
                <el-button type="danger" @click=" branchFormVisible = false">Cancel</el-button>
              </el-form-item>
            </el-form>
          </el-dialog>


          <div class="btn-group">
            <button type="button" class="btn btn-outline-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
              Add
            </button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" data-bs-toggle="modal" data-bs-target="#modal_upload_file">Upload file</a></li>
              <li><a class="dropdown-item" data-bs-toggle="modal" data-bs-target="#modal_upload_folder">Upload folder</a></li>
            </ul>
          </div>

          <!-- Modal -->
          <div class="modal fade" id="modal_upload_file" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="staticBackdropLabel">Upload file</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <div class="row mx-3">
                      <!-- <input type="file" class="form-control mb-2" webkitdirectory directory multiple/> -->
                      <form enctype="multipart/form-data">
                          <input class="form-control mb-2" type="file" @change="getFile($event)">
                          <button type="button" class="btn btn-primary"  @click="submitForm($event)" data-bs-dismiss="modal">提交</button>
                      </form>
                  </div>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>

          <div class="modal fade" id="modal_upload_folder" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="staticBackdropLabel">Upload folder</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <div class="row mx-3">
                      <form enctype="multipart/form-data">
                          <input class="form-control mb-2" type="file" @change="getFile($event)" webkitdirectory>
                          <button type="button" class="btn btn-primary"  @click="submitForm($event)" data-bs-dismiss="modal">提交</button>
                      </form>
                  </div>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>


          <div class="btn-group">
            <button type="button" class="btn btn-success dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
              Code
            </button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Download</a></li>
            </ul>
          </div>
        </div>

        <div class="collapse" id="branchDashboard">
          <div class="card mb-4" style="width: 100%;">
            <ul class="list-group list-group-flush" v-for="item in branchList" :key="item.id">
              <li class="list-group-item list-group-item-action text-start">
                <span class="float-start">
                  {{item.branchName}}
                </span>
                <span class="float-end">
                  <div class="btn btn-primary btn-sm">delete branch</div>
                </span>
              </li>
            </ul>

          </div>
        </div>

        <div class="card mb-4" style="width: 100%;">
          <div class="card-header text-start ps-3">
            Commit message
          </div>

          <ul class="list-group list-group-flush" v-for="item in filterItemList" :key="item.id">
            <li class="list-group-item list-group-item-action text-start">
              <span class="float-start">
                <svg xmlns="http://www.w3.org/2000/svg" v-if="item.type === itemType_folder" width="16" height="16" fill="currentColor" class="text-primary bi bi-folder-fill me-2" viewBox="0 1 16 16">
                  <path d="M9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.825a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31L.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3zm-8.322.12C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" v-else width="16" height="16" fill="currentColor" class="bi bi-file-earmark me-2" viewBox="0 0 16 16">
                  <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z"/>
                </svg>
                <el-link @click="visit(item.itemName)">
                  {{item.itemName}}
                </el-link>
              </span>
              <span class="float-end">{{item.msg}}</span>
            </li>
          </ul>
        </div>

        

        <div class="card" v-if="this.$route.params.queryPath===root" style="width: 100%;">
          <div class="card-header text-start bg-white sticky-top" style="font-weight: bolder;">
            README.md
          </div>
          <div class="card-body">
            <div class="markdown-body" style="text-align:left">
              <markdown />
              <markdown />
              <markdown />
            </div>
          </div>
        </div>

        <div class="card" v-else style="width: 100%;">
          <div class="card-header text-start bg-light sticky-top" style="font-weight: bolder;">
            file content
          </div>
          <div class="card-body">

            <div class="content" v-highlight>
              <pre>
                <code>
                  {{codeFile}}
                </code>
              </pre>
            </div>

          </div>
        </div>
      </div>

      <div v-if="this.$route.params.queryPath===root" class="col-md-3 col-0" style="text-align: left;">
        <div class="mb-3 mt-3 border-bottom">
          <h5>About</h5>
          <p>The description of this repository</p>
          <div class="mb-3">
            <el-link style="margin-right: 2px" :underline="false">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star me-1" viewBox="0 1 16 16">
                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
              </svg>
              <span style="margin-right: 2px">0</span>stars
            </el-link>
          </div>
          
          <div class="mb-3">
            <el-link style="margin-right: 2px" :underline="false">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye me-1" viewBox="0 1 16 16">
                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
              </svg>
              <span style="margin-right: 2px">0</span>watching
            </el-link>
          </div>

          <div class="mb-3">
            <el-link style="margin-right: 2px" :underline="false">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bezier2 me-1" viewBox="0 1 16 16">
                <path fill-rule="evenodd" d="M1 2.5A1.5 1.5 0 0 1 2.5 1h1A1.5 1.5 0 0 1 5 2.5h4.134a1 1 0 1 1 0 1h-2.01c.18.18.34.381.484.605.638.992.892 2.354.892 3.895 0 1.993.257 3.092.713 3.7.356.476.895.721 1.787.784A1.5 1.5 0 0 1 12.5 11h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5H6.866a1 1 0 1 1 0-1h1.711a2.839 2.839 0 0 1-.165-.2C7.743 11.407 7.5 10.007 7.5 8c0-1.46-.246-2.597-.733-3.355-.39-.605-.952-1-1.767-1.112A1.5 1.5 0 0 1 3.5 5h-1A1.5 1.5 0 0 1 1 3.5v-1zM2.5 2a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm10 10a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1z"/>
              </svg>
              <span style="margin-right: 2px">0</span>fork
            </el-link>
          </div>
        </div>
        
        
          <!-- <v-divider color="grey"></v-divider> -->
        <div class="card mb-3" style="width:auto;">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="card-link">Card link</a>
            <a href="#" class="card-link">Another link</a>
          </div>
        </div>

        <div class="mb-3 border-bottom">
          <h5>Contributer</h5>

          <div class="mb-3">
            <div class="hstack me-3">
              <div>
                <v-avatar size="36px">
                  <img alt="Avatar" src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460">
                  <!-- <v-icon
                    :color="message.color"
                    v-text="message.icon"
                  ></v-icon> -->
                </v-avatar>
              </div>
              <div class="ms-3">Contributer1</div>
            </div>
          </div>

          <div class="mb-3">
            <div class="hstack me-3">
              <div>
                <v-avatar size="36px">
                  <img alt="Avatar" src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460">
                  <!-- <v-icon
                    :color="message.color"
                    v-text="message.icon"
                  ></v-icon> -->
                </v-avatar>
              </div>
              <div class="ms-3">Contributer2</div>
            </div>
          </div>
          
          
        </div>
        
      </div>
    </div>
  </div>
  <!-- //code区域 -->
  
   <!-- commits区域 -->
   <div class="tab-pane fade" id="commits-tab-pane" role="tabpanel" aria-labelledby="commits-tab" tabindex="0">
    <div class="card mb-4 mt-3" style="width: 100%;">
      <div class="card-header text-start ps-3 pt-2 pb-2 ">
        <span> Commits</span>
      </div>
      <el-table
        :cell-style="styleBack"
        :header-cell-style="getRowClass"
        :data="commitList"
        border
        style="width: 100%">
          <el-table-column
            prop="commitUser"
            label="User">
          </el-table-column>
          <el-table-column
            prop="time"
            label="time">
          </el-table-column>
          <el-table-column
            align="center"
            label="commitId"
            prop="commitId">
              <template slot-scope="scope" > 
                  <el-button type="primary" size="mini" @click="rollback(scope.row.commitId)">{{scope.row.commitId}}</el-button>
              </template>
          </el-table-column>
        </el-table>
    </div>
</div>
  <!-- commits区域 -->


  <!-- Issue -->
  <div class="tab-pane fade" id="repositroies-tab-pane" role="tabpanel" aria-labelledby="repositroies-tab" tabindex="0">
      <div class="hstack gap-3 border-bottom resetPadding mb-3">
          <input class="form-control me-auto" type="text" placeholder="Find an issue..." aria-label="Find an issue..." @keyup.enter="submit">
          
              <div class="btn-group" role="group">
                  <button type="button" class="btn btn-outline-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                  Filters
                  </button>
                  <ul class="dropdown-menu">
                  <li><a class="dropdown-item" @click="filterIssue(issueOpen)">Open</a></li>
                  <li><a class="dropdown-item" @click="filterIssue(issueClosed)">Closed</a></li>
                  </ul>
              </div>


          <div class="vr"></div>
          <button type="button"  class="btn btn-success oneLine" data-bs-toggle="modal" data-bs-target="#modal_new_issue">
              New Issue
          </button>


          <!-- Modal -->
          <div class="modal fade" id="modal_new_issue" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="staticBackdropLabel">New Issue</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <div class="row mx-3">
                    <div class="input-group mt-3 mb-3">
                      <span class="input-group-text" id="basic-addon1">Title</span>
                      <input type="text" v-model="issueTitle" class="form-control" placeholder="Enter a Issue title" >
                    </div>

                    <div class="input-group mb-3">
                      <span class="input-group-text" id="basic-addon1">Comment</span>
                      <input type="text" v-model="issueComment" class="form-control" placeholder="Add a comment" >
                    </div>
                  </div>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="addIssue()">Add</button>
                </div>
              </div>
            </div>
          </div>


      </div>

      

      <div class="card mb-4" style="width: 100%;">
        <div class="card-header text-start ps-3 pt-2 pb-2">
          {{issueShow}}<span> issue</span>
        </div>

        <v-expansion-panels>
          <v-expansion-panel v-for="item in filterIssueList" :key="item.id">
            <v-expansion-panel-header>
              <div class="hstack">

              <span class="float-start">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-record-circle me-1" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path d="M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
              </svg>
              <el-link>
                {{item.issueName}}
              </el-link>
              </span>
              </div>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              


              <v-timeline align-top=true dense=true>
                <v-timeline-item v-for="entry in item.issueContent" :key="entry.id">
                  <template v-slot:icon>
                    <v-avatar >
                      <img src="http://i.pravatar.cc/64">
                    </v-avatar>
                  </template>
                  <v-card class="elevation-2">
                    <v-card-title class="headline">{{entry.user}}</v-card-title>
                    <v-card-subtitle>
                      {{entry.comment}}
                    </v-card-subtitle>
                    <v-card-text>
                      {{entry.commentDate}}
                    </v-card-text>
                  </v-card>
                </v-timeline-item>
              </v-timeline>

              <v-divider></v-divider>


              <v-textarea clearable clear-icon="cancel" filled name="comments" v-model="issueComment"></v-textarea>

              <button type="button" class="btn btn-primary" @click="addComment(item.id)">Add comment</button> 






            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </div>

  </div>
  <!-- //Issue -->




  <div class="pr-pane fade" id="pr-tab-pane" role="tabpanel" aria-labelledby="pr-tab" tabindex="0">
    <div class="hstack gap-3 border-bottom resetPadding mb-3">
          <input class="form-control me-auto" type="text" placeholder="Find an issue..." aria-label="Find an issue..." @keyup.enter="submit">
          
              <div class="btn-group" role="group">
                  <button type="button" class="btn btn-outline-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                  Filters
                  </button>
                  <ul class="dropdown-menu">
                  <li><a class="dropdown-item" @click="filterPR(issueOpen)">Open</a></li>
                  <li><a class="dropdown-item" @click="filterPR(issueClosed)">Closed</a></li>
                  </ul>
              </div>


          <div class="vr"></div>
          <button type="button"  class="btn btn-success oneLine" data-bs-toggle="modal" data-bs-target="#modal_new_pr">
              New pull request
          </button>


          <!-- Modal -->
          <div class="modal fade" id="modal_new_pr" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="staticBackdropLabel">New pull request</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">Pull request title</span>
                    <input type="text" class="form-control" placeholder="Enter a pull request title" >
                  </div>
                  
                  <div class="card">
                    <div class="card-header text-start ps-3">
                      <div class="hstack">
                        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-git-compare range-editor-icon me-2">
                            <path fill-rule="evenodd" d="M9.573.677L7.177 3.073a.25.25 0 000 .354l2.396 2.396A.25.25 0 0010 5.646V4h1a1 1 0 011 1v5.628a2.251 2.251 0 101.5 0V5A2.5 2.5 0 0011 2.5h-1V.854a.25.25 0 00-.427-.177zM6 12v-1.646a.25.25 0 01.427-.177l2.396 2.396a.25.25 0 010 .354l-2.396 2.396A.25.25 0 016 15.146V13.5H5A2.5 2.5 0 012.5 11V5.372a2.25 2.25 0 111.5 0V11a1 1 0 001 1h1zm6.75 0a.75.75 0 100 1.5.75.75 0 000-1.5zM4 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"></path>
                        </svg>

                        <div class="dropdown me-1">
                          <a class="btn btn-outline-secondary dropdown-toggle" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                            {{this.targetUser}}/{{this.$route.params.repoParam}}
                          </a>

                          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li>
                              <a class="dropdown-item" @click="shiftPRtarget($route.params.userName)">{{this.$route.params.userName}}</a>
                            </li>
                            <li>
                              <a class="dropdown-item" @click="shiftPRtarget(forkedUser)">{{this.forkedUser}}</a>
                            </li>
                          </ul>
                        </div>

                        <div class="me-1">:</div>

                        <div class="dropdown">
                          <a class="btn btn-outline-secondary dropdown-toggle" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                            Base:
                            {{this.baseBrach}}
                          </a>

                          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li v-for="branch in branchList" :key="branch.id">
                              <a class="dropdown-item" @click="shiftBaseBranch(branch.branchName)">{{branch.branchName}}</a>
                            </li>
                          </ul>
                        </div>

                        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-arrow-left ms-2 me-2">
                            <path fill-rule="evenodd" d="M7.78 12.53a.75.75 0 01-1.06 0L2.47 8.28a.75.75 0 010-1.06l4.25-4.25a.75.75 0 011.06 1.06L4.81 7h7.44a.75.75 0 010 1.5H4.81l2.97 2.97a.75.75 0 010 1.06z"></path>
                        </svg>

                        <div class="dropdown">
                          <a class="btn btn-outline-secondary dropdown-toggle" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                            Compare:
                            {{this.compareBranch}}
                          </a>

                          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li v-for="branch in branchList" :key="branch.id">
                              <a class="dropdown-item" @click="shiftCompareBranch(branch.branchName)">{{branch.branchName}}</a>
                            </li>
                          </ul>
                        </div>
                     </div>
                    </div>
                    
                  </div>



                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="addIssue()">Add</button>
                </div>
              </div>
            </div>
          </div>
    </div>

    <div class="card mb-4" style="width: 100%;">
      <div class="card-header text-start ps-3 pt-2 pb-2">
        {{this.PRshow}}<span> pull requests</span>
      </div>

      <v-expansion-panels>
        <v-expansion-panel v-for="item in filterPRList" :key="item.id">
          <v-expansion-panel-header>
            <div class="hstack">

            <span class="float-start">
            <svg class="octicon octicon-git-pull-request open me-1" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.177 3.073L9.573.677A.25.25 0 0110 .854v4.792a.25.25 0 01-.427.177L7.177 3.427a.25.25 0 010-.354zM3.75 2.5a.75.75 0 100 1.5.75.75 0 000-1.5zm-2.25.75a2.25 2.25 0 113 2.122v5.256a2.251 2.251 0 11-1.5 0V5.372A2.25 2.25 0 011.5 3.25zM11 2.5h-1V4h1a1 1 0 011 1v5.628a2.251 2.251 0 101.5 0V5A2.5 2.5 0 0011 2.5zm1 10.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0zM3.75 12a.75.75 0 100 1.5.75.75 0 000-1.5z"></path></svg>
            <el-link>
              {{item.PRTitle}}
            </el-link>
            </span>
            </div>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <button type="button" v-if="item.status===PRopen" class="btn btn-success me-3">Confirm merge</button>
            <button type="button" v-if="item.status===PRopen" class="btn btn-danger">Cancel</button>

          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
      
  </div>


  <div class="tab-pane fade" id="star-tab-pane" role="tabpanel" aria-labelledby="star-tab" tabindex="0">
      Setting
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

<script>
import Demo from './Demo.vue'
import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:8080';
// axios.defaults.baseURL = 'http://10.27.133.155:8080';

import 'markdown-it-vue/dist/markdown-it-vue.css'
import content from '../file/README.md'
import markdown from '../file/README.md'
// 代码高亮
import 'highlight.js/styles/github.css'
// 其他元素使用 github 的样式
import 'github-markdown-css'




export default {
  components: {
    Demo,
    markdown
  },

  data: function() {
    return {
      content,
      codeFile: "int a;\n\tint main(){\\tint a = 1;\n\ta += 1;\n\t}",

      file: '',


      commitList:[
        
      ],
      rollbackJudge:0,
      branchform:{name:''},
      branchFormVisible:false,


      //issue form
      issueTitle: '',
      issueComment: '',

      //PR part
      baseBrach: '--',
      compareBranch: '--',
      targetUser: '--',
      forkedUser: 'none',
      PRshow: 'open',
      PRopen: 'open',
      PRclosed: 'closed',
      PRList: [
        {PRTitle: "Merge a brach", status:"open", target: "JoeyZi1", targetBranch: 'master', from: 'JoeyZi1', fromBranch: 'dev'},
        {PRTitle: "Merge a brach", status:"open", target: "JoeyZi1", targetBranch: 'master', from: 'JoeyZi1', fromBranch: 'public'},
        {PRTitle: "Merge a brach", status:"closed", target: "JoeyZi1", targetBranch: 'master', from: 'JoeyZi1', fromBranch: 'dev'},
      ],



      root: "root",
      itemType_folder: "folder",
      itemType_file: "file",
      pageType_list: "list",
      pageType_file: "file",


      branchList: [
        {branchName: "public"},
        {branchName: "master"},
        {branchName: "dev"},
        {branchName: "debug"},
      ],

      itemList: [
        // {type: "folder", itemName: "src", msg: "updated 2 days ago"},
        // {type: "folder", itemName: "bin", msg: "updated 2 days ago"},
        // {type: "folder", itemName: ".idea", msg: "updated 2 days ago"},
        // {type: "file", itemName: "README.md", msg: "updated 2 days ago"},
      ],
      display: "list",
      fileContent: "jlasfalfaslfslgjsaasfs",



      issueOpen: "open",
      issueClosed: "closed",
      issueShow: "open",
      issueList: [
        {issueName: "Please consider adding a license", 
          issueCondition: "open",
          issueContent: [
            {comment: 'Test comment', user: 'Joey', commentDate: new Date()},
            {comment: 'Test comment 2', user: 'Peter', commentDate: new Date()}
          ]
        
        },
        {issueName: "Consider adding keyboard shortcut image", issueCondition: "open",
          issueContent: [
              {comment: 'Test comment', user: 'Joey', commentDate: new Date()},
              {comment: 'Test comment 2', user: 'Peter', commentDate: new Date()}
            ]
        
        },
        {issueName: "Consider adding tere", issueCondition: "closed",
          issueContent: [
              {comment: 'Test comment', user: 'Joey', commentDate: new Date()},
              {comment: 'Test comment 2', user: 'Peter', commentDate: new Date()}
            ]
        
        },

      ],
    }
  },

  methods: {
    //pr part
    shiftPRtarget: function(b){
      console.log(b);
      this.targetUser = b;
    },

    shiftBaseBranch: function(b) {
      this.baseBrach = b;
    },

    shiftCompareBranch: function(b) {
      this.compareBranch = b;
    },

    async deleteBranch(branchname){
        var deleteJudge = 0
        await axios.get("/createBranch/" + this.$route.params.userName + '/' +  this.$route.params.repoParam + '/' +  this.$route.params.branchName ).then((response)=>{
          branchJudge = response.data
        })
    },
    enterBranch(branchname){
      this.$router.push({
          name: "RepoBrowser",
          params:{
            userName: this.$route.params.userName,
            repoParam: this.$route.params.repoParam,
            branchName: branchname,
            queryPath: "root"
          },
          query: {
            path: +new Date() 
          }
        }
      )
    },
    async submitBranchForm(){
        var newBranchName = this.branchform.name
        var branchJudge = 0
        await axios.get("/createBranch/" + this.$route.params.userName + '/' +  this.$route.params.repoParam + '/' +  this.$route.params.branchName + "/" + newBranchName).then((response)=>{
          branchJudge = response.data
        })
        console.log('-------------------------------------------create branch','branchjudge',branchJudge)
        console.log("/RepoBrowser/" + this.$route.params.userName + '/' +  this.$route.params.repoParam + '/' +  this.$route.params.branchName + "/createBranch/" + newBranchName)
        this.branchFormVisible = false
        if (branchJudge==0){
          alert('Create failed.');
        } else{
          this.branchList.push(newBranchName)
          this.$router.push({
              name: "RepoBrowser",
              params:{
                userName: this.$router.params.userName,
                repoParam: this.$router.params.repoParam,
                branchName: newBranchName,
                queryPath: "root"
              },
              query: {
                path: +new Date() 
              }
            }
          )
       
        }
    },
    createBranch(){
        this.branchFormVisible = true  
    },
    async rollback(id){
      console.log('---------------------------------------------rollback', id)
      console.log("/RepoBrowser/" + this.$route.params.userName + '/' +  this.$route.params.repoParam + '/' +  this.$route.params.branchName + id + '/Rollback')
      await axios.get("/RepoBrowser/" + this.$route.params.userName + '/' +  this.$route.params.repoParam + '/' +  this.$route.params.branchName + "/" + id + '/Rollback').then((response)=>{
        this.rollbackJudge = response.data
      })
      console.log(this.rollbackJudge)
      if(this.rollbackJudge==1){
        
        // window.location.reload();
        console.log('this.rollbackJudge=================================')
        this.$router.push(
          {
            name: "RepoBrowser",
            params:{
              userName: this.$route.params.userName,
              repoParam: this.$route.params.repoParam,
              branchName: this.$route.params.branchName,
              queryPath: "root"
            },
            query: {
              path: +new Date() 
            }
          }
        )
        console.log('this.rollbackJudge========sgdhsjdfjf=========================')
          
      } else{
        alert('Rollback failed!')
        // , ' ', function(){
        //   // window.location.reload();
        //   this.$router.push({
        //       name: "RepoBrowser",
        //       params:{
        //         userName: this.$router.params.userName,
        //         repoParam: this.$router.params.repoParam,
        //         branchName: "master",
        //         queryPath: "root"
        //       }
        //     }
        //   )
        //   });
      }
    },


    addComment: function(name) {
      var index = this.issueList.findIndex(issue => {
            if (issue.id == name) {
                return true;
            }
      });
      this.issueList[index].issueContent.push({comment: this.issueComment, user: "Joey", commentDate: new Date()})
      this.issueComment = ''
    },

    addIssue: function() {
      var comment = [{comment: this.issueComment, user: "Joey", commentDate: new Date()}]
      var entry = {issueName: this.issueTitle, issueCondition: "open", issueContent: comment}
      this.issueList.push(entry)
      this.issueTitle = ''
      this.issueComment = ''
    },

    filterIssue: function(flag) {
      if (flag === this.issueOpen) {
        this.issueShow = "open"
      } else {
        this.issueShow = "closed"
      }
    },

    filterPR: function(flag) {
      if (flag === this.PRopen) {
        this.PRshow = "open"
      } else {
        this.PRshow = "closed"
      }
    },

    //提取path
    test: function(item) {
      var temp = this.$route.params.queryPath.split(item)
      console.log(temp)
    },

    jumpTo: function(item) {
      var user = this.$route.params.userName
      var repo = this.$route.params.repoParam
      var branch = this.$route.params.branchName
      var temp = this.$route.params.queryPath.split(item)

      //处理路径为root的情况
      if (item === repo) {
        this.$router.push(
          {
            name: "RepoBrowser",
            params:{
              userName: user,
              repoParam: repo,
              branchName: branch,
              queryPath: 'root'
            },
            query: {
              path: +new Date() //保证每次点击路由的query项都是不一样的，确保会重新刷新view
            }
          }
        )
        return
      }

      //处理其他跳转
      var newPath = temp[0] + item
      this.$router.push(
        {
          name: "RepoBrowser",
          params:{
            userName: user,
            repoParam: repo,
            branchName: branch,
            queryPath: newPath
          },
          query: {
            path: +new Date() //保证每次点击路由的query项都是不一样的，确保会重新刷新view
          }
        }
      )

      // console.log(temp)
    },

    visit: function(itemName) {
      var user = this.$route.params.userName
      var repo = this.$route.params.repoParam
      var branch = this.$route.params.branchName
      var pre = this.$route.params.queryPath
      var newpath = pre + "_" + itemName
      this.$router.push(
        {
          name: "RepoBrowser",
          params:{
            userName: user,
            repoParam: repo,
            branchName: branch,
            queryPath: newpath
          }
        }
      )
      console.log(this.$route.path)
    },

    getFile: function(event) {
      this.file = event.target.files[0];
      console.log(this.file);
    },

    submitForm: function(event) {
      event.preventDefault();
      let formData = new FormData();
      formData.append('file', this.file);
      formData.append('UserName', this.getUserName);
      formData.append('RepoName', this.getRepoName);
      formData.append('BranchName', this.getBranchName);
      formData.append('FilePath', this.getFilePath);


      let config = {
        headers: {
          'Content-Type': 'multipart/form-data',
          'UserName': this.getUserName,
          'RepoName': this.getRepoName,
          'BranchName': this.getBranchName,
          'FilePath': this.getFilePath
        }
      }

      this.$http.post(' http://127.0.0.1:8082/upload', formData, config).then(function (response) {
        if (response.status === 200) {
          console.log(response.data);
        }
      })

    },


    changeBranch: function(branch){
      var user = this.$route.params.userName
      var repo = this.$route.params.repoParam
      var path = this.$route.params.queryPath
      
      this.$router.push(
        {
          name: "RepoBrowser",
          params:{
            userName: user,
            repoParam: repo,
            branchName: branch,
            queryPath: path
          },
          // query: {
          //   path: +new Date() //保证每次点击路由的query项都是不一样的，确保会重新刷新view
          // }
        }
      )
      axios.get(this.$route.path).then((response)=>{
        this.itemList = response.data.itemList
        this.branchList = response.data.branchList
        this.display = response.data.display
        this.fileContent = response.data.response
      })
    },

  },

  created: function() {
    axios.get(this.$route.path).then((response)=>{
      this.itemList = response.data.itemList
      this.branchList = response.data.branchList
      this.display = response.data.display
      this.fileContent = response.data.response
    })
    console.log("----------------------sdfsghgdhfgh----------------------------");
    console.log('/RepoBrowser/'+ this.$route.params.userName + '/' +  this.$route.params.repoParam + '/' +  this.$route.params.branchName + '/upload');
    axios.get("/RepoBrowser/" + this.$route.params.userName + '/' +  this.$route.params.repoParam + '/' +  this.$route.params.branchName + '/getCommitList').then((response)=>{
    this.commitList = response.data.commitList
    })

  },

  computed: {
      //将文件夹和文件分类排列
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

      filterIssueList () {
        var arr = this.issueList.filter(item => item.issueCondition === this.issueShow)
        return arr
      },

      filterIssueList_ () {
        var arr = this.issueList.filter(item => item.issueCondition === this.issueOpen)
        return arr
      },

      issueNumber () {
        return this.filterIssueList_.length;
      },

      filterPRList () {
        var arr = this.PRList.filter(item => item.status === this.PRshow)
        return arr
      },

      filterPRList_ () {
        var arr = this.PRList.filter(item => item.status === this.PRopen)
        return arr
      },

      PRNumber () {
        return this.filterPRList_.length;
      },



      //提取path
      splitPath () {
        var pathList = this.$route.params.queryPath.split("_")
        pathList[0] = this.$route.params.repoParam
        return pathList
      },

      getUserName() {
        return this.$route.params.userName
      },

      getRepoName() {
        return this.$route.params.repoParam
      },

      getBranchName() {
        return this.$route.params.branchName
      },

      getFilePath() {
        return this.$route.params.queryPath
      }
  },




}

</script>







<style>
pre {
  position: relative;
  min-width: 600px;
  margin: 0;
}
.hljs {
  display: block;
  width: 100%;
  margin: 0;
  padding: 1px;
  color: #d5e4e4;
  font-weight: 200;
  font-size: 0.75rem;
  font-family: Menlo, Monaco, Consolas, Courier, monospace;
  line-height: 1.5;
  white-space: pre-wrap;
  border: 0;
  text-align: start;
}
.hljs ol {
  margin: 0 0 0 35px;
  padding: 0;
  list-style-type: decimal;
}
.hljs ol li {
  /* padding: 5px; */
  /* padding-left: 10px; */
  color: #131414;
  white-space:pre-line;
  /* list-style: decimal-leading-zero; */
  list-style-position: outside;
  border-left: 1px solid white(180 98% 1%);
}
</style>