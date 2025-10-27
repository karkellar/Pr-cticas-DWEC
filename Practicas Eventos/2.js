function validateOption() {
    let email = document.getElementById ("email");
    let password = document.getElementById ("password");
    if (!email.value.includes("@")) {
        emailError.textContent = ("Email no válido");
    }
    if (password.value.length < 8 || password.value.length > 10) {
        passwordError.textContent = ("Contraseña no válida")
    }
}