function onChange() {
    const password: HTMLInputElement = document.querySelector("input#password")
    const confirmPassword: HTMLInputElement = document.querySelector("input#confirm-password")
    if (password.value === confirmPassword.value) {
        confirmPassword.setCustomValidity("")
    } else {
        confirmPassword.setCustomValidity("Passwords do not match")
    }
}