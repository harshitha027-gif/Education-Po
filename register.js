document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registerForm');
    const fullNameInput = document.getElementById('fullName');
    const rollNumberInput = document.getElementById('rollNumber');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const fullNameError = document.getElementById('fullNameError');
    const rollNumberError = document.getElementById('rollNumberError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');

    form.addEventListener('submit', function(event) {
        let isValid = true;

        // Full Name validation (basic, can be expanded)
        if (fullNameInput.value.trim() === '') {
            fullNameError.textContent = 'Please enter your full name.';
            isValid = false;
        } else {
            fullNameError.textContent = '';
        }

        // Roll Number validation (must include "N7")
        if (!/N7/.test(rollNumberInput.value)) {
            rollNumberError.textContent = 'Roll Number must include "N7".';
            isValid = false;
        } else {
            rollNumberError.textContent = '';
        }

        // Email validation
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value)) {
            emailError.textContent = 'Please enter a valid email address.';
            isValid = false;
        } else {
            emailError.textContent = '';
        }

        // Password validation (at least 6 characters, letters and numbers)
        if (passwordInput.value.length < 6 || !/[a-zA-Z]/.test(passwordInput.value) || !/[0-9]/.test(passwordInput.value)) {
            passwordError.textContent = 'Password must be at least 6 characters and include both letters and numbers.';
            isValid = false;
        } else {
            passwordError.textContent = '';
        }

        if (!isValid) {
            event.preventDefault(); // Prevent form submission if validation fails
        }
    });
});