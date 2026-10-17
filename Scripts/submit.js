
const signInForm = document.querySelector("form");

signInForm.addEventListener("submit", (event) => {
    event.preventDefault();

    Swal.fire({
        icon: "error",
        title: "Wrong email or password",
        text: "Please check your credentials and try again.",
        confirmButtonText: "Try again",
        confirmButtonColor: "#8d0300",
        background: "#2a2a2a",
        color: "#ffffff",
        iconColor: "#ffb4ab"
    });
});