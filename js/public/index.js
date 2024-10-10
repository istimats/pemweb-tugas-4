const container = document.createElement('container');
container.classList.add('container');

const content = document.createElement('content');
content.classList.add('content');


const h1 = document.createElement('h1');
h1.classList.add('animate__animated', 'animate__bounceIn');
h1.textContent = 'ItsMats';
content.appendChild(h1);

const nav = document.createElement('nav');
const ul = document.createElement('ul');
ul.classList.add('animate__animated', 'animate__bounceIn');

const aboutLink = document.createElement('a');
aboutLink.href = '/about.html';
aboutLink.textContent = 'About';

const contactLink = document.createElement('a');
contactLink.href = '/contact.html';
contactLink.textContent = 'Contact';

const projectLink = document.createElement('a');
projectLink.href = '/project';
projectLink.textContent = 'Project';

const aboutListItem = document.createElement('li');
aboutListItem.appendChild(aboutLink);

const contactListItem = document.createElement('li');
contactListItem.appendChild(contactLink);

const projectListItem = document.createElement('li');
projectListItem.appendChild(projectLink);

ul.appendChild(aboutListItem);
ul.appendChild(contactListItem);
ul.appendChild(projectListItem);

nav.appendChild(ul);

content.appendChild(nav);

container.appendChild(content);

document.body.appendChild(container);
const footer = document.createElement('footer');
footer.classList.add('animate__animated', 'animate__fadeIn');
footer.textContent = '© 2023 ItsMats';

document.body.appendChild(footer);
