// function fetchUsers(){
//     let res = window.fetch("https://jsonplaceholder.typicode.com/users");
//     // console.log(res);
//     res.then((response)=>{
//         return response.json().then(data=>{
//             console.log(data);
//             let store = document.getElementById("store");
//             data.map((user)=>{
//                 store.innerHTML +=`
//                  <tr>
//                     <td>${user.id}</td>
//                     <td>${user.name}</td> 
//                     <td>${user.email}</td>
//                     <td>${user.company.name}</td>
//                 </tr>` 
               
//             })
//         })
//     })
//     .catch(err=>console.log(err))
// }
// fetchUsers();

// let p = new Promise((resolve, reject) => { 
//     setTimeout(()=>{
//         resolve("success");
//     },3000);
// });

// async function demo(){
//     console.log("start");
//     let x = await p;
//     console.log(x);
//     console.log("end");
// }
// demo();

async function fetchUsers(){
    let res = await fetch("https://jsonplaceholder.typicode.com/users"); 
    let data = await res.json();
    console.log(data);
}
fetchUsers();