const button = document.getElementById("greetBtn");
const input = document.getElementById("nameInput");
const heading = document.getElementById("heading");

button.addEventListener("click", function () {
  const name = input.value.trim();

  if (name !== "") {
    heading.textContent = "Hello, " + name;
  } else {
    heading.textContent = "Hello";
  }
});

const boxes = document.querySelectorAll(".box");

boxes.forEach(function (box) {
  box.addEventListener("click", function () {
    const color = box.textContent.toLowerCase();

    box.style.backgroundColor = color;

    if (color === "yellow") {
      box.style.color = "black";
    } else {
      box.style.color = "white";
    }
  });
});
