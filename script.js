const body = document.querySelector('body');
console.log(body);
body.style.backgroundColor = 'blue';

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

const p = document.createElement('p');
p.textContent = 'Random facts about earwigs';
p.style.fontSize = '2rem';
body.appendChild(p);

const ul = document.createElement('ul');
body.appendChild(ul);

const item1 = document.createElement('li');
item1.textContent =
  'Earwigs have wings, but they rarely use them. They prefer to crawl in dark, damp places, like basements and around foundations';
const item2 = document.createElement('li');
item2.textContent =
  "Earwigs are known for their large pincers, called cerci, which they use for defense and hunting. They can pinch, but they're not poisonous and they rarely break the skin";
const item3 = document.createElement('li');
item3.textContent =
  'Earwigs are omnivores that eat a variety of plants and insects, both alive and dead. They like to eat mold, flowers, leaves, and small insect pests';
const item4 = document.createElement('li');
item4.textContent =
  'Female earwigs are very protective of their eggs and young. They stay with their eggs until they hatch, and then they continue to care for them until they molt for the first time.';
const item5 = document.createElement('li');
item5.textContent =
  'There are over 1,000 species of earwigs in the world, and a little more than 20 in the United States. The most common species in the U.S. is the European earwig.';

ul.appendChild(item1);
ul.appendChild(item2);
ul.appendChild(item3);
ul.appendChild(item4);
ul.appendChild(item5);

// Stretch goal
// h1.remove();
