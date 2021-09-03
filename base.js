const form = document.querySelector('form');
const inputEmail = document.querySelector('input[type=email]');
const errorNote = document.querySelector('.error_note');
const errorCircle = document.querySelector('.error_circle');
// const error = classList.add('error');
const button = document.querySelector('button');
const allBidings = [form, inputEmail, errorCircle, errorNote]
// end of bindings

document.addEventListener('invalid', invoke());
// so the invoke function returns a function that prevents the default error message
function invoke() {
    return function (e) {
        e.preventDefault();
    }
}
button.addEventListener('click', () => {
    let inputValue = inputEmail.value.trim();
    if (!isEmail(inputValue)) {
        for (let i = 0; i < allBidings.length; i++) {
            allBidings[i].classList.add('error');
        }
    } else {
        for (let i = 0; i < allBidings.length; i++) {
            allBidings[i].classList.remove('error');
        }
    }
})
function isEmail(emai) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(emai);
}