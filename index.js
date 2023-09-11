
// Get the button and dropdown content
var button = document.getElementById("myBtn");
var dropdown = document.getElementById("myDropdown");

// Toggle the dropdown menu when the button is clicked
button.addEventListener("click", function() {
  dropdown.classList.toggle("show");
});

// Close the dropdown menu if the user clicks outside of it
window.addEventListener("click", function(event) {
  if (!event.target.matches("#myBtn")) {
    if (dropdown.classList.contains("show")) {
      dropdown.classList.remove("show");
    }
  }
});

