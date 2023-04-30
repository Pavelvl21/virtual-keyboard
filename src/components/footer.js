const footer = document.createElement('footer');
footer.classList.add('footer');

const title = document.createElement('h1');
title.classList.add('title');
title.textContent = 'Windows 10 Keyboard';

const description = document.createElement('h2');
description.classList.add('description');
description.textContent = `To change the Keyboard Language press "alt" + "shift" or "ctrl" + "shift"`;

footer.append(title, description);

export default footer;
