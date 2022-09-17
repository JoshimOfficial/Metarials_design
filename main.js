//darkmode toggle

let select_html = document.querySelector("html");

let toggle_btn = document.querySelector(".toggle");
toggle_btn.addEventListener("click",()=>{
    select_html.classList.toggle("dark")
})