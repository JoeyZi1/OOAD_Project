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
        {"branchName": "public"},
        {"branchName": "dev"},
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
        {"branchName": "public"},
        {"branchName": "dev"},
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
        {"branchName": "public"},
        {"branchName": "dev"},
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
        {"branchName": "public"},
        {"branchName": "dev"},
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
        {"branchName": "public"},
        {"branchName": "dev"},
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
Mock.mock('http://localhost:8080/RepoBrowser/JoeyZi1/OOAD_Project/master/root_src_components', () => {
    return joey_repo_components
})
Mock.mock('http://localhost:8080/RepoBrowser/JoeyZi1/OOAD_Project/master/root_src_mock', () => {
    return joey_repo_mock
})
Mock.mock('http://localhost:8080/RepoBrowser/JoeyZi1/OOAD_Project/master/root_src', () => {
    return joey_repo_src
})
Mock.mock('http://localhost:8080/RepoBrowser/JoeyZi1/OOAD_Project/master/root_public', () => {
    return joey_repo_public
})
Mock.mock('http://localhost:8080/RepoBrowser/JoeyZi1/OOAD_Project/master/root', () => {
    console.log("mock info")
    return joey_repo_root
})

// Mock.mock('http://10.27.133.155:8080/UserPage/JoeyZi1', () => {
//     return joey_userpage
// })
// Mock.mock('http://10.27.133.155:8080/RepoBrowser/JoeyZi1/OOAD_Project/master/root_src_components', () => {
//     return joey_repo_components
// })
// Mock.mock('http://10.27.133.155:8080/RepoBrowser/JoeyZi1/OOAD_Project/master/root_src_mock', () => {
//     return joey_repo_mock
// })
// Mock.mock('http://10.27.133.155:8080/RepoBrowser/JoeyZi1/OOAD_Project/master/root_src', () => {
//     return joey_repo_src
// })
// Mock.mock('http://10.27.133.155:8080/RepoBrowser/JoeyZi1/OOAD_Project/master/root_public', () => {
//     return joey_repo_public
// })
// Mock.mock('http://10.27.133.155:8080/RepoBrowser/JoeyZi1/OOAD_Project/master/root', () => {
//     console.log("mock info")
//     return joey_repo_root
// })





let upload_response = Mock.mock({
    "status": 200
})