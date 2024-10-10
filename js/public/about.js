const body = document.body;

const container = document.createElement('container');
container.classList.add('container');
container.classList.add('animate__animated', 'animate__bounceIn');

const content = document.createElement('content');
content.classList.add('content');

const h1 = document.createElement('h1');
h1.textContent = 'About Us';

const p = document.createElement('p');
p.textContent = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore veniam, commodi molestiae beatae est odio libero delectus, id pariatur sed quod, quas ab? Explicabo, debitis nihil temporibus unde itaque distinctioo'    ;

const br = document.createElement('br');

const p2 = document.createElement('p');
p2.textContent = '.';

content.appendChild(h1);
content.appendChild(p);


container.appendChild(content);

body.appendChild(container);
const button = document.createElement('button');
button.textContent = 'Back';
button.onclick = function(){
    window.location.href = 'index.html';
};
container.appendChild(button);
document.body.appendChild(container);
const footer = document.createElement('footer');
footer.classList.add('animate__animated', 'animate__fadeIn');
footer.textContent = '© 2023 ItsMats';

document.body.appendChild(footer);