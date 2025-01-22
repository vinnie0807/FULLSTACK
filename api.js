function fetchUsers(){
    let res = window.fetch("https://jsonplaceholder.typicode.com/users");
    // console.log(res);
    res.then((response)=>{
        return response.json().then(data=>{
            console.log(data);
            let store = document.getElementById("store");
            data.map((user)=>{
                store.innerHTML +=`
                 <tr>
                    <td>${user.id}</td>
                    <td>${user.name}</td> 
                    <td>${user.email}</td>
                    <td>${user.company.name}</td>
                </tr>` 
               
            })
        })
    })
    .catch(err=>console.log(err))
}
fetchUsers();