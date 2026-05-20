const hambuger = document.querySelector("#hamburger");
const menu = document.querySelector("#menu");
const line = document.querySelectorAll(".line");

hambuger.addEventListener("click",()=>{
    menu.classList.toggle("hidden");
    
    line.forEach(line=>{
        line.classList.toggle("bg-black");
        line.classList.toggle("bg-white");

    })
})