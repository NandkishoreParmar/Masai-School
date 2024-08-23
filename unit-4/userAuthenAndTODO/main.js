// Global variables to store user information
let userAuthToken = '';
let userId = '';

// Elements
const loginForm = document.getElementById('login-form');
const notification = document.getElementById('notification');
const todosContainer = document.querySelector('.todos-container');
const fetchTodosButton = document.getElementById('fetch-todos');
const todosList = document.getElementById('todos-list');

// Function to handle login
loginForm.addEventListener('submit', async function (event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('https://json-with-auth.onrender.com/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        const data = await response.json();

        if (response.ok) {
            userAuthToken = data.token;
            userId = data.userId;

            // Store token and userId in localStorage
            localStorage.setItem('localAccessToken', userAuthToken);
            localStorage.setItem('userId', userId);

            // Display welcome notification
            notification.textContent = `Hey ${username}, welcome back!`;
            notification.style.color = 'green';

            // Show the todos container
            todosContainer.style.display = 'block';
        } else {
            notification.textContent = 'Invalid credentials. Please try again.';
            notification.style.color = 'red';
        }
    } catch (error) {
        console.error('Error during login:', error);
        notification.textContent = 'An error occurred. Please try again later.';
        notification.style.color = 'red';
    }
});

// Function to fetch todos
fetchTodosButton.addEventListener('click', async function () {
    try {
        const response = await fetch(`https://json-with-auth.onrender.com/todos?userId=${userId}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${userAuthToken}`,
            },
        });

        const todos = await response.json();

        // Display todos
        todosList.innerHTML = ''; // Clear any existing todos
        todos.forEach(todo => {
            const todoItem = document.createElement('li');
            todoItem.innerHTML = `
                <input type="checkbox" ${todo.completed ? 'checked' : ''} data-id="${todo.id}">
                ${todo.title}
            `;
            todosList.appendChild(todoItem);
        });

        // Add event listeners to checkboxes for toggling completion status
        document.querySelectorAll('#todos-list input[type="checkbox"]').forEach(checkbox => {
            checkbox.addEventListener('change', toggleTodo);
        });
    } catch (error) {
        console.error('Error fetching todos:', error);
    }
});

// Function to toggle the completion status of a todo
async function toggleTodo() {
    const todoId = this.getAttribute('data-id');
    const completed = this.checked;

    try {
        await fetch(`https://json-with-auth.onrender.com/todos/${todoId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${userAuthToken}`,
            },
            body: JSON.stringify({ completed }),
        });
    } catch (error) {
        console.error('Error toggling todo:', error);
    }
}
