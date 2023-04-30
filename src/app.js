import render from './renders/render';
import renderStorageLang from './renders/renderStorageLang';
import renderCaretPosition from './renders/renderCaretPosition';
import renderField from './renders/renderField';
import keyboard from './components/keyboard';
import footer from './components/footer';

const { body } = document;
body.classList.add('body');
body.append(keyboard, footer);

const board = keyboard.querySelector('.board');
const closeBtn = keyboard.querySelector('.wrapper-button');
const field = keyboard.querySelector('.wrapper');

const { lang } = localStorage.length === 0
  ? { lang: 'en' }
  : JSON.parse(localStorage.getItem('locale'));

const state = {
  lang,
  pressedKey: {},
  pressedKeys: new Set(),
  isCapsLock: false,
  isShifted: false,
  isOpen: false,
  carretPosition: 0,
};

renderField(state, field);

setTimeout(() => {
  state.isOpen = true;
  renderField(state, field);
}, 1000);

const handleClickBtn = () => {
  state.isOpen = !state.isOpen;
  renderField(state, field)
};

const handleClick = (event) => {
  const { target } = event;
  const key = target.textContent;
  const code = target.id;

  state.pressedKey = { code, key };
  const capsLock = code === 'CapsLock' && !event.repeat;

  if (capsLock) {
    state.isCapsLock = !state.isCapsLock;
  }

  const altShift = state.isShifted && code === 'AltLeft' || state.isShifted && code === 'AltRight';
  const ctrlShift = state.isShifted && code === 'ControlLeft' || state.isShifted && code === 'ControlRight';

  if (altShift || ctrlShift) {
    state.lang = state.lang === 'en' ? 'ru' : 'en';
    renderCaretPosition(state.lang);
    render(state, keyboard);
  }

  renderCaretPosition(keyboard, state)
  render(state, keyboard);
};

const handleMouseDown = (event) => {
  const { target: { id } } = event;

  if (id === 'ShiftLeft' || id === 'ShiftRight') {
    state.isShifted = !state.isShifted;
    render(state, keyboard);
  }
};

const handleMouseUp = (event) => {
  const { target: { id } } = event;

  if (id === 'ShiftLeft' || id === 'ShiftRight') {
    state.isShifted = !state.isShifted;
    render(state, keyboard);
  }
};


const handleKeyDown = (event) => {
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

  if (code) {
    state.pressedKey = { code, key };
    state.pressedKeys.add(code);
  }

  const exclusion = !event.repeat && location === 1 && !metaKey;
  const ctrlShift = ctrlKey && shiftKey && exclusion;
  const altShift = altKey && shiftKey && exclusion;

  if (ctrlShift || altShift) {
    state.lang = state.lang === 'en' ? 'ru' : 'en';
    renderStorageLang(state.lang);
  }

  const shift = shiftKey && !event.repeat && !ctrlShift && !altShift;

  if (shift) {
    state.isShifted = true;
  }

  const capsLock = code === 'CapsLock' && !event.repeat;

  if (capsLock) {
    state.isCapsLock = !state.isCapsLock;
  }

  renderCaretPosition(keyboard, state)
  render(state, keyboard);
};

const handleKeyUp = (event) => {
  const { code } = event;
  state.pressedKey = {};
  state.pressedKeys.delete(event.code);
  render(state, keyboard);

  const shiftKey = code === 'ShiftLeft' || code === 'ShiftRight';

  if (shiftKey && state.isShifted) {
    state.isShifted = false;
    render(state, keyboard);
  }
};

const app = () => {  
  closeBtn.addEventListener('click', handleClickBtn);
  board.addEventListener('click', handleClick);
  board.addEventListener('mousedown', handleMouseDown);
  board.addEventListener('mouseup', handleMouseUp);
  body.addEventListener('keydown', handleKeyDown);
  body.addEventListener('keyup', handleKeyUp);
  
  render(state, keyboard);
};

export default app;
