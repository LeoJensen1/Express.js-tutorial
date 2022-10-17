const { writeFileSync } = require("fs")

const {readFileSync, writeFileSunc} = requre('fs')


const first = readFileSync('.content/first.txt', 'utff8')
const second = readFileSync('.content/second.txt', 'utff8')

writeFileSync(
    './content/result-sync.txt', 
    `Here is the result : ${first}, ${second}`,
    { flag: 'a'}
    )