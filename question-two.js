const fs = require('fs')
const path = require('path')

//Question 1
// dirFolder = path.join(__dirname , 'Students')
// fs.mkdir(dirFolder, (err) => {
//     if (err) {
//         console.log(err)
//         return
//     }
//     console.log('Folder created succesfully')
// })

//Question 2
// userContent=""
// dirFile = path.join(__dirname , 'Students', 'user.js')
// fs.writeFile(dirFile, userContent, (err) => {
//     if (err) {
//         console.log(err)
//         return
//     }
//     console.log('File created succesfully')
// })


//Question 3
// newDirFolder = path.join(__dirname, 'Names')
// fs.rename(dirFolder, newDirFolder, (err) => {
//     if (err) {
//         console.log(err)
//         return
//     }
//     console.log('Folder renamed succesfully')
// })


//Question 4
// dirFile = path.join(__dirname , 'Names', 'user.js')
// userContentUpdated="Daniel Enemchukwu (Daniel Flame)"
// fs.appendFile(dirFile, userContentUpdated, (err) => {
//     if (err) {
//         console.log(err)
//         return
//     }
//     console.log('File updated succesfully')
// })


//Question 5
// dirFile = path.join(__dirname , 'Names', 'user.js')
// userContentUpdatedTwo=`\n 20,'Male','Nigerian',2348137534362,"Tech Savy"`
// fs.appendFile(dirFile, userContentUpdatedTwo, (err) => {
//     if (err) {
//         console.log(err)
//         return
//     }
//     console.log('File updated succesfully')
// })

//Question 6
// dirFileNew = path.join(__dirname , 'Names', 'daniel_enemchukwu.js')
// fs.rename(dirFile, dirFileNew, (err) => {
//     if (err) {
//         console.log(err)
//         return
//     }
//     console.log('File name has been changed')
// })

//Question 7
// dirFileNew = path.join(__dirname , 'Names', 'daniel_enemchukwu.js')
// fs.open(dirFileNew, 'r', (err,fileData) => {
//     if (err) {
//         console.log(err)
//         return
//     }
//     console.log(fileData)
    
//     fs.readFile(dirFileNew, 'utf-8', (err,fileData2) => {
//         if (err) {
//             console.log(err)
//             return
//         }
//         console.log(fileData2)
//     })
// })

//Question 8
// fs.rm(dirFileNew, (err) => {
//     if (err) {
//         console.log(err)
//         return
//     }
//     console.log('File removed')
// })

//Question 9
newDirFolder = path.join(__dirname, 'Names')
fs.rmdir(newDirFolder, (err) => {
    if (err) {
        console.log(err)
        return
    }
    console.log('Folder removed')
})