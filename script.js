const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("light");
  toggleBtn.textContent = body.classList.contains("light") ? "🌞" : "🌙";
});
