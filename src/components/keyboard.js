import keys from '../data/keys';

const board = document.createElement('section');
board.classList.add('board');

const renderKey = (name) => {
  const btn = document.createElement('button');
  btn.classList.add('key');
  btn.setAttribute('id', name);
  return btn;
};

keys.forEach((row) => {
  const keybordRow = document.createElement('div');
  keybordRow.classList.add('row');
  row.forEach((key) => {
    keybordRow.append(renderKey(key));
  });
  board.append(keybordRow);
});

const keyboard = document.createElement('section');
keyboard.classList.add('keyboard');
const textFeild = document.createElement('textarea');
textFeild.classList.add('field');
keyboard.append(textFeild, board);

export default keyboard;
