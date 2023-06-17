const input = document.querySelector('#validation-input');

const validationInput = Number(input.getAttribute('data-length'));



const checkInputValue = (event) => {
    if (validationInput === event.currentTarget.value.length) {
    
        if (input.classList.contains('invalid')) {
            input.classList.replace('invalid', 'valid');
        } else { input.classList.add('valid') }

} else {
        if (input.classList.contains('valid')) {
            input.classList.replace('valid', 'invalid');
        } else { input.classList.add('invalid') }
}
}

input.addEventListener('blur', checkInputValue);
