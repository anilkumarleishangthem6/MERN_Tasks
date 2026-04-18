# Task19

A simple and interactive **Service Booking Web Application** built using **HTML, CSS, and JavaScript**.
Users can browse services, add them to a cart, and simulate booking with a clean and responsive UI.

---

##  Features

* Browse services one-by-one
* Add items to cart
* Skip services without adding
* Dynamic cart updates (with total price)
* Clean UI with modern styling
* Form validation (prevents booking with empty cart)
* Button state change (inactive → active)
* Inline success/error messages

---

## Technologies Used

* **HTML5** – Structure
* **CSS3** – Styling & Layout
* **JavaScript** – Interactivity & DOM manipulation

---

##  Project Structure

```
project-folder/
│
├── index.html
├── style.css
├── script.js
└── Img/
    ├── img1.png
    ├── img2.png
    ├── img3.png
    ├── img4.png
    ├── img5.png
    └── img6.png
```

---

## How It Works

### 🔹 Service Browsing

* Displays one service at a time
* Clicking **Add Item**:

  * Adds the service to cart
  * Moves to next service
* Clicking **Skip**:

  * Moves to next service without adding

---

### 🔹 Cart Functionality

* Items appear dynamically in a table
* Total price updates automatically
* Empty state message disappears when items are added

---

### 🔹 Booking System

* Initially disabled (light color button)
* Activates when at least one item is added
* On click:

  *  Shows error if cart is empty
  *  Shows success message if items exist

---
## Key Concepts Practiced

* DOM Manipulation
* Event Handling
* Arrays & Objects
* Dynamic UI Rendering
* Conditional Logic

---