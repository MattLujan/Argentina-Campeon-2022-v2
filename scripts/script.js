const botonMenu = document.querySelector(".btn-menu");
const menuLinks = document.querySelector(".menu-links");

botonMenu.addEventListener("click", () => {
  menuLinks.classList.toggle("active");
}); 