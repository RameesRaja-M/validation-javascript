// SELECT JAVASCRIPT

const form = document.querySelector('#form')
const username = document.querySelector('#name')
const email = document.querySelector('#email')
const password = document.querySelector('#password')



// JAVASCRIPT FUNCTION CREATE

form.addEventListener('submit', (e) => {
    e.preventDefault();
    validateInputs();
})

function validateInputs() {
    const usernamevalue = username.value.trim();
    const emailvalue = email.value.trim();
    const passwordvalue = password.value.trim();

    if (usernamevalue === '') {
        seterror(username, 'Username field is Empty')
    }
    else {
        setsucces(username)
    }

    if (emailvalue === '') {
        seterror(email, 'E-mail field is Empty')
    }
    else if (validateEmail(emailvalue)) {
        seterror(email, 'Please enter a Valid Email')
    }
    else {
        setsucces(email)
    }
    if (passwordvalue === '') {
        seterror(password, 'password field is Empty')
    }
    else if (passwordvalue.length < 6) {
        seterror(password, 'Password Must be atleast 6 characters along')
    }
    else {
        setsucces(password)
    }
}

function seterror(element, message) {
    const inputgroup = element.parentElement;
    const errorelemnt = inputgroup.querySelector('.error')

    errorelemnt.innerText = message;
    inputgroup.classList.add('.error')
    inputgroup.classList.remove('.succes')
}

function setsucces(element) {
    const inputgroup = element.parentElement;
    const errorelemnt = inputgroup.querySelector('.error')

    errorelemnt.innerText = '';
    inputgroup.classList.add('.succes')
    inputgroup.classList.remove('.error')
}

const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};