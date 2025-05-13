// script.js

// Button Click
const magicBtn = document.getElementById("magicBtn");
const message = document.getElementById("message");
magicBtn.addEventListener("click", () => {
  message.textContent = "You clicked the magic button! 🎉";
});

// Hover Effect
const hoverImage = document.getElementById("hoverImage");
hoverImage.addEventListener("mouseover", () => {
  hoverImage.style.border = "5px solid gold";
});
hoverImage.addEventListener("mouseout", () => {
  hoverImage.style.border = "none";
});

// Keypress Detection
const keyInput = document.getElementById("keyInput");
const keyOutput = document.getElementById("keyOutput");
keyInput.addEventListener("keyup", (e) => {
  keyOutput.textContent = `You typed: ${e.key}`;
});

// Double Click Bonus
magicBtn.addEventListener("dblclick", () => {
  alert("Secret double-click discovered! 🕵️‍♂️");
});

// Change Color
const colorChanger = document.getElementById("colorChanger");
colorChanger.addEventListener("click", () => {
  colorChanger.style.backgroundColor =
    colorChanger.style.backgroundColor === "crimson" ? "#007BFF" : "crimson";
});

// Tabs
const tabs = document.querySelectorAll(".tab");
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab-content").forEach((content) => {
      content.style.display = "none";
    });
    const target = document.getElementById(tab.dataset.target);
    target.style.display = "block";
  });
});

// Form Validation
const form = document.getElementById("myForm");
const feedback = document.getElementById("formFeedback");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  if (!name || !email || !password) {
    feedback.textContent = "All fields are required.";
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    feedback.textContent = "Please enter a valid email address.";
    return;
  }

  if (password.length < 8) {
    feedback.textContent = "Password must be at least 8 characters.";
    return;
  }

  feedback.style.color = "green";
  feedback.textContent = "Form submitted successfully!";
});

// Real-time Feedback
const passwordInput = document.getElementById("password");
passwordInput.addEventListener("input", () => {
  if (passwordInput.value.length < 8) {
    feedback.style.color = "red";
    feedback.textContent = "Password too short.";
  } else {
    feedback.textContent = "";
  }
});
