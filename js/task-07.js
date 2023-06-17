const fondSizeControl = document.querySelector('#font-size-control');

const textStyle = document.querySelector('#text').style;


const changeSize = function (event) {
    textStyle.fontSize = `${event.currentTarget.value}px`;
}

fondSizeControl.addEventListener('input', changeSize);