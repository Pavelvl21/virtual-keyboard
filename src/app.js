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

// set default language to localStorage
const storage = JSON.parse(localStorage.getItem('locale'));
const { lang } = !storage ? { lang: 'en' } : storage;

const state = {
  lang,
  pressedKey: {},
  pressedKeys: new Set(),
  isCapsLock: false,
  isShifted: false,
  isOpen: false,
  caretPosition: 0,
};

// render the field in closed state
renderField(state, field);

// render the field which translate from keyboard backside
setTimeout(() => {
  state.isOpen = true;
  renderField(state, field);
}, 1000);

// field open/close handle
const handleClickBtn = () => {
  state.isOpen = !state.isOpen;
  renderField(state, field);
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

  renderCaretPosition(keyboard, state);
  render(state, keyboard);
};

const handleMouseDown = (event) => {
  const { target: { id } } = event;
  if (id) {
    state.pressedKeys.add(id);
  }
  const { pressedKey, pressedKeys } = state;
  const { code } = pressedKey;
  const alt = pressedKeys.has('AltLeft')
    || pressedKeys.has('AltRight')
    || code === 'AltLeft'
    || code === 'AltRight';

  const ctrl = pressedKeys.has('ControlLeft')
    || pressedKeys.has('ControlRight')
    || code === 'ControlLeft'
    || code === 'ControlRight';

  const ctrlAlt = alt && ctrl;
  if (ctrlAlt) {
    state.lang = state.lang === 'en' ? 'ru' : 'en';
    renderStorageLang(state.lang);
    render(state, keyboard);
  }

  if (id === 'ShiftLeft' || id === 'ShiftRight') {
    state.isShifted = !state.isShifted;
    render(state, keyboard);
  }
};

const handleMouseUp = (event) => {
  const { target: { id } } = event;
  if (id) {
    state.pressedKeys.delete(id);
    render(state, keyboard);
  }

  if (id === 'ShiftLeft' || id === 'ShiftRight') {
    state.isShifted = !state.isShifted;
    render(state, keyboard);
  }
};

const mouseout = ({ target: { id } }) => {
  if (id) {
    state.pressedKeys.delete(id);
    render(state, keyboard);
  }
};

const handleKeyDown = (event) => {
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
    event.preventDefault();
  }

  const { pressedKeys } = state;
  const exclusionsLocation = location === 1 || location === 2;
  const exclusion = exclusionsLocation && !metaKey && !shiftKey;
  const alt = pressedKeys.has('AltLeft') || pressedKeys.has('AltRight') || altKey;
  const ctrl = pressedKeys.has('ControlLeft') || pressedKeys.has('ControlRight') || ctrlKey;
  const ctrlAlt = !event.repeat && alt && ctrl && exclusion;
  if (ctrlAlt) {
    state.lang = state.lang === 'en' ? 'ru' : 'en';
    renderStorageLang(state.lang);
    render(state, keyboard);
  }

  const shift = shiftKey && !event.repeat;
  if (shift) {
    state.isShifted = true;
  }

  const capsLock = code === 'CapsLock' && !event.repeat;
  if (capsLock) {
    state.isCapsLock = !state.isCapsLock;
  }

  renderCaretPosition(keyboard, state);
  render(state, keyboard);
};

const handleKeyUp = (event) => {
  const { code } = event;
  state.pressedKey = {};
  state.pressedKeys.delete(code);
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
  keyboard.addEventListener('mouseout', mouseout);

  render(state, keyboard);
};

export default app;
