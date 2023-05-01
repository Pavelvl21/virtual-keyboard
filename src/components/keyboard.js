import keys from '../data/keys';

const board = document.createElement('div');
board.classList.add('board');

const renderKey = (name) => {
  const btn = document.createElement('button');
  btn.classList.add('key');
  btn.setAttribute('id', name);
  return btn;
};

const renderArrows = (row, block, key) => {
  block.append(renderKey(key));
  row.append(block);
  return block;
};

keys.forEach((row) => {
  const keybordRow = document.createElement('div');
  keybordRow.classList.add('row');
  const arrows = document.createElement('div');
  arrows.classList.add('arrows');

  row.forEach((key) => {
    if (key.includes('Arrow')) {
      renderArrows(keybordRow, arrows, key);
    } else {
      keybordRow.append(renderKey(key));
    }
  });
  board.append(keybordRow);
});
const main = document.createElement('main');
main.classList.add('main');

const keyboard = document.createElement('section');
keyboard.classList.add('keyboard');

const author = document.createElement('div');
author.classList.add('author-info');
const span = document.createElement('span');
span.textContent = 'creeted by ';
const a = document.createElement('a');
a.classList.add('link');
a.setAttribute('href', 'https://github.com/Pavelvl21');
a.setAttribute('target', '_blank');
a.setAttribute('name', 'author');
a.textContent = 'Pavel Yudenka';
author.append(span, a);

const textFeild = document.createElement('textarea');
textFeild.classList.add('field');

const wrapper = document.createElement('div');
wrapper.classList.add('wrapper');
const btn = document.createElement('button');
btn.classList.add('wrapper-button');
wrapper.append(btn, textFeild);

keyboard.append(wrapper, author, board);

main.append(keyboard);

export default main;
