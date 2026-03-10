(function () {
  var toggleButton = document.getElementById("themeToggle");
  if (!toggleButton) {
    return;
  }

  function getTheme() {
    return document.documentElement.getAttribute("data-theme") === "light"
      ? "light"
      : "dark";
  }

  function applyButtonLabel(theme) {
    toggleButton.textContent = theme === "dark" ? "Light mode" : "Dark mode";
    toggleButton.setAttribute("aria-label", "Switch to " + (theme === "dark" ? "light" : "dark") + " mode");
  }

  function setTheme(theme) {
    if (theme === "light") {
      document.documentElement.setAttribute("data-theme", "light");
    } else {
      document.documentElement.removeAttribute("data-theme");
      theme = "dark";
    }

    localStorage.setItem("theme", theme);
    applyButtonLabel(theme);
  }

  applyButtonLabel(getTheme());

  toggleButton.addEventListener("click", function () {
    setTheme(getTheme() === "dark" ? "light" : "dark");
  });
})();
