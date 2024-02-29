let menuEl = document.querySelector(".menu-container");
let ulEl = document.querySelector(".nav-list");

menuEl.addEventListener("click", toggleMenu);

function toggleMenu() {
  // open if hidden
  if (ulEl.style.display == "block") {
    ulEl.style.display = "none";
    menuEl.innerHTML =
      "<img src='./assets/images/icon-menu.svg' alt='close menu' />";
    // menuEl.style.display = "none";
  } else {
    // close if opened
    ulEl.style.display = "block";
    menuEl.innerHTML =
      "<img src='./assets/images/icon-menu-close.svg' alt='close menu' />";
    // menuEl.style.display = "none";
  }
}
