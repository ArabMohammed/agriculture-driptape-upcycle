const menuButton = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");


menuButton.addEventListener("click", () => {

    const isOpen = navLinks.classList.toggle("active");
    menuButton.setAttribute("aria-expanded", String(isOpen));

});



document.getElementById("year").textContent =
new Date().getFullYear();