const body = document.querySelector('body');
console.log(body);

const h1 = document.querySelector('h1');
console.log(h1);

h1.textContent = 'This is a worksop about the DOM';
h1.style.backgroundColor = 'lime';
h1.style.color = 'rebeccapurple';

const image = document.querySelector('img');
image.src =
  'https://media.australian.museum/media/dd/images/gold_striped_earwig.width-1200.5a25695.jpg';
image.alt = 'Pictue of a earwig';
image.style.borderRadius = '30px';
image.style.border = '10px dashed black';
