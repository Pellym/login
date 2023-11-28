document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.getElementById('registerForm');
  
    registerForm.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const username = document.getElementById('username').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
  
      // Simulated registration (replace with actual registration logic)
      // For demo purposes, just log the registered user's details
      console.log('Username:', username);
      console.log('Email:', email);
      console.log('Password:', password);
  
      // After successful registration, you might redirect to a login page or dashboard
      // window.location.href = 'login.html';
    });
  });
  