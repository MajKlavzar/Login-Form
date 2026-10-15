
const signInForm = document.querySelector("form");

signInForm.addEventListener("submit", (event) => {
    event.preventDefault();
    signInForm.classList.add("show-error");
});