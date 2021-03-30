// function job() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("hello world");
//         }, 2000);
//     });
// }

// module.exports = job;


// function job(data) {
//     return new Promise((resolve, reject) => {
//         if (typeof data != "Number") {
//             reject("error");
//         }
//         else {
//             if (data % 2 == 0) {
//                 resolve("even");
//             }
//             else resolve("odd");
//         }
//     });
// }

// module.exports = job;


// var promise = job1();

// promise

//     .then(function (data1) {
//         console.log('data1', data1);
//         return job2();
//     })

//     .then(function (data2) {
//         console.log('data2', data2);
//         return 'Hello world';
//     })

//     .then(function (data3) {
//         console.log('data3', data3);
//     });

// function job1() {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             resolve('result of job 1');
//         }, 1000);
//     });
// }

// function job2() {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             resolve('result of job 2');
//         }, 1000);
//     });
// }



// function job(callback1, callback2) {
//     setTimeout(callback1, 2000);
//     setTimeout(callback2, 1000);
//     setTimeout(callback2, 2000);
//     setTimeout(callback2, 3000);
// }

// module.exports = job;






//very important question
//link is https://www.codingame.com/playgrounds/347/javascript-promises-mastering-the-asynchronous/the-last-challenge
let central = require('./central'),
    db1 = require('./db1'),
    db2 = require('./db2'),
    db3 = require('./db3'),
    vault = require('./vault'),
    mark = require('./mark');

module.exports = function (id) {
    // TODO
    // Reminder: The deadline is tomorrow !
    return new Promise(function (resolve, reject) {
        let ans = {};
        ans["id"] = id;
        let promise1 = central(id).then(function (data) {
            if (data == "db1") {
                return [db1(id), data];
            } else if (data == "db2") {
                return [db2(id), data];
            } else if (data == "db3") {
                return [db3(id), data];
            }
        }).catch(function (err) {
            reject("Error central");
        });

        let promise2 = vault(id).then(function (data) {
            ans["firstname"] = data.firstname;
            ans["lastname"] = data.lastname;
            ans["email"] = data.email;
        }).catch(function (err) {
            reject("Error vault")
        });