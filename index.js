const primaryNav = document.querySelector(".primary-navigation");
const hamburgerMenu = document.querySelector(".openbtn");

hamburgerMenu.addEventListener("click", () => {
  // primaryNav.classList.remove('close-menu');
  // primaryNav.classList.add('open-menu');
  primaryNav.classList.toggle("close-menu");
});
