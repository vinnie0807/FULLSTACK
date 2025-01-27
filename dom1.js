// let x =document.createElement("div");
// x.innerText = "Dynamic creation of html element";

// x.setAttribute("id","dynamic");
// console.log(x);

// document.body.appendChild(x);

// let image = document.createElement("img");
// image.src = ""; ;
// console.log(image);

// document.body.appendChild(image);

// let user = Text.value;
// let password = password.value;
// let email = email.value;
// let form = document.getElementById("form");
// form.addEventListener("submit",(e)=>{
//     e.preventDefault();
// });


let form=document.querySelector("form");
let username = document.getElementById("uName");

let password = document.getElementById("uPass");

let gen = document.getElementsByName("gender");
// console.log(gen);

form.addEventListener("submit",event=>{
    event.preventDefault();
    let un = username.value;
    let up = password.value;
    // console.log(un , up);
    let gender = "";
   
   for(let i=0;i<=gen.length-1;i++){
    if(gen[i].checked == true){
        // console.log("true" , gen[i].value);
        gender += gen[i].value;
    }
   }
//    console.log(ele);
let userDetails={
    un,up,gender
};
console.log(userDetails);
})
