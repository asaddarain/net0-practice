const menuBarElement = document.getElementById("menu-bar");
const overlayElement = document.getElementById("open-overlay");

function openMenuBar() {
  if (overlayElement.style.display == "block") {
    overlayElement.style.display = "none";
  } else {
    overlayElement.style.display = "block";
  }
}

menuBarElement.addEventListener("click", openMenuBar);
