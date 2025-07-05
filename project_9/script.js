let button = document.querySelector("button")
let heading= document.querySelector("h2")
let ison=false;
button.addEventListener('click',function(){
    if(ison){
heading.style.color='rgb(0, 255, 4)'
heading.innerHTML='FRIEND ADDED.'
button.style.color='rgb(255, 42, 42)'
button.innerText='UNFOLLOW'
ison=false;
} else{
heading.style.color='rgb(246, 255, 0)'
heading.innerHTML='ADD FRIEND.'
button.style.color='rgb(38, 255, 0)'
button.innerText='FOLLOW'
ison=true; 
}
})