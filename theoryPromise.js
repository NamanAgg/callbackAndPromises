const fs= require("fs");

// let promise=new Promise(function(resolve,reject){
//     console.log("hello");
//     if(fs.existsSync("5.txt")){
//         resolve("file exists");
//     }
//     else{
//         reject("Sorry, file doesn't exist");
//     }
// });

// console.log(promise);

// function abc(val){
//     console.log(val+"this is run only when promise is resolved");
// }

// promise.then(abc).catch(function(err){
//     console.log(err+"this is run only when promise is rejected");
// });

// promise.then((val)=>{
//     console.log(val,"new callback=>this is the beauty of promises,we can have different callbacks for different calls of then and" 
//                      +"another good thing about promise is it ran only once in (line 3) so no need to run it over and over again"
//                      +"for different callback functions");
// });




let promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("promise2 completed");
    }, 5000);
});


let promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("promise1 completed");
    }, 2000);
});

promise2.then((data)=>{
    console.log(data);
});

promise1.then((data) => {
    console.log(data);
});








// let promise = new Promise(function(resolve,reject) {
//     if(fs.existsSync("8.txt")) {
//         console.log("hello");
//         resolve();
//     } else {
//         reject("file doesn't exist");
//     }
// });

// function abc (val){
//     console.log(val);
// }

// function error (err) {
//     console.log(err);
// }
// console.log(promise);
// promise.then(abc).catch(error)

// promise.then(function(val){
//     console.log(val + " new callback");
// })

// promise.then(function(val){
//     console.log(val);
// })
// function callback(data) {
//     console.log("2nd file read");
// }
// let readfile = fs.promises.readFile("1.txt","utf-8");
// readfile.then(function(data){
//     console.log(data);
//     fs.readFile("2.txt","utf-8",callback);
//     console.log("hello");
// }).catch(function(err){
//     console.log(err);
// });

// readfile.then(function(data) {
//     console.log(data);
// })

// let promise1 = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve("promise1 completed");
//     },2000)
// })

// let promise2 = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve("promise2 completed");
//     },2000)
// })
// console.log(promise1,promise2);
// promise2.then(function(data){
//     console.log("promise part 2")
//     throw new Error("error");
// }).catch(function(data) {
//     console.log("error occured");
//     return ("hello");
// })
// promise1.then(function(data){
//     console.log(data);
// })

// promise2.then(function(data){
//     console.log(data);
// })



// function job(state) {
//     return new Promise(function(resolve, reject) {
//         if (state) {
//             resolve('success');
//         } else {
//             reject('error');
//         }
//     });
// }

// let promise = job(true);

// promise

// .then(function(data) {
//     console.log(data);

//     return job(false);
// })

// .catch(function(error) {
//     console.log(error);

//     return 'Error caught';
// })

// .then(function(data) {
//     console.log(data);

//     return job(true);
// })

// .catch(function(error) {
//     console.log(error);
// });

// function job(state) {
//     return new Promise(function(resolve, reject) {
//         if (state) {
//             resolve('success');
//         } else {
//             reject('error');
//         }
//     });
// }

// let promise = job(true);

// promise

// .then(function(data) {
//     console.log(data);

//     return job(true);
// })

// .then(function(data) {
//     if (data != 'victory') {
//         return 'Defeat';
//     }

//     return job(true);
// })

// .then(function(data) {
//     console.log(data);
// })

// .catch(function(error) {
//     console.log(error);

//     return job(false);
// })

// .then(function(data) {
//     console.log(data);

//     return job(true);
// })

// .catch(function(error) {
//     console.log(error);

//     return 'Error caught';
// })

// .then(function(data) {
//     console.log(data);

//     return new Error('test');
// })

// .then(function(data) {
//     console.log('Success:', data.message);
// })

// .catch(function(data) {
//     console.log('Error:', data.message);
// });

// var promise = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         reject('We are all going to die');
//     }, 2000);
// });

// promise.then(function success(data) {
//     console.log(data + ' 1');
// }).catch( function error(data) {
//     console.error(data + ' 1');
// });

// promise.then(function success(data) {
//     console.log(data + ' 2');
// }).catch(function error(data) {
//     console.error(data + ' 2');
// });

// promise.then(function success(data) {
//     console.log(data + ' 3');
// }).catch(function error(data) {
//     console.error(data + ' 3');
// });







// var promise = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         resolve('hello world 1');
//         resolve('hello world 2');
//         resolve('hello world 3');
//         resolve('hello world 4');
//     }, 1000);
// });

// promise.then(function success(data) {
//     console.log(data);
// });

let promise1 = fs.promises.readFile("1.txt", "utf-8").then(function (data) {
    console.log("first file reading completed");
});

let promise2 = fs.promises.readFile("2.txt", "utf-8").then(function (data) {
    console.log("second file reading completed");
});

let promise3 = fs.promises.readFile("3.txt", "utf-8").then(function (data) {
    console.log("third file reading completed");
});
let promise4 = fs.promises.readFile("4.txt", "utf-8").then(function (data) {
    console.log("fourth file reading completed");
});
let promise5 = fs.promises.readFile("5.txt", "utf-8").then(function (data) {
    console.log("fifth file reading completed");
});
let promise6 = fs.promises.readFile("6.txt", "utf-8").then(function (data) {
    console.log("sixth file reading completed");
});
let promise7 = fs.promises.readFile("7.txt", "utf-8").then(function (data) {
    console.log("seventh file reading completed");
});
let promise8 = fs.promises.readFile("8.txt", "utf-8").then(function (data) {
    console.log("eighth file reading completed");
});

Promise.all([promise1, promise2, promise3, promise4, promise5, promise6, promise7, promise8]).then(function (data) {
    console.log("Reading all file completed");
})

Promise.race([promise1, promise2, promise3, promise4, promise5, promise6, promise7, promise8]).then(function (data) {
    console.log("Reading one file completed");
})


function delay(time) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve('success ' + time);
        }, time);
    });
}

Promise.race([delay(500), delay(100)]).then(function (data) {
    console.log(data);
});