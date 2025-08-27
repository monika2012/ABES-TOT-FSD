

const username="monika2012"
const data=fetch(`https://api.github.com/users/${username}`);
data.then((res)=>res.json())
.then((data)=>{
    const table=document.querySelector("table");
    const row=table.insertRow();
    const cell1=row.insertCell(0).innerText=data.login;
    const cell2=row.insertCell(1).innerText=data.id;   
    const cell3=row.insertCell(2).innerText=data.Name;   
    const cell4=row.insertCell(3).innerText=data.public_repos;   
})
.catch((err)=>console.log(err))
.finally(()=>console.log("fetching done"));
