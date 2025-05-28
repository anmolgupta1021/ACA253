// script.js

const greetings = [
  "Welcome to Anmol's Profile!",
  "Hello there!",
  "Glad to have you here!",
  "Namaste! Welcome to my CV."
];

window.addEventListener("load", () => {
  const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
  alert(randomGreeting);

  // Default to dark theme
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light") {
    document.body.classList.add("light");
  } else {
    document.body.classList.remove("light");
  }
});

// Toggle theme on click
document.getElementById("theme-toggle").addEventListener("click", () => {
  document.body.classList.toggle("light");
  const newTheme = document.body.classList.contains("light") ? "light" : "dark";
  localStorage.setItem("theme", newTheme);
});
