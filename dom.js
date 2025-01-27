// // let element = document.getElementById("demo");
// // element.innerText = "DOM";
// // console.log(element);

// // let div =  document.getElementById("test");
// // div.innerHTML = "<h2>header</h2>";
// // console.log(div);

// let ele =  document.getElementsByClassName("test");
// console.log(Array.isArray(ele))
// ele[0].style.backgroundColor = "red";
// ele[1].style.backgroundColor = "green";
// let x = [...ele];
// console.log(x, Array.isArray(x));
// x.map((element)=>{
//     element.style.backgroundColor = "teal";
// });

// let container=document.getElementsByClassName("container");
// console.log(Array.isArray(container)) //false {not pure array}
// //using spread operator
// container[0].style.backgroundColor="yellow"
// let x=[...container]
// console.log(Array.isArray(x)) //true {pure array}

// // Now we can use map method for iterating
// x.map(element=>{console.log(element)
//     element.style.backgroundColor="aqua"
// });

// let ele = document.querySelector("demo");
// console.log(ele);
//null output

// let ele = document.querySelector(".container");
// console.log(ele);


// let ele = document.querySelectorAll(".container");
// [...ele].map((element)=>{
//     console.log(element.innerText);
// });
// let btn = document.getElementById("btn");
// btn.addEventListener("click", function(){
//     console.log("Button clicked");
// });
// let btn2 = document.getElementById("btn");
// btn2.addEventListener("mouseover", function(){
//     console.log("Button clicked");
//     document.body.style.backgroundColor = "red";
// });

// let btn = document.getElementById("btn");
// btn.addEventListener("dblclick", function(){
//     console.log("Button clicked");
//     document.body.style.backgroundColor = "red";
// });
//  let bg = document.getElementsByClassName("gg");
//     [...bg].map((element)=>{
//         element.addEventListener("mouseover",()=>{
//             // console.log(element.innerHTML);
//             element.style.backgroundColor = element.innerHTML;
//         });
//         element.addEventListener("mouseleave",()=>{
//             console.log(element.innerHTML);
//             element.style.backgroundColor = "transparent";
//         });
//     });

let mainEle = document.createElement("div");
mainEle.setAttribute("class","mainBlock");
console.log(mainEle);

let topEle = document.createElement("div");
topEle.setAttribute("class","topBlock");

let image = document.createElement("img");
image.src = "https://media.istockphoto.com/id/2155515088/photo/funny-red-cat-in-sunglasses-and-red-t-shirt-is-sitting-at-table-with-mobile-phone-and-licking.webp?b=1&s=612x612&w=0&k=20&c=Iv6O92aEtYmhj9tDmRAwWd9VQgcmuaaOG0u1EF2logs=";

let bottomEle = document.createElement("div"); 
bottomEle.setAttribute("class","bottomBlock");

let h1 = document.createElement("h1");
h1.innerText = "Heading";

let btn = document.createElement("button");
btn.innerText = "view more";

mainEle.appendChild(topEle);
mainEle.appendChild(bottomEle);
bottomEle.appendChild(h1);
bottomEle.appendChild(btn);
topEle.appendChild(image);
document.body.appendChild(mainEle);
