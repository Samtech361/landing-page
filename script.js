const navId = document.getElementById("nav-menu"),
    ToggleBtnId = document.getElementById("toggle-btn"),
    CloseBtnId = document.getElementById("close-btn")


//show the menu
ToggleBtnId.addEventListener("click", () =>{
    navId.classList.add("show");
});