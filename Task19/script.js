const cart = document.getElementById("cart-items");
const totalEl = document.getElementById("total");
const bookBtn = document.getElementById("bookBtn");

let count = 0;
let total = 0;

const services = [
  { name: "Dry Cleaning", price: 200, img: "Img/img1.jpg" },
  { name: "Ironing", price: 100, img: "Img/img2.jpg" },
  { name: "Wedding Dress Cleaning", price: 250, img: "Img/img3.jpg" },
  { name: "Wash & Fold", price: 150, img: "Img/img4.jpg" },
  { name: "Stain Removal", price: 100, img: "Img/img5.jpg" },
  { name: "Pressure Washing", price: 300, img: "Img/img6.jpg" }
];

let currentIndex = 0;

function showItem(index) {
  const item = services[index];
  document.getElementById("service-name").innerText = item.name;
  document.getElementById("service-price").innerText = "₹" + item.price.toFixed(2);
  document.getElementById("service-img").src = item.img;
}

function nextItem() {
  currentIndex = (currentIndex + 1) % services.length;
  showItem(currentIndex);
}

function addCurrentItem() {
  const item = services[currentIndex];
  addItem(item.name, item.price);
  nextItem();
}

function addItem(name, price) {
  count++;

  if (cart.querySelector("#empty")) {
    cart.innerHTML = "";
  }

  const row = document.createElement("tr");

  row.innerHTML = `
    <td>${count}</td>
    <td>${name}</td>
    <td>₹${price.toFixed(2)}</td>
  `;

  cart.appendChild(row);

  total += price;
  totalEl.innerText = "₹" + total.toFixed(2);

  bookBtn.classList.add("active");
}

function bookNow() {
  const message = document.getElementById("form-message");

  message.classList.remove("error", "success");

  if (total === 0) {
    message.innerText = "⚠️ Add items to the cart to book.";
    message.classList.add("error");
  } else {
    message.innerText = "✅ Thank you! We will get back to you soon.";
    message.classList.add("success");
  }
}

showItem(currentIndex);
