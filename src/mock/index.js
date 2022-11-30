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
        "msg": "updated 1 days ago",
        "star": 2,
        "fork": 1,
        },
        {
        "repoName": "Demo",
        "permission": "public",
        "msg": "updated 1 days ago",
        "star": 1,
        "fork": 0,
        },
        {
        "repoName": "Test",
        "permission": "public",
        "msg": "updated 1 days ago",
        "star": 0,
        "fork": 1,
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


// Mock.mock('http://localhost:8080/UserPage/JoeyZi1', () => {
//     return joey_userpage
// })
// Mock.mock('http://localhost:8080/RepoBrowser/JoeyZi1/OOAD_Project/master/root_src_components', () => {
//     return joey_repo_components
// })
// Mock.mock('http://localhost:8080/RepoBrowser/JoeyZi1/OOAD_Project/master/root_src_mock', () => {
//     return joey_repo_mock
// })
// Mock.mock('http://localhost:8080/RepoBrowser/JoeyZi1/OOAD_Project/master/root_src', () => {
//     return joey_repo_src
// })
// Mock.mock('http://localhost:8080/RepoBrowser/JoeyZi1/OOAD_Project/master/root_public', () => {
//     return joey_repo_public
// })
// Mock.mock('http://localhost:8080/RepoBrowser/JoeyZi1/OOAD_Project/master/root', () => {
//     console.log("mock info")
//     return joey_repo_root
// })

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


let img = Mock.mock({
    "Img": "@Image('900x900','@color', 'Random Image')",
})

const Random = Mock.Random

Mock.mock(RegExp('http://10.27.133.155:8080/mock/'), "get", (options) =>{
    console.log('mock')
    console.log(options);
    console.log(options.url.split('/'));
    var t = options.url.split('/')
    var name = t[t.length-1]
    console.log(name)

    var temp = [];
    temp.push("#");
    for (let index = 0; index < name.length; index++) {
    temp.push(parseInt(name[index].charCodeAt(0), 10).toString(16));
    }
	var s = String(temp.slice(0, 5).join('').slice(0, 4));
    console.log(s)

    return Mock.mock({
        "Img": Random.image('500x500', s, '#fff',name),
    });
});


//http://10.27.133.155:8080/mock/

let upload_response = Mock.mock({
    "status": 200
})