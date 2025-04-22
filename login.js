document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('loginForm');
    const rollNumberInput = document.getElementById('rollNumber');
    const passwordInput = document.getElementById('password');
    const rollNumberError = document.getElementById('rollNumberError');
    const passwordError = document.getElementById('passwordError');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 

        let isValid = true;

        
        const rollNumberPattern = /^23N71A\d{4}$/;
        if (!rollNumberPattern.test(rollNumberInput.value)) {
            rollNumberError.textContent = 'Invalid Roll Number format. It should be like 23N71Axxxx';
            isValid = false;
        } else {
            rollNumberError.textContent = '';
        }

        
        if (passwordInput.value.length < 6) {
            passwordError.textContent = 'Password must be at least 6 characters long.';
            isValid = false;
        } else {
            passwordError.textContent = '';
        }

        
        if (isValid) {
            
            alert('Login Successful!');
            form.reset();
        }
    });
});