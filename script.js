let addtodobutton = document.getElementById('AddToDo');
let todocontainer = document.getElementById('todocontainer');
let inputField = document.getElementById('inputField');

addtodobutton.addEventListener('click', function(){
    var paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputField.value;
    todocontainer.appendChild(paragraph);
    inputField.value = "";
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through";
    })
    paragraph.addEventListener('dblclick', function(){
        todocontainer.removeChild(paragraph);
    })
})

const showtask = () => {
    let getLocalStorage = localStorage.getItem("data")
    const tasks = document.querySelector(".tasks");

    tasks.textContent = getLocalStorage

}

showtask()
console.log()


AddToDo.onclick = () => {
    console.log("first")
    localStorage.setItem("data", AddToDo.value)
    showtask()
}

let button = document.querySelector('.delete-btn')
button.addEventListener('click', () => {
    console.log("removeditem")
    localStorage.removeItem('data')
    showtask
})

let edit = document.querySelector('.edit-btn')
edit.addEventListener('click', () => {
    console.log("edit")
    localStorage.removeItem('data')
    showtask
})





document.getElementById("registerForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const username = document.getElementById("username")
    const password = document.getElementById("password")

    const registerButton = document.querySelector("#register-button")

    registerButton.onclick = () => {
        localStorage.setItem("username", username.value)
        localStorage.setItem("password", password.value)

        alert("User Successfully Registered")
        window.location.href = "login.html"

        console.log("User Registered")
        console.log(eachUsers)
    }
})





document.getElementById("loginForm").addEventListener("submit", (Event) => {
    Event.preventDefault();
    const username = document.getElementById("username")
    const password = document.getElementById("password")

    const loginButton = document.querySelector("#login-button")

    const storedUsername = localStorage.getItem("username")
    const storedPassword = localStorage.getItem("password")

    loginButton.onclick = () => {
        console.log("logged in")
        if(username.value === storedUsername && password.value === storedPassword) {
            alert(`login successfull, welcome ${username.value}!`)
            window.location.href = "index.html"
        }
        else { 
            alert("try again!")
        }
    }
})