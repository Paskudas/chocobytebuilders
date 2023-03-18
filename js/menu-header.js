// Get the menu
var menu = document.getElementById("menu");

// Get the button that opens the menu
var btn = document.getElementById("open-menu");

// Get the button that closes the menu
var closeBtn = document.getElementById("close-menu");

// When the user clicks the button, open the menu 
btn.onclick = function() {
  menu.classList.add("show-menu");
}

// When the user clicks the close button, close the menu
closeBtn.onclick = function() {
  menu.classList.remove("show-menu");
}

// When the user clicks anywhere outside of the menu, close it
window.onclick = function(event) {
  if (event.target != menu && event.target != btn) {
    menu.classList.remove("show-menu");
  }
}
