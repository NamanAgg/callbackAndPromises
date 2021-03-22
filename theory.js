// async function cool(){
//     let i=1000;
//     while(true){
//         if (i == 10000000000){
//             console.log(i,"aye yo");
//             break;
//         }
//         i+=1;
//     }
// }
// let j=1;
//  cool();
// // setTimeout(function () {
// //     console.log("hello");
// // }, 2000);   //this is in millisecond

// console.log("I am first");
// while(true){
//     if(j%100000000==0){
//         console.log(j);
//         break;
//     }
//     j+=1;
// }


const fs = require("fs");


// function callback(err,data){
//     if(err){
//         console.log("unable to read file");
//     }
//     else{
//         console.log(data);
//     }
// }

// fs.readFile("abc.txt","utf-8",callback);





// let bool=true;
// setTimeout(function () {
//     console.log("callback function");
//     bool=false;
// }, 2000);   //this is in millisecond

// while(bool){
//     console.log("hello");
// }





let count = 1;
function readfile(filename) {
    if (filename == undefined) {
        filename = (count - 1) + ".txt";
    }
    fs.readFile(filename, "utf-8", writefile);
}

function writefile(err, data) {
    let lines = data.split("\r\n");
    if (lines.length > 1) {
        lines = lines.splice(1);
        let writeData = lines.join("\r\n");
        fs.writeFile(count + ".txt", writeData, readfile);

        count += 1;
    }
}

readfile("abc.txt");


// function myFilter(my_array, callback) {
//     //Enter your code here
//     let arr = [];
//     for (ele of my_array) {
//         if (callback(ele))
//             arr.push(ele);
//     }
//     return arr;
// }
// function callback(val) {
//     return val % 2 == 0;
// }

// function processData(inputArray) {
//     //In blank write anonymous function, which takes one parameter and returns true if its even or false if its odd.
//     console.log(myFilter(inputArray, callback));
// }
