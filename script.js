// your javascript file
const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';
container.appendChild(content);

const redText = document.createElement('p');
redText.style.color = "red";
redText.textContent = "Hey I'm red!";
container.appendChild(redText);

const h3 = document.createElement('h3');
h3.style.color = "blue";
h3.textContent = "I'm a blue h3!";
container.appendChild(h3);

const div = document.createElement('div');
div.style.border = "1px solid black";
div.style.backgroundColor = "pink";

const h1 = document.createElement('h1');
h1.textContent = "I'm in a div";
div.appendChild(h1);

const p = document.createElement('p');
p.textContent = "ME TOO!";
div.appendChild(p);

container.appendChild(div);