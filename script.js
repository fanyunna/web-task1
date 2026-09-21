const form = document.getElementById("registration-form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

function setError(input, message) {
    const formItem = input.parentElement;
    const small = formItem.querySelector("small");
    formItem.classList.remove("success");
    formItem.classList.add("error");
    small.textContent = message;
}

function setSuccess(input) {
    const formItem = input.parentElement;
    const small = formItem.querySelector("small");
    formItem.classList.remove("error");
    formItem.classList.add("success");
    small.textContent = "";
}

function checkUsername() {
    const value = username.value.trim();
    if (value === "") {
        setError(username, "Username is required");
        return false;
    }
    if (value.length < 3) {
        setError(username, "Username must be at least 3 characters");
        return false;
    }
    setSuccess(username);
    return true;
}

function checkEmail() {
    const value = email.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (value === "") {
        setError(email, "Email is required");
        return false;
    }
    if (!emailPattern.test(value)) {
        setError(email, "Please enter a valid email");
        return false;
    }
    setSuccess(email);
    return true;
}

function checkPassword() {
    const value = password.value;
    if (value === "") {
        setError(password, "Password is required");
        return false;
    }
    if (value.length < 6) {
        setError(password, "Password must be at least 6 characters");
        return false;
    }
    setSuccess(password);
    return true;
}

function checkConfirmPassword() {
    const value = confirmPassword.value;
    if (value === "") {
        setError(confirmPassword, "Please confirm your password");
        return false;
    }
    if (value !== password.value) {
        setError(confirmPassword, "Passwords do not match");
        return false;
    }
    setSuccess(confirmPassword);
    return true;
}

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const isUsernameValid = checkUsername();
    const isEmailValid = checkEmail();
    const isPasswordValid = checkPassword();
    const isConfirmValid = checkConfirmPassword();

    if (isUsernameValid && isEmailValid && isPasswordValid && isConfirmValid) {
        alert("Registration successful!");
        form.reset();

        [username, email, password, confirmPassword].forEach((input) => {
            const formItem = input.parentElement;
            formItem.classList.remove("success");
        });
    }
});
