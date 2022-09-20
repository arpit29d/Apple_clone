let button = document.querySelector(".fa-search");
let input = document.querySelector(".search-bar");
let links = document.querySelector(".navbar-nav");
let menu = document.querySelector(".fa-bars");

button.addEventListener("click",()=>{
    input.classList.toggle("active");
    button.classList.toggle("fa-times")
    links.classList.toggle("active")
})

menu.addEventListener("click",()=>{
    let nav = document.querySelector(".navBar");
    nav.classList.toggle("active");
    menu.classList.toggle("fa-times")

})