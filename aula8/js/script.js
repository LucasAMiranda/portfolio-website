const userForm = document.getElementById("userForm");
const userList = document.getElementById("userList");
let users = JSON.parse(localStorage.getItem("users")) || [];

const addUser = (name, email) => {
    const newUser = {
        name: name,
        email: email,
    };

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    displayUsers();
};

userForm.addEventListener("submit", function (event) {
    alert("Olá mundo!");
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    if (name && email) {
        addUser(name, email);
        userForm.reset();
    } else {
        alert("Por favor , coloque seu nome e email.");
    }
});

function displayUsers() {
    userList.innerHTML = ""; // Clear the existing content

    users.forEach(function (user, index) {
        const userItem = document.createElement("div");
        userItem.classList.add("user-item");
        userItem.innerHTML = `
            <strong>${user.name}</strong><br/>
            <strong>${user.email}</strong><br/>
            <button onclick="editUser(${index})">Edit User</button>
            <button onclick="deleteUser(${index})">Delete User</button>
        `;

        userList.appendChild(userItem);
    });
}

const editUser = (index) => {
    const user = users[index];
    const newName = prompt("Digite seu nome: " + user.name);
    const newEmail = prompt("Digite seu email: " + user.email);

    if (newName !== null && newEmail !== null) {
        user.name = newName;
        user.email = newEmail;
        localStorage.setItem("users", JSON.stringify(users));
        displayUsers();
    }
};

const deleteUser = (index) => {
    if (confirm("Tem certeza que deseja excluir esse usuário")) {
        users.splice(index, 1);
        localStorage.setItem("users", JSON.stringify(users));
        displayUsers();
    }
};

// Initial display of users
displayUsers();
