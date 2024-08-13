const users = [
    { id: 1, name: "Leanne Graham", username: "Bret", email: "Sincere@april.biz" },
    { id: 2, name: "Ervin Howell", username: "Antonette", email: "Shanna@melissa.tv" },
    // Add the rest of the user objects
  ];
  
  // Initialize local storage data
  const storedUsers = JSON.parse(localStorage.getItem('users')) || users;
  const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
  
  function renderUsers() {
      const userCards = document.getElementById('user-cards');
      userCards.innerHTML = '';
  
      storedUsers.forEach(user => {
          const card = document.createElement('div');
          card.classList.add('card');
  
          const userName = document.createElement('h3');
          userName.innerText = user.name;
  
          const userEmail = document.createElement('p');
          userEmail.innerText = user.email;
  
          const addToCartButton = document.createElement('button');
          addToCartButton.innerText = 'Add to Cart';
          addToCartButton.onclick = () => addToCart(user);
  
          card.appendChild(userName);
          card.appendChild(userEmail);
          card.appendChild(addToCartButton);
          userCards.appendChild(card);
      });
  }
  
  function addToCart(user) {
      if (!storedCart.some(item => item.id === user.id)) {
          storedCart.push(user);
          localStorage.setItem('cart', JSON.stringify(storedCart));
      }
  }
  
  window.onload = renderUsers;
  