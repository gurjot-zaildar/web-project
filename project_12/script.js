let button = document.querySelector("button");
let h2 = document.querySelector("h2");
let inner = document.querySelector(".in");
let grow=0;
button.addEventListener("click",function(){
    let int = setInterval(function(){
        grow++
        h2.innerHTML=  grow+ "%"
        inner.style.width = grow+"%";
    },50)
    setTimeout(function(){
        clearInterval(int)
        button.innerHTML= "DOWNLOADED"
        button.style.opacity=0.5
    },5000)
})