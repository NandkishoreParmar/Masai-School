document.getElementById('login-form').addEventListener('submit', async function(event) {
    event.preventDefault();
    
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    try {
        const response = await fetch('https://userauthentication-761e8-default-rtdb.firebaseio.com/users.json');
        const users = await response.json();
        // console.log(users.user2.username);
        // console.log(username = users.user1.username) 
         
        // users.map(element => {
        //     console.log(element);
            
        // });
        // const user = users.filter(user => user.username === username && user.password === password);
        //     console.log(user.username);
        const user = (users.user1.username === username  && users.user1.password === password  || users.user2.username === username  && users.user2.password === password)
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

// const requestOptions = {
//     method: "GET",
//     redirect: "follow"
//   };
  
//   fetch("https://userauthentication-761e8-default-rtdb.firebaseio.com/users.json", requestOptions)
//     .then((response) => response.json())
//     .then((result) => display(result))
//     .catch((error) => console.error(error));
       

// function display(result){
//     console.log(result);
    
//     console.log(result.user1.username);
    
// }
    