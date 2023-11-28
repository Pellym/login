document.addEventListener('DOMContentLoaded', function() {
    const forgotPasswordForm = document.getElementById('forgotPasswordForm');
  
    // Event listener for form submission
    forgotPasswordForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent default form submission
  
      // Get the entered email for password reset
      const email = document.getElementById('emailInput').value;
  
      // Perform client-side validation (basic email format check)
      if (validateEmail(email)) {
        // Make an API request to trigger password reset
        resetPasswordRequest(email);
      } else {
        alert('Please enter a valid email address.');
      }
    });
  
    // Function to validate email format (basic check)
    function validateEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
  
    // Function to make API request for password reset
    function resetPasswordRequest(email) {
      // Replace 'https://your-api-endpoint/reset-password' with your actual API endpoint
      fetch('https://your-api-endpoint/reset-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: email })
      })
      .then(response => {
        if (response.ok) {
          // Password reset initiated successfully
          return response.json(); // You might receive a success message or data from the server
        }
        throw new Error('Failed to initiate password reset.'); // Handle error if request fails
      })
      .then(data => {
        // Display success message or handle the server response
        alert('Password reset initiated successfully. Check your email for instructions.');
        // You might redirect the user to a confirmation page or homepage
        // window.location.href = 'confirmation.html';
      })
      .catch(error => {
        // Handle any errors (e.g., server error, network issue)
        alert('An error occurred. Please try again later.');
        console.error('Password reset request failed:', error);
      });
    }
  });
  