const users = ["ciccioGamer", "icardi", "khaby", "rocco", "anna"];
const passwords = ["ciccio1", "wandanara", "tiktok", "siffredi33" , "tatangelo"];


function toggleShowPassword() {
    const passwordBox = document.getElementById('password')
    const passwordToggler = document.getElementById('toggler')

    passwordToggler.classList.toggle('bi-eye-slash')
    passwordToggler.classList.toggle('bi-eye-fill')

    if(passwordBox.getAttribute("type") == "password") passwordBox.setAttribute("type","text")
    else passwordBox.setAttribute("type","password")
}

function signUp() {
    const alert = document.getElementById('signup-error-box')
    const username = document.getElementById('new-username').value
    const password = document.getElementById('new-password').value

    if(password.length < 6) {
        alert.innerHTML = "Password must be at least 6 characters long"
        alert.classList.add('error')
        alert.classList.remove('success')
    }
    else if (users.indexOf(username) != -1) {
        alert.innerHTML = "User already exists"
        alert.classList.add('error')
        alert.classList.remove('success')
    }
    else {
        alert.innerHTML = "Sign up successful"
        alert.classList.remove('error')
        alert.classList.add('success')
        users.push(username)
        passwords.push(password)
    }
}

function closeSignUp() {
    document.getElementById('signup-form').classList.add('d-none')
}

function openSignUp() {
    document.getElementById('signup-form').classList.remove('d-none')
}

function login() {
    const alert = document.getElementById('error-box')
    const username = document.getElementById('username').value
    const password = document.getElementById('password').value

    if(users.indexOf(username) == -1) {
        alert.innerHTML = "User not found"
        alert.classList.add('error')
        alert.classList.remove('success')
    }
    else if (passwords[users.indexOf(username)] != password) {
        alert.innerHTML = "Incorrect password"
        alert.classList.add('error')
        alert.classList.remove('success')
    }
    else {
        alert.innerHTML = "Login successful"
        alert.classList.remove('error')
        alert.classList.add('success')
    }
}