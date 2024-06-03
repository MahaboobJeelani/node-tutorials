// //=========== IMPORTING FILE FROM Data.js FILE ================
// const data = require('./Data.js')
// console.log(data.data);
// console.log(data.add(10, 20));


// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 33, 4, 5]
// let result = arr.filter(ar => ar === 3)
// console.log(result);

// //===========  TO KNOW THE DIRECTORY ==============
// console.log('-->', __dirname);

// //====== TO KNOW THE FILE NAME ============
// console.log('--> ', __filename);

// // ========= ABOUT CORE MODULES ============
// const fs = require('fs')
// fs.writeFileSync('Test.txt', "Test file is created in local host and inserted text in to file")


// // ==== CREATING THE BASIC SERVER AND CHECK ON BROWSER ====
// const http = require('http')
// http.createServer((req, resp) => {
//     resp.write(`<h1>Welcome to coding world</h1>`)
//     resp.end()
// }).listen(3000, () => {
//     console.log('Server is running on port 3000');
// })

// // ==== CREATING SAMPLE API WITH THE HELP OF CORE MODULE (HTTP) ====
// const http = require('http')
// http.createServer((res, resp) => {
//     resp.writeHead(200, { 'Content-Type': 'application/json' })
//     resp.write(JSON.stringify(
//         { name: 'fake', email: 'fake@gmail.com', contact: '99999' }
//     ))
//     resp.end()
// }).listen(3000, () => {
//     console.log('Server is running on port 3000');
// })


// // ==== INPUT FROM COMMAND LINE ====
// const fs = require('fs')
// console.log(process.argv);
// let input = process.argv
// fs.writeFileSync(input[2], 'Welcome to Coding World')

// // ==== CRATING AND DELETING FILE USING INPUT COMMAND ====
// const fs = require('fs')
// let input = process.argv
// if (input[2] === 'add') {
//     fs.writeFileSync(input[3], input[4])
// } else if (input[2] === 'remove') {
//     fs.unlinkSync(input[3])
// } else {
//     console.log('invalid input');
// }

// // ==== CREATING MULTIPLE FILES AND SHOWING FILE LIST ====
// const fs = require('fs')
// const path = require('path')
// const dirFile = path.join(__dirname, 'files')
// for (let i = 0; i < 5; i++) {
//     fs.writeFileSync(`${dirFile}/hello${i}.txt`, `This is the sample text of file ${i}`)
// }

// fs.readdir(dirFile, (error, data) => {
//     data.forEach(item => {
//         console.log("file Name is ", item);
//     })
// })