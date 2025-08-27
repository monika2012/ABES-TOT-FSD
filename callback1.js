const { promises } = require("dns");
const { resolve } = require("path");

function register(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            //return reject("registration failed");
        console.log("Registration completed");
    resolve();
    },1000)

    })
    
    //console.log("user registration");
}
function login(){
    return new Promise((resolve,reject)=>{
 setTimeout(()=>{
    //return reject("registration failed");
        console.log("login completed");
       resolve();
    },2000)
    })
    
   // console.log("user login");
}
function getData(){
    return new Promise((resolve,reject)=>{
  setTimeout(()=>{
    //return reject("registration failed");
        console.log("got data");
       resolve();
    },3000)
    })
    
    //console.log("user getData");
}
function displayData(){
    setTimeout(()=>{
        
        console.log("data Displayed")
    })
    console.log("user displayData");
}

// register()
// .then(login)
// .then(getData)
// .then(displayData)
// .catch((err)=>{
//     console.log('error:'+err)
// })

// async and await--->
async function ex1() {
    // try{
        await register();
        await login();
        await getData();
        await displayData();
    // }
    // catch(err){
    //     console.log("error:"+err)
    // }
}
//ex1();
ex1().then(()=>{
    console.log("finish all task")
}).catch((err)=>{
    console.log("error:"+err)
})
console.log("other options");