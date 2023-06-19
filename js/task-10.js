function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const createElemBtn = document.querySelector('[data-create]');
const destroyElemBtn = document.querySelector('[data-destroy]');
const input = document.querySelector('[type="number"]');
const boxes = document.querySelector('#boxes')

const elements = [];


const createBoxes = function (amount) {

  

  for (let i = 0; i < amount; i += 1){

    elements[i] = i * 10 + 30;

  }

  const elementBoxes = elements.map(element => {
    const itemElement = document.createElement('div');
    itemElement.style.height = `${element}px`;
    itemElement.style.width = `${element}px`;
    itemElement.style.backgroundColor = getRandomHexColor();
    return itemElement
  })

  console.log(elementBoxes)

  boxes.append(...elementBoxes);

}


const destroyBoxes = function () {

  boxes.innerHTML = ""

  elements.length = 0;

  input.value = '';


}


// const inputValue = input.addEventListener('input', event => event.currentTarget.value)



createElemBtn.addEventListener("click", () => createBoxes(input.value))

destroyElemBtn.addEventListener('click', destroyBoxes)




