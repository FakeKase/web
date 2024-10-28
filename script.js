let nav2 = document.getElementById("nav22")

document.addEventListener("scroll", () => {

    if (window.scrollY > 65) {
        nav2.classList.add("scrolling");
    } else {
        nav2.classList.remove("scrolling");
    }

})