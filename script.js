const changeThemeBtn = document.querySelector(".btn");
const body = document.querySelector("body");

changeThemeBtn.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
});
