let button=document.querySelector("button");
let box=document.querySelector(".inner")
let arr=[
    {
        team : "RCB",
        bgcol :"rgb(204, 0, 255)",
        col :"rgb(183, 255, 0)"

    },
    {
        team : "PBSK",
        bgcol :"rgb(255, 0, 0)",
        col :"rgb(195, 255, 0)"

    },
    {
         team : "CSK",
        bgcol :"rgb(255, 255, 255)",
        col :"rgb(0, 0, 0)"

    },
    {
        team : "KKR",
        bgcol :"rgb(0, 255, 38)",
        col :"rgb(247, 0, 255)"

    },
    {
        team : "MI",
        bgcol :"rgb(55, 0, 255)",
        col :"rgb(13, 255, 0)"

    }
]

let ison= false;
button.addEventListener("click",function(){
    if(ison){
        let num=Math.floor(Math.random()*arr.length);
        let winner=arr[num];
        box.style.backgroundColor= winner.bgcol;
        box.style.color= winner.col;
        box.innerHTML= winner.team
         box.style.fontSize= "2rem" ;
        ison=false
    } else{
        let num=Math.floor(Math.random()*arr.length);
         let winner=arr[num];
        box.style.backgroundColor= winner.bgcol;
        box.style.color= winner.col;
        box.innerHTML= winner.team;
        box.style.fontSize= "2rem" ;
        button.style.marginTop="65px";
        ison=true
    }
})
