let menuBar = document.querySelector(".menuBar");
let button = document.querySelector(".hamMenu");
let opemMenuBar = ()=>{
    if(menuBar.classList.contains("opemMenu")){
        menuBar.classList.remove("opemMenu")
    }
    else{
        menuBar.classList.add("opemMenu")
    }
}
button.addEventListener("click",opemMenuBar)