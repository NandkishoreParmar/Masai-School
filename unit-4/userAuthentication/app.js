document.getElementById('login-form').addEventListener('submit', async function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    try {
        const response = await fetch('https://user-authentication-f9b4a-default-rtdb.firebaseio.com/users.json');
        const users = await response.json();
        console.log(users);
        
        const user = users.find(user => user.username === username && user.password === password);
            console.log(user.username);
            
        if (user) {
            alert('Login successful!');
            // Redirect to dashboard or another page
            // window.location.href = 'dashboard.html';
        } else {
            errorMessage.textContent = 'Invalid credentials. Please try again.';
        }
    } catch (error) {
        errorMessage.textContent = 'An error occurred. Please try again later.';
    }
});
