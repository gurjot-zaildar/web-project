let button=document.querySelector("button");
let body =document.querySelector("body")

if (localStorage.getItem("theam") === "dark") {
    body.classList.add("dark");
}

button.addEventListener("click",function(){
    body.classList.toggle("dark")
    if(body.classList.contains("dark")){
localStorage.setItem("theam","dark")
 }
 else{
    localStorage.setItem("theam","light")
 }
 
})