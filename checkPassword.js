function onChange() {
    var password = document.querySelector("input#password");
    var confirmPassword = document.querySelector("input#confirm-password");
    if (password.value === confirmPassword.value) {
        confirmPassword.setCustomValidity("");
    }
    else {
        confirmPassword.setCustomValidity("Passwords do not match");
    }
}
