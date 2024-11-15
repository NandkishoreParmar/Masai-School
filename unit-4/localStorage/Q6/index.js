const users =  [
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
    },
    {
      id: 2,
      name: "Ervin Howell",
      username: "Antonette",
      email: "Shanna@melissa.tv",
    },
    {
      id: 3,
      name: "Clementine Bauch",
      username: "Samantha",
      email: "Nathan@yesenia.net",
    },
    {
      id: 4,
      name: "Patricia Lebsack",
      username: "Karianne",
      email: "Julianne.OConner@kory.org",
    },
    {
      id: 5,
      name: "Chelsey Dietrich",
      username: "Kamren",
      email: "Lucio_Hettinger@annie.ca",
    },
    {
      id: 6,
      name: "Mrs. Dennis Schulist",
      username: "Leopoldo_Corkery",
      email: "Karley_Dach@jasper.info",
    },
    {
      id: 7,
      name: "Kurtis Weissnat",
      username: "Elwyn.Skiles",
      email: "Telly.Hoeger@billy.biz",
    },
    {
      id: 8,
      name: "Nicholas Runolfsdottir V",
      username: "Maxime_Nienow",
      email: "Sherwood@rosamond.me",
    },
    {
      id: 9,
      name: "Glenna Reichert",
      username: "Delphine",
      email: "Chaim_McDermott@dana.io",
    },
    {
      id: 10,
      name: "Clementina DuBuque",
      username: "Moriah.Stanton",
      email: "Rey.Padberg@karina.biz",
    },
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
  