// Activity 1
let name = "Ailen";
let age = 30;

function greetUser(name, age) {
  return `Hello, I am ${name} and I am ${age} years old.`;
}

console.log(greetUser(name, age));
document.getElementById("greet").textContent = greetUser(name, age);

// Activity 2
const button = document.getElementById("colorBtn");
const colorDisplay = document.getElementById("colorDisplay");

function getRandomColor() {
  let color = "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");
  return color;
}

button.addEventListener("click", () => {
  let newColor = getRandomColor();

  // Activity 3
  console.log("Before color change:", document.body.style.backgroundColor);
  document.body.style.backgroundColor = newColor;
  console.log("After color change:", newColor, "- Background successfully updated!");

  colorDisplay.textContent = `Current Color: ${newColor}`;
});