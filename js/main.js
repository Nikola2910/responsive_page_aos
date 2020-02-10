var menuToggle = document.querySelector(".menu-btn");
var mainMenu = document.querySelector(".menu");

menuToggle.addEventListener("click", function() {
  mainMenu.classList.toggle("visible");
});
