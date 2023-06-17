const counterValue = document.querySelector('#value');


const decrementBtn = document.querySelector('[data-action="decrement"]');


decrementBtn.addEventListener('click', () => {
    counterValue.textContent = Number.parseInt(counterValue.textContent) - 1;
})


const incrementBtn = document.querySelector('[data-action="increment"]');

incrementBtn.addEventListener('click', () => {
    counterValue.textContent = Number.parseInt(counterValue.textContent) + 1;
})