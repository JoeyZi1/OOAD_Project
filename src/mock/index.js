import Mock from 'mockjs'

let userPageData = Mock.mock({
    "userName": "@name",
    "repoList|30": [{
        "repoName": /repo_[0-9a-zA-Z][0-9a-zA-Z_$]+/,
        "permission": /public|private/,
        "msg": /updated [0-9] days ago/
    }],
    "userImg": "@Image('900x900','@color', 'Random Image')",
})

let repoData = Mock.mock({
    "display": /list|file/,
    "branchList|5": [{
        "branchName": /branch_[0-9a-z]+/
    }],
    "itemList|10": [{
        "type": /folder|file/,
        "itemName": /file_[0-9a-zA-Z]+/,
        "msg": /updated [0-9] days ago/
    }],
    "fileContent": /[0-9a-zA-Z]+/
})





// Mock.mock(RegExp('/UserPage[0-9a-zA-Z/:]*'), () => {
//     return userPageData
// })

// Mock.mock(RegExp('/RepoBrowser[0-9a-zA-Z/:]*'), () => {
//     return repoData
// })






let joey_userpage = Mock.mock({
    "userName": "JoeyZi1",
    "repoList": [{
        "repoName": "OOAD_Project",
        "permission": "public",
        "msg": "updated 1 days ago"
        },

    ],
    "userImg": "@Image('900x900','@color', 'Joey')",
})

let joey_repo_root = Mock.mock({
    "display": /list/,
    "branchList": [
        {"branchName": "master"},
    ],
    "itemList": [
        {
        "type": "folder",
        "itemName": "public",
        "msg": /updated 1 days ago/
        },
        {
        "type": "folder",
        "itemName": "src",
        "msg": /updated 1 days ago/
        },
        {
        "type": "file",
        "itemName": "README.md",
        "msg": /updated 1 days ago/
        },
    ],
    "fileContent": ""
})

let joey_repo_src = Mock.mock({
    "display": /list/,
    "branchList": [
        {"branchName": "master"},
    ],
    "itemList": [
        {
        "type": "folder",
        "itemName": "mock",
        "msg": /updated 1 days ago/
        },
        {
        "type": "folder",
        "itemName": "components",
        "msg": /updated 1 days ago/
        },
    ],
    "fileContent": ""
})


let joey_repo_public = Mock.mock({
    "display": /list/,
    "branchList": [
        {"branchName": "master"},
    ],
    "itemList": [
        {
        "type": "file",
        "itemName": "index.html",
        "msg": /updated 1 days ago/
        },
    ],
    "fileContent": ""
})

let joey_repo_mock = Mock.mock({
    "display": /list/,
    "branchList": [
        {"branchName": "master"},
    ],
    "itemList": [
        {
        "type": "file",
        "itemName": "index.js",
        "msg": /updated 1 days ago/
        },
    ],
    "fileContent": ""
})


let joey_repo_components = Mock.mock({
    "display": /list/,
    "branchList": [
        {"branchName": "master"},
    ],
    "itemList": [
        {
        "type": "file",
        "itemName": "Demo.vue",
        "msg": /updated 1 days ago/
        },
    ],
    "fileContent": ""
})


Mock.mock('http://localhost:8080/UserPage/JoeyZi1', () => {
    return joey_userpage
})


Mock.mock(RegExp('/RepoBrowser/JoeyZi1/OOAD_Project/master/root_src_components'), () => {
    return joey_repo_components
})

Mock.mock(RegExp('/RepoBrowser/JoeyZi1/OOAD_Project/master/root_src_mock'), () => {
    return joey_repo_mock
})

Mock.mock(RegExp('/RepoBrowser/JoeyZi1/OOAD_Project/master/root_src'), () => {
    return joey_repo_src
})

Mock.mock(RegExp('/RepoBrowser/JoeyZi1/OOAD_Project/master/root_public'), () => {
    return joey_repo_public
})


Mock.mock(RegExp('/RepoBrowser/JoeyZi1/OOAD_Project/master/root'), () => {
    console.log("mock info")
    return joey_repo_root
})





let upload_response = Mock.mock({
    "status": 200
})

// Mock.mock(RegExp('http://127.0.0.1:8081/upload'), () => {
//     console.log("accept file")
//     return upload_response
// })