const body = document.body;

const content = document.createElement('content');
content.classList.add('content');
content.classList.add('animate__animated', 'animate__bounceIn');
body.appendChild(content);

const h1 = document.createElement('h1');
h1.textContent = 'Contact';
content.appendChild(h1);
const ul = document.createElement('ul');
content.appendChild(ul);

const instagramLink = document.createElement('li');
const instagramIcon = document.createElement('ion-icon');
instagramIcon.name = "logo-instagram";
const instagramA = document.createElement('a');
instagramA.href = 'https://www.instagram.com/hikmattullohm/';
instagramA.textContent = 'Instagram';
instagramLink.appendChild(instagramIcon);
instagramLink.appendChild(instagramA);
ul.appendChild(instagramLink);

const githubLink = document.createElement('li');
const githubIcon = document.createElement('ion-icon');
githubIcon.name = "logo-github";
const githubA = document.createElement('a');
githubA.href = 'https://github.com/istimats';
githubA.textContent = 'Github';
githubLink.appendChild(githubIcon);
githubLink.appendChild(githubA);
ul.appendChild(githubLink);

const emailLink = document.createElement('li');
const emailIcon = document.createElement('ion-icon');
emailIcon.name = "mail-outline";
const emailA = document.createElement('a');
emailA.href = 'mailto:anakyanba367@gmail.com';
emailA.textContent = 'email';
emailLink.appendChild(emailIcon);
emailLink.appendChild(emailA);
ul.appendChild(emailLink);

const button = document.createElement('button');
button.textContent = 'Back';
button.onclick = function(){
    window.location.href = 'index.html';
};
button.classList.add('animate__animated', 'animate__bounceIn')
body.appendChild(button);
