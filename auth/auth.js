const loginButton = document.getElementById("login-button");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const message = document.getElementById("login-message");








loginButton.onclick = function() {
    message.textContent = emailInput.value + "has logged in ;)";
};