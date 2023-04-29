import './assets/style.css';
import render from './renders/render';
import renderField from './renders/renderField';
import keyboard from './components/keyboard';

const { body } = document;
body.append(keyboard);

const board = keyboard.querySelector('.board');
const closeBtn = keyboard.querySelector('.wrapper-button');
const field = keyboard.querySelector('.wrapper');

const state = {
  lang: 'en',
  pressedKey: {},
  pressedKeys: new Set(),
  isCapsLock: false,
  isShifted: false,
  isOpen: true,
};

closeBtn.addEventListener('click', () => {
  state.isOpen = !state.isOpen;
  renderField(state, field)
})

body.addEventListener('keydown', (event) => {
  event.preventDefault();
  const {
    code,
    key,
    altKey,
    ctrlKey,
    shiftKey,
    location,
    metaKey,
  } = event;

  state.pressedKey = { code, key };

  const exclusion = !event.repeat && location === 1 && !metaKey;
  const ctrlShift = ctrlKey && shiftKey && exclusion;
  const altShift = altKey && shiftKey && exclusion;

  if (ctrlShift || altShift) {
    state.lang = state.lang === 'en' ? 'ru' : 'en';
  }

  const shift = shiftKey && !event.repeat && !ctrlShift && !altShift;

  if (shift) {
    state.isShifted = true;
  }

  const capsLock = code === 'CapsLock' && !event.repeat;

  if (capsLock) {
    state.isCapsLock = !state.isCapsLock;
  }

  state.pressedKeys.add(code);

  render(state, keyboard);
});

body.addEventListener('keyup', (event) => {
  const { shiftKey } = event;
  state.pressedKey = {};
  state.pressedKeys.delete(event.code);
  render(state, keyboard);

  if (!shiftKey && state.isShifted) {
    state.isShifted = false;
    render(state, keyboard);
  }
});

board.addEventListener('click', (event) => {
  const { target } = event;
  const key = target.textContent;
  const code = target.id;
  state.pressedKey = { code, key };
  const capsLock = code === 'CapsLock' && !event.repeat;

  if (capsLock) {
    state.isCapsLock = !state.isCapsLock;
  }

  render(state, keyboard);
});

board.addEventListener('mousedown', (event) => {
  const { target: { id } } = event;
  if (id === 'ShiftLeft' || id === 'ShiftRight') {
    state.isShifted = !state.isShifted;
    render(state, keyboard);
  }
});

board.addEventListener('mouseup', (event) => {
  const { target: { id } } = event;

  if (id === 'ShiftLeft' || id === 'ShiftRight') {
    state.isShifted = !state.isShifted;
    render(state, keyboard);
  }
});

board.addEventListener('mousedown', (e) => {
  e.preventDefault();
});

render(state, keyboard);
