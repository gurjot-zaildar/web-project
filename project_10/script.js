let box = document.querySelector(".box");
let button = document.querySelector("button")
let ison=false;

button.addEventListener('click',function(){
    if(ison){
        let c1 = Math.floor(Math.random()*256);
        let c2 = Math.floor(Math.random()*256);
        let c3 = Math.floor(Math.random()*256);
        let color=(`rgb(${c1},${c2},${c3})`);
    box.style.backgroundColor=(color)
    ison=false;
    } else{
        let c1 = Math.floor(Math.random()*256);
        let c2 = Math.floor(Math.random()*256);
        let c3 = Math.floor(Math.random()*256);
        let color=(`rgb(${c1},${c2},${c3})`);
          box.style.backgroundColor=(color)
    ison=true;
    }
})