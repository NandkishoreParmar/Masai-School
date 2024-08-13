const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

function renderCart() {
    const cartDiv = document.getElementById('cart-items');
    cartDiv.innerHTML = '';

    cartItems.forEach((item, index) => {
        const card = document.createElement('div');
        card.classList.add('card');

        const userName = document.createElement('h3');
        userName.innerText = item.name;

        const userEmail = document.createElement('p');
        userEmail.innerText = item.email;

        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';
        deleteButton.classList.add('delete-btn');
        deleteButton.onclick = () => deleteFromCart(index);

        card.appendChild(userName);
        card.appendChild(userEmail);
        card.appendChild(deleteButton);
        cartDiv.appendChild(card);
    });
}

function deleteFromCart(index) {
    cartItems.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cartItems));
    renderCart();
}

window.onload = renderCart;
