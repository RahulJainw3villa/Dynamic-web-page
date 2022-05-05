// const navbar1 = document.getElementsByTagName("nav");
// navbar.addEventListener('scroll',function(){
//   // document.querySelector('.material').innerHTML = "rahul";c
//   console.log("scrolloing")
  
// })


let navbrand = document.querySelector(".nav-brand")
let nav = document.querySelector('.fa-bars')
let navbar = document.querySelector('.navbar')
let navlink = document.querySelector('.nav-link')
let mat = document.querySelector(".material");

let nav1 = document.querySelector("#nav1");

let toggleClick = true;
nav.addEventListener('click',function() {
if(toggleClick == true){
  navbar.style.height = "60%"
  navlink.style.display = "block" 
  navbrand.style.top = "0"
  mat.style.position = "absolute";
  mat.style.top = "0";
  nav.style.position = "absolute";
  navlink.style.position = "absolute"
  navlink.style.top = "3rem";
  navlink.style.left = "1rem";
  nav.style.top = "3%";
toggleClick = false;
}
else{
  navbar.style.height = "2rem";
  navlink.style.position = "absolute"
  navlink.style.top = "3rem";
  navlink.style.left = "1rem";
 
  toggleClick = true;
}

})

function myFunction() {
  var element = document.getElementById("nav-toggle");
  element.classList.toggle("d-none");

  
}

function myfunc(){
var height = documnet.getElementById("nav-height");
height.classList.toggle("nav-main-height");
}

// let toggle = document.querySelector('.collapse')

// toggle.click(function(){
//   toggle.toggleClass(collapse);
// })





























