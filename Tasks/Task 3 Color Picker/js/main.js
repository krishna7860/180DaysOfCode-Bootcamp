let colorbuttons = document.getElementsByClassName("color-button");
let backbuttons = document.getElementsByClassName("back-button");
let displayBox = document.getElementById("color-display");
let displayHeading = document.getElementById("display-heading");

// Assigning Style and Function to buttons
for (var i = 0; i < colorbuttons.length; i++) {
  let color = colorbuttons[i].value;
  colorbuttons[i].style.color = color;
  colorbuttons[i].style.backgroundColor = color;
  // Adding onclick function
  colorbuttons[i].setAttribute("onclick", `changeFontColor("${color}")`);
}

// Assigning Style and Function to buttons
for (var j = 0; j < backbuttons.length; j++) {
  let color = backbuttons[j].value;
  backbuttons[j].style.color = color;
  backbuttons[j].style.backgroundColor = color;
  backbuttons[j].setAttribute("onclick", `changeBackgroundColor("${color}")`);
}

// Change Font Color
function changeFontColor(color) {
  displayHeading.style.color = color;
}

// Change Background Color
function changeBackgroundColor(color) {
  displayBox.style.backgroundColor = color;
}
