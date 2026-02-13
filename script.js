document.addEventListener("DOMContentLoaded", () => {
    
    const inputs = document.querySelectorAll('input[type="text"], input[type="email"], input[type="password"]');

    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.style.backgroundColor = '#fffae0';
        });

        input.addEventListener('blur', () => {
            input.style.backgroundColor = 'white';
        });
    });

    const form = document.getElementById('signup-form');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const usernameInput = document.getElementById('username');
        const emailInput = document.getElementById('email');
        const passwordInput = document.getElementById('password');
        const termsInput = document.getElementById('terms');

        const usernameError = document.getElementById('error-username');
        const emailError = document.getElementById('error-email');
        const passwordError = document.getElementById('error-password');
        const termsError = document.getElementById('error-terms');

        let isValid = true;

        const showError = (input, span, message) => {
            span.textContent = message;
            span.style.display = 'block';
            input.classList.add('error-border');
            isValid = false;
        };

        const clearError = (input, span) => {
            span.textContent = '';
            span.style.display = 'none';
            input.classList.remove('error-border');
        };

        if (usernameInput.value.trim() === '') {
            showError(usernameInput, usernameError, "Username is required");
        } else {
            clearError(usernameInput, usernameError);
        }

        const emailValue = emailInput.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailValue)) {
            showError(emailInput, emailError, "Enter a valid email address");
        } else {
            clearError(emailInput, emailError);
        }

        if (passwordInput.value.length < 8) {
            showError(passwordInput, passwordError, "Password must be at least 8 characters");
        } else {
            clearError(passwordInput, passwordError);
        }

        if (!termsInput.checked) {
            showError(termsInput, termsError, "You must accept the terms");
        } else {
            clearError(termsInput, termsError);
        }

        if (isValid) {
            alert("Registration successful!");
            form.reset(); 
        }
    });

    const thumbs = document.querySelectorAll('.thumb');
    const captionEl = document.getElementById('image-caption');

    const selectImage = (clickedThumb) => {
        thumbs.forEach(thumb => thumb.classList.remove('expanded'));

        clickedThumb.classList.add('expanded');

        const city = clickedThumb.getAttribute('data-city');
        captionEl.textContent = `You selected: ${city}`;
    };

    thumbs.forEach(thumb => {
        thumb.addEventListener('click', () => {
            selectImage(thumb);
        });

        thumb.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                selectImage(thumb);
            }
        });
    });
});
