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
    key.includes('Arrow')
      ? renderArrows(keybordRow, arrows, key)
      : keybordRow.append(renderKey(key));
    // if (key.includes('Arrow')) {
    //   arrows.append(renderKey(key));
    //   keybordRow.append(arrows)
    // }

    // keybordRow.append(renderKey(key));
  });
  board.append(keybordRow);
});

const keyboard = document.createElement('section');
keyboard.classList.add('keyboard');

const textFeild = document.createElement('textarea');
textFeild.classList.add('field');

const wrapper = document.createElement('div');
wrapper.classList.add('wrapper');
const btn = document.createElement('button');
btn.classList.add('wrapper-button');
wrapper.append(btn, textFeild);

keyboard.append(wrapper, board);

export default keyboard;
