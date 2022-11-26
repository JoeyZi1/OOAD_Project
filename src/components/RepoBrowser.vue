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
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 1.5 16 16">
          <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
      </svg>
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
            Issues
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
          
          <el-link v-if="this.$route.params.queryPath===root"  :underline="false" class="me-auto">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-diagram-2" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M6 3.5A1.5 1.5 0 0 1 7.5 2h1A1.5 1.5 0 0 1 10 3.5v1A1.5 1.5 0 0 1 8.5 6v1H11a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0v-1A.5.5 0 0 1 5 7h2.5V6A1.5 1.5 0 0 1 6 4.5v-1zM8.5 5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1zM3 11.5A1.5 1.5 0 0 1 4.5 10h1A1.5 1.5 0 0 1 7 11.5v1A1.5 1.5 0 0 1 5.5 14h-1A1.5 1.5 0 0 1 3 12.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm4.5.5a1.5 1.5 0 0 1 1.5-1.5h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1A1.5 1.5 0 0 1 9 12.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1z"/>
            </svg>
            <span style="margin-right: 2px">{{branchList.length}}</span>branch
          </el-link>

          <!-- <el-link v-if="this.$route.params.queryPath===root"  :underline="false" class="me-auto" @click="getCommitList()">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-diagram-2" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M6 3.5A1.5 1.5 0 0 1 7.5 2h1A1.5 1.5 0 0 1 10 3.5v1A1.5 1.5 0 0 1 8.5 6v1H11a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0v-1A.5.5 0 0 1 5 7h2.5V6A1.5 1.5 0 0 1 6 4.5v-1zM8.5 5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1zM3 11.5A1.5 1.5 0 0 1 4.5 10h1A1.5 1.5 0 0 1 7 11.5v1A1.5 1.5 0 0 1 5.5 14h-1A1.5 1.5 0 0 1 3 12.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm4.5.5a1.5 1.5 0 0 1 1.5-1.5h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1A1.5 1.5 0 0 1 9 12.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1z"/>
            </svg>
            <span style="margin-right: 2px">commit</span>
          </el-link> -->

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
                          <input class="form-control mb-2" type="file" @change="getFile($event)" webkitdirectory mozdirectory>
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
          <div class="card-header text-start bg-white " style="font-weight: bolder;">
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

      <div v-if="this.$route.params.queryPath===root" class="col-md-3 col-0 bg-light">
        About
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
                    <!-- <v-avatar >
                      <img src="http://i.pravatar.cc/64">
                    </v-avatar> -->
                    <v-avatar color="orange" size="48">
                      <span class="white--text headline">{{entry.user.slice(0,2)}}</span>
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

  <!-- setting -->

  <div class="tab-pane fade" id="star-tab-pane" role="tabpanel" aria-labelledby="star-tab" tabindex="0">
    <div class="row">
      <div class="col">
        <v-card
          class="mx-auto"
          height="400"
          width="256"
        >
          <v-navigation-drawer
            class="deep-purple accent-4"
            dark
            permanent
          >
            <v-list>
              <v-list-item
                v-for="item in setitems"
                :key="item.title"
                link
              >
                <v-list-item-icon>
                  <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>
      
                <v-list-item-content>
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
      
            <template v-slot:append>
              <div class="pa-2">
                <v-btn block>Logout</v-btn>
              </div>
            </template>
          </v-navigation-drawer>
        </v-card>
      </div>
    </div>
  </div>

  <!-- setting -->


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
// axios.defaults.baseURL = 'http://localhost:8080';
axios.defaults.baseURL = 'http://10.27.133.155:8080';

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
      setitems: [
        { title: 'Dashboard', icon: 'dashboard' },
        { title: 'Account', icon: 'account_box' },
        { title: 'Admin', icon: 'gavel' },
      ],
      content,
      codeFile: "\nint main(){\n\tint a = 1;\n\ta += 1;\n\t}",

      file: '',

      //issue form
      issueTitle: '',
      issueComment: '',



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
      commitList:[
        
      ],
      rollbackJudge:0,
      branchform:{name:''},
      branchFormVisible:false

    }
  },

  methods: {
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

      console.log("----------------------sdfsghgdhfgh----------------------------");
      console.log('/RepoBrowser/'+ this.$route.params.userName + '/' +  this.$route.params.repoParam + '/' +  this.$route.params.branchName + '/upload');

      axios.post('/RepoBrowser/'+ this.$route.params.userName + '/' +  this.$route.params.repoParam + '/' +  this.$route.params.branchName + '/upload', formData, config).then(function (response) {
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
    console.log("the get axio is", this.$route.path)
    // axios.get(this.$route.path).then((response)=>{
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