
var menu = document.getElementById("menu")
var show= document.getElementById("show")

menu.addEventListener("click",()=>{
    if(show.style.display=="none"){
        show.style.display="block"
    }
    else{
        show.style.display="none"
    }
})
document.body.addEventListener("click",(event)=>{
    show.style.display="none"
},true)
