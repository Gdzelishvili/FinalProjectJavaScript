let burger = document.querySelector(".fa-bars")
let mark = document.querySelector(".fa-xmark")
let menu = document.querySelector(".header_nav")


burger.addEventListener("click", () => {
    burger.style.display = "none";
    mark.style.display = "block";
    menu.classList.add("show");
});

mark.addEventListener("click", () => {
    burger.style.display = "block";
    mark.style.display = "none";
    menu.classList.remove("show");
});