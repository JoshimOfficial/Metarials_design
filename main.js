//darkmode toggle
let select_html = document.querySelector("html");
let toggle_btn = document.querySelector("#toggle");
let light_mode = document.querySelector("#light_mode");

toggle_btn.addEventListener("click",()=>{
    select_html.classList.toggle("dark")

    if(select_html.classList[1]=='dark') {
        window.localStorage.setItem("dark_mode", "true");
    }
    else {
       window.localStorage.removeItem("dark_mode")
    }
})

let is_dark = window.localStorage.getItem("dark_mode");

if(is_dark) {
    window.localStorage.setItem("dark_mode", "true");
    select_html.classList.add("dark")
}
else {
    window.localStorage.removeItem("dark_mode")
    select_html.classList.remove("dark");
}