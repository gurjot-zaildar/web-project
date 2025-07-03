let h1 = document.querySelector('h1');
let img = document.querySelector('img');
let button = document.querySelector('button');
let body =document.querySelector('body')
let ison=false;
button.addEventListener('click',function(){
if(ison){
    console.log("off")
     img.src='https://www.w3schools.com/js/pic_bulboff.gif'
     button.innerText='TURN ON'
     button.style.color="rgb(255, 255, 255)"
      button.style.backgroundColor='rgb(38, 38, 38)'
       button.style.borderColor="rgb(255, 255, 255)"
       body.style.backgroundColor="rgb(28, 27, 27)"
       h1.style.color='white'
    ison=false
}else{
    console.log("on")
    img.src='https://www.w3schools.com/js/pic_bulbon.gif'
     button.innerText='TURN OFF'
     button.style.backgroundColor='rgb(185, 245, 219)'
     button.style.color="rgb(0,0,0)"
     button.style.borderColor="rgb(1,1,1)"
     body.style.backgroundColor="rgb(247, 247, 190)"
     h1.style.color='black'
    ison=true;
}
})