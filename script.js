// Simulate user registration and login (this is for demonstration purposes only)
document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
  
    // Perform registration process (e.g., send data to the server)
    // For simplicity, let's just log the registration details
    console.log(`Registered: Username - ${username}, Email - ${email}`);
  });
  
  document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
  
    // Perform login process (e.g., verify credentials with the server)
    // For simplicity, let's just log the username
    console.log(`Logged In: Username - ${username}`);
  });
  
