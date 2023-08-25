const form = document.getElementById("form")
const errorElement = document.getElementById("error")
const name = document.getElementById("name")
const email = document.getElementById("email")
const password = document.getElementById("password")
const verpass = document.getElementById("verpass")

form.addEventListener('submit', (e) => {
    let message = []
    if (name.value === '' || name.value === null){
        message.push('Name is required')
    }
    if (password.value.length >= 20){
        message.push('Password cannot be more than 20 characters')
    }
    if (password.value.length <=6){
        message.push('Password cannot be less than 6 characters')
    }
    if (password.value === "password"){
        message.push('Password cannot be password')
    }
    if (password.value != verpass.value){
        message.push('Password verification error')
    }
    if (email.value === '' || email.value === null){
        message.push('Email is required')
    }
    if (message.length > 1){
    e.preventDefault()
    errorElement.innerText = message.join('\n')
    }

})
