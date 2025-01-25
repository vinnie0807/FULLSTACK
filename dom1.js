// let x =document.createElement("div");
// x.innerText = "Dynamic creation of html element";

// x.setAttribute("id","dynamic");
// console.log(x);

// document.body.appendChild(x);

// let image = document.createElement("img");
// image.src = ""; ;
// console.log(image);

// document.body.appendChild(image);

let user = Text.value;
let password = password.value;
let email = email.value;
let form = document.getElementById("form");
form.addEventListener("submit",(e)=>{
    e.preventDefault();
});