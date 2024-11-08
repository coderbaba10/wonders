
function toggleMode() {
  const body = document.body;
  const icon = document.getElementById("mode-icon");
  body.classList.toggle("dark-mode");
  const mode = body.classList.contains("dark-mode") ? "Dark" : "Light";
  localStorage.setItem("mode", mode);

  // Iconni almashtirish
  if (body.classList.contains("dark-mode")) {
      icon.classList.remove("fa-sun");
      icon.classList.add("fa-moon");
  } else {
      icon.classList.remove("fa-moon");
      icon.classList.add("fa-sun");
  }
}

window.onload = function() {
  const savedMode = localStorage.getItem("mode");
  const icon = document.getElementById("mode-icon");
  if (savedMode === "Dark") {
      document.body.classList.add("dark-mode");
      icon.classList.remove("fa-sun");
      icon.classList.add("fa-moon");
  }
}
  