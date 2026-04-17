# Task18

##  Project Overview

This is a simple web project built using **HTML, CSS, and JavaScript (DOM & Event Handling)**.
The page displays a greeting message, color boxes, and an input field where users can enter their name.

---

## Features

* Displays a default greeting: **"Hello"**
* User can enter their name and click **Greet**
* Greeting updates dynamically to:
  `Hello, <Your Name>`
* Clickable color boxes:

  * Red
  * Blue
  * Green
  * Yellow
*  When a color box is clicked:

  * The box changes to its respective color
  * Text color adjusts for visibility

---

## Technologies Used

* **HTML** → Structure of the webpage
* **CSS** → Styling and layout
* **JavaScript** → DOM manipulation & event handling

##  How It Works

### 1. Greeting Functionality

* The input field takes the user's name.
* When the **Greet** button is clicked:

  * JavaScript captures the input value
  * Updates the heading using DOM manipulation

```javascript
heading.textContent = "Hello, " + name;
```

---

### 2. Color Box Interaction

* All boxes are selected using:

```javascript
document.querySelectorAll(".box");
```

* Each box has a click event:

  * Detects the color name
  * Changes background color dynamically

```javascript
box.style.backgroundColor = color;
```


## Learning Outcome

This project helps you understand:

* DOM selection (`getElementById`, `querySelectorAll`)
* Event handling (`addEventListener`)
* Dynamic content updates
* Basic UI interaction using JavaScript
