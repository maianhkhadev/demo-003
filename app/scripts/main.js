const stage = document.querySelector('.stage');
const background = document.querySelector('.background');

let rotation = 0;

document.querySelector('.button_prev')
  .addEventListener('click', () => applyStyles(rotation +=90));

document.querySelector('.button_next')
  .addEventListener('click', () => applyStyles(rotation -=90));

function applyStyles() {
  background.style.filter = `hue-rotate(${rotation}deg)`;
  stage.style.transform = `rotateZ(${rotation}deg)`;
}
