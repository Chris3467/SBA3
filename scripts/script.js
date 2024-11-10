var navBar = [{ text: "Home" }, { text: "About" }, { text: "Sign/In" }];

const nav = document.querySelector("#navbar");
nav.style.height = "100%";
nav.style.backgroundColor = "aliceblue";
nav.classList.add("flex-around");

navBar.forEach((item) => {
  const link = document.createElement("a"); // create anchor element
  link.textContent = item.text; // set the link text
  link.href = "#"; // placeholder href attribute
  link.classList.add("navbar-item"); // add a class for styling
  nav.appendChild(link); // append the link to the navbar
});

// Caching element using query selector
const form = document.querySelector("form");
const nameL = form.elements["name"];
const email = form.elements["email"];
const password = form.elements["password"];

// Get element by ID
const checkbox = document.getElementById("checkbox");
checkbox.style.display = "flex";
checkbox.style.flexDirection = "column";
checkbox.style.alignItems = "center";

// Adding an event listener
form.addEventListener("submit", (evt) => {
  evt.preventDefault();
  if (nameL.value === "" || nameL.value == null) {
    alert("Name is required");
    nameL.focus();
    return false;
  }

  const at = email.value.indexOf("@");

  if (at < 1 || email.value === "") {
    alert("Valid email address required");
    email.focus();
    return false;
  }

  if (password.value === "") {
    alert("Password is required");
    password.focus();
    return false;
  }
  if (password.value.length < 6) {
    alert("Password has to be at least 6 characters");
    password.focus();
    return false;
  }
});

form.addEventListener("submit", (evt) => {
  //evt.preventDefault();
  if (
    nameL.value &&
    email.value &&
    password.value &&
    password.value.length > 6
  ) {
    alert("Congratulations! You are registered!");
  }
});

// Create a new element
const footer = document.createElement("footer");
footer.textContent = "Copyright - Christopher Collado";
document.body.appendChild(footer);
footer.style.display = "flex";
footer.style.flexDirection = "column";
footer.style.alignItems = "center";
footer.style.marginTop = "25%";
