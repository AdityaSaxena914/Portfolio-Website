const toggleBtn = document.getElementById("theme-toggle");
const root = document.documentElement; // <html>

toggleBtn.addEventListener("click", () => {
  root.classList.toggle("dark");
  toggleBtn.textContent = root.classList.contains("dark") ? "🌙" : "🌞";
});
