const loginButton = document.getElementById("login-button");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const passwordrptInput = document.getElementById("passwordrpt");
const usernameInput = document.getElementById("username");
const message = document.getElementById("login-message");
const signupButton = document.getElementById("signup");

signupButton.onclick = function() {
    
    firebase.auth().createUserWithEmailAndPassword(emailInput.value,passwordInput.value).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});
};





