const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients');

const items = ingredients.map(ingredient => {
  const itemElement = document.createElement('li');
  itemElement.classList.add('item');
  itemElement.textContent = ingredient;
  return itemElement
})



ingredientsList.prepend(...items);

