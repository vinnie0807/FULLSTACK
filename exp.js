const empl =[
    {
        empid:1,
        empname: 'vk',
        empsalary:50000,
        empaddress:{
            empcity:"hyd",
            emparea:"vv",
        }

    }, {
        empid:2,
        empname: 'vk',
        empsalary:50000,
        empaddress:{
            empcity:"hyd",
            emparea:"vFFv",
        }

    }, {
        empid:3,
        empname: 'Bvk',
        empsalary:60000,
        empaddress:{
            empcity:"hyd",
            emparea:"Fv",
        }

    }, {
        empid:4,
        empname: 'KUMAR',
        empsalary:20000,
        empaddress:{
            empcity:"JN",
            emparea:"BB",
        }

    }
]
const store = document.getElementById('store');

empl.forEach(user => {
    store.innerHTML += `
        <tr>
            <td>${user.empid}</td>
            <td>${user.empname}</td>
            <td>${user.empsalary}</td>
            <td>${user.empaddress.empcity}</td>
            <td>${user.empaddress.emparea}</td>
        </tr>`;
});
