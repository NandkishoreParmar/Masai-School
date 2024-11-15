
function fetchData(){
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };
  
  fetch(
    "https://crud-firebase-712a1-default-rtdb.firebaseio.com/users.json",
    requestOptions
  )
    .then((response) => response.json())
    // .then(user => console.log(user))
    .then((user) => DisplayUser(user))
    .catch((error) => console.log("error", error));
  
}
fetchData()

function DisplayUser(user) {
  let users = Object.entries(user);
  console.log(users);
  document.getElementById("container").innerHTML = ""
  users.map((ele) => {
    // let [userId, user] = ele
    // console.log(userId);
    // console.log(ele[1]);
    var userId = ele[0];
    // console.log(userId);

    let name = ele[1].username;
    let email = ele[1].email;
    document.getElementById("container").innerHTML += `
        <div>
          <h1>${name}  </h1>
          <p> ${email}  </p>
          <button id="Edit" > Edit </button>
          <button id="Delete" onclick="DeleteUser('${userId}')"> Delete </button>
        </div>
        `;
  });
}

function DeleteUser(userId) {
  console.log(userId);
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    email: "john21@example.com",
    username: "JohnDoe21",
  });

  var requestOptions = {
    method: "DELETE",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch(
    `https://crud-firebase-712a1-default-rtdb.firebaseio.com/users/${userId}.json`,
    requestOptions
  )
    .then((response) => response.json())
    // .then((result) => console.log(result))
    .then((result) => {
      alert("Data Deleted successfully")
      fetchData()
    })
    .catch((error) => console.log("error", error));
   
}

