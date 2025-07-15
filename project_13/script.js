let post =document.querySelector("#post");
let img1 = document.querySelector("#img1")
let img2 = document.querySelector("#img2")
let img3 = document.querySelector("#img3")
function likeimg(){
    
    let like = document.createElement("img");
    like.setAttribute("src","./4cb3dfa788bdb2c97db08616a58304e4b6dd72d374e551cc419a77c4af6ec16e-removebg-preview.png")
    document.body.appendChild(like);
    post.style.position="relative"
    like.style.height='150px';
    like.style.display="flex";
    like.style.position="absolute"
    like.style.top = "50%";
    like.style.left = "48%";
    like.style.transform = "translate(-50%, -50%)";
    setTimeout(function(){
        like.remove()
    },1000)

}
post.addEventListener("dblclick",likeimg)
img1.addEventListener("click",likeimg)


img1.addEventListener("mouseenter",function(){
  img1.style.transition= "transform 0.3s";
  img1.style.transform="scale(1.2)";
})
img1.addEventListener("mouseleave",function(){
  img1.style.transform="scale(1)";
})
img2.addEventListener("mouseenter",function(){
  img2.style.transition= "transform 0.3s";
  img2.style.transform="scale(1.2)";
})
img2.addEventListener("mouseleave",function(){
  img2.style.transform="scale(1)";
})
img3.addEventListener("mouseenter",function(){
  img3.style.transition= "transform 0.3s";
  img3.style.transform="scale(1.2)";
})
img3.addEventListener("mouseleave",function(){
  img3.style.transform="scale(1)";
})