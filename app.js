let option=document.getElementById("options");
let closed=document.getElementById("close");

option.addEventListener("click",(e)=>{
    let el=document.getElementById("active");
    let el2=document.getElementById("activelg")
    el.classList.toggle("hidden");
    el2.classList.toggle("lg:hidden");
})

closed.addEventListener("click",(e)=>{
    let el=document.getElementById("active");
    el.classList.toggle("hidden");
})