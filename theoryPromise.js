const fs= require("fs");

let promise=new Promise(function(resolve,reject){
    console.log("hello");
    if(fs.existsSync("5.txt")){
        resolve("file exists");
    }
    else{
        reject("Sorry, file doesn't exist");
    }
});

console.log(promise);

function abc(val){
    console.log(val+"this is run only when promise is resolved");
}

promise.then(abc).catch(function(err){
    console.log(err+"this is run only when promise is rejected");
});

promise.then((val)=>{
    console.log(val,"new callback=>this is the beauty of promises,we can have different callbacks for different calls of then and" 
                     +"another good thing about promise is it ran only once in (line 3) so no need to run it over and over again"
                     +"for different callback functions");
});