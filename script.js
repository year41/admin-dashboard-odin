
const root = document.documentElement;

function systemTheme() {
    const mode = window.matchMedia("(prefer-color-scheme: dark").matches;
    const newTheme = mode ? "dark" : "light";
    root.className = newTheme;
}

function setTheme() {
    const newTheme = root.className === "light" ? "dark" : "light";
    root.className = newTheme;
}

systemTheme();

document.querySelector(".theme-color").addEventListener("click", setTheme);