function register(cb){
    setTimeout(()=>{
console.log("register end");
cb();
    },1000)
    console.log("register user");
}
function sendEmail(cb){
    setTimeout(()=>{
console.log("sentEmail end");
cb();
    } ,2000)
    console.log("sendEmail");
}
function login(cb){
    setTimeout(()=>{
console.log("login end");
   cb();
 },3000)
    console.log("Login");
}
function getData(cb){
    setTimeout(()=>{
console.log("getData end");
   cb();
 },3000)

    console.log("getData");
}
function displayData(){
    
    console.log("displayData");
}
//callback hell
register(()=>{
    sendEmail(()=>{
        login(()=>{
            getData(()=>{
                displayData();})
            })
        })
    })


// sendEmail();
// login();
// getData();
// displayData();
// console.log("call other application");