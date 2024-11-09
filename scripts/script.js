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

// Create a new element
const congrats = document.createElement("p");
congrats.textContent = "Congratulation you are registered!";
document.body.appendChild(congrats);
congrats.style.display = "flex";
congrats.style.flexDirection = "column";
congrats.style.alignItems = "center";
