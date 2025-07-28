document.addEventListener('DOMContentLoaded', function() {
   
    const signupForm = document.querySelector('.signup-form');
    
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const password = this.querySelector('input[name="password"]');
            const confirmPassword = this.querySelector('input[name="confirm_password"]');
            
           
            if (password.value !== confirmPassword.value) {
                confirmPassword.classList.add('invalid');
                confirmPassword.nextElementSibling.textContent = 'Passwords do not match';
                confirmPassword.nextElementSibling.style.display = 'block';
                return;
            }
            
           
            alert('Signup successful! Redirecting to home page...');
            window.location.href = 'index.html';
        });
    }
    
   
    const passwordInputs = document.querySelectorAll('input[type="password"]');
    passwordInputs.forEach(input => {
        input.addEventListener('input', function() {
            if (this.classList.contains('invalid')) {
                this.classList.remove('invalid');
                this.nextElementSibling.style.display = 'none';
            }
        });
    });
});