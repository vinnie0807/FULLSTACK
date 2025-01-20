let userdetails = {
    name : "vinay",
    age : 21,
    citys : "Hyderabad",
}
console.log(userdetails);
console.log(userdetails.name);
console.log(typeof(userdetails));

let x = JSON.stringify(userdetails);
console.log(x);
console.log(x.name)
console.log(typeof(x));

let y = JSON.parse(x);
console.log(y);