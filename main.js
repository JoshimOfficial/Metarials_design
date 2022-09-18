//darkmode toggle

let select_html = document.querySelector("html");

let toggle_btn = document.querySelector("#toggle");
toggle_btn.addEventListener("click",()=>{
    select_html.classList.toggle("dark")
    if(select_html.classList[1]=='dark') {
        document.cookie = "dark_mode=true";
    }
    else {
        document.cookie = "dark_mode=true; expires=Sat, 20 Jan 1980 12:00:00 UTC";
    }
})

function getCookie(cookieName) {
    let cookie = {};
    document.cookie.split(';').forEach(function(el) {
      let [key,value] = el.split('=');
      cookie[key.trim()] = value;
    })
    return cookie[cookieName];
  }

if(getCookie('dark_mode')=='true') {
    select_html.classList.add("dark");
}
else {
    select_html.classList.remove("dark")
}