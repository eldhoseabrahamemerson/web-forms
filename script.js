const form = document.getElementById("registrationForm");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const experience = document.getElementById("experience");
const rangeValue = document.getElementById("rangeValue");
const message = document.getElementById("message");

// Update experience value
experience.addEventListener("input", () => {
    rangeValue.textContent = `${experience.value} Year${experience.value == 1 ? "" : "s"}`;
});

// Form validation
form.addEventListener("submit", (e) => {
    e.preventDefault();

    message.textContent = "";
    message.className = "";

    if (password.value !== confirmPassword.value) {
        message.textContent = "Passwords do not match.";
        message.classList.add("error");
        confirmPassword.focus();
        return;
    }

    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    message.textContent = "Registration successful!";
    message.classList.add("success");

    // Optional: Reset form after successful submission
    setTimeout(() => {
        form.reset();
        rangeValue.textContent = "0 Years";
        message.textContent = "";
        message.className = "";
    }, 2500);
});

// Reset message
form.addEventListener("reset", () => {
    setTimeout(() => {
        rangeValue.textContent = "0 Years";
        message.textContent = "";
        message.className = "";
    }, 100);
});