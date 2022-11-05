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
    "itemList|10": [{
        "itemName": /file_[0-9a-zA-Z]+/,
        "type": /folder|file/,
        "msg": /updated [0-9] days ago/
    }],
    "fileContent": /[0-9a-zA-Z]+/
})


Mock.mock(RegExp('/UserPage[0-9a-zA-Z/:]*'), () => {
    return userPageData
})

Mock.mock(RegExp('/RepoPage[0-9a-zA-Z/:]*'), () => {
    return repoData
})












// Mock.mock(RegExp('http://localhost:8080/user/[0-9a-zA-Z_]+'),{
//     "userName": "@name",
//     "repoList|30": [{
//         "repoName": /repo_[0-9a-zA-Z][0-9a-zA-Z_$]+/,
//         "permission": /public|private/,
//         "msg": /updated [0-9] days ago/
//     }],
//     "userImg": "@Image('900x900','@color', 'Random Image')",
// })
