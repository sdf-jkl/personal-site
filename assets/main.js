(function () {
  var storageKey = "theme";
  var root = document.documentElement;

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    root.style.colorScheme = theme;
  }

  var stored = localStorage.getItem(storageKey);
  var initial = stored || "dark";
  applyTheme(initial);

  var header = document.querySelector(".site-header .wrapper");
  if (!header) {
    return;
  }

  var nav = header.querySelector(".site-nav");
  var toggle = document.createElement("button");
  toggle.className = "theme-toggle";
  toggle.type = "button";

  function updateLabel() {
    var current = root.getAttribute("data-theme");
    toggle.textContent = current === "dark" ? "Light mode" : "Dark mode";
  }

  toggle.addEventListener("click", function () {
    var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    applyTheme(next);
    localStorage.setItem(storageKey, next);
    updateLabel();
  });

  updateLabel();

  if (nav) {
    nav.appendChild(toggle);
  } else {
    header.appendChild(toggle);
  }
})();
