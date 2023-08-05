const os = require('os')
const path = require('path')
const process = require('process')

const currentWD = process.cwd()
console.log(currentWD)

const pathSep = path.sep
console.log(pathSep)

const nameOfExt = path.extname
console.log(nameOfExt)

const processID = process.pid
console.log(processID)

const infoOfUser = os.userInfo()
console.log(infoOfUser)

const osPlatform = os.platform()
console.log(osPlatform)
