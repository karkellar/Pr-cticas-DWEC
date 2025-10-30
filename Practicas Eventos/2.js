let email = document.getElementById("email");
let password = document.getElementById("password");
let emailError = document.getElementById("emailError");
let passwordError = document.getElementById("passwordError");
let button = document.getElementById("send");
let emailValido = true;
let passwordValida = true;
function activeButton() {
    button.disabled = !(emailValido && passwordValida);
}
email.addEventListener("blur", function errorEmail() {
    if (!email.value.includes('@')) {
        emailError.textContent = ("Email no válido, debe contener un @");
        emailValido = false;
    } else {
        emailValido = true;
    }
    activeButton();
})
password.addEventListener("blur", function errorPassword() {
    if (password.value.length < 8 || password.value.length > 10) {
        passwordError.textContent = ("Contraseña no válida, debe tener una longitud entre 8 y 10 carácteres");
        passwordValida = false;
    } else {
        passwordValida = true;
    }
    activeButton();   
})

document.getElementById("form").addEventListener("submit", function(e) {
    if (!(emailValido && passwordValida)) {
        alert("Por favor, corrige los fallos y vuelve a intentarlo :)");
    }
});