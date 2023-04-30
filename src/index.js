import './assets/style.css';
import render from './renders/render';
import handleField from './handlesProcesses/handleField';
import keyboard from './components/keyboard';
import footer from './components/footer';

import getData from './handlesProcesses/utils/getData';


const { body } = document;
body.classList.add('body');
body.append(keyboard, footer);

const board = keyboard.querySelector('.board');
const closeBtn = keyboard.querySelector('.wrapper-button');
const field = keyboard.querySelector('.wrapper');


const setCarret = (keyboard, state) => {
  const textarea = keyboard.querySelector('.field');
  const { splittedData } = getData(textarea);
  state.carretPosition = (splittedData.length - 1) * 18;
} 

const setLang = (lang) => {
  const locale = { lang };
  localStorage.setItem('locale', JSON.stringify(locale));
};


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



handleField(state, field)
setTimeout(() => {
  state.isOpen = true;
  handleField(state, field);
}, 1000);

closeBtn.addEventListener('click', () => {
  state.isOpen = !state.isOpen;
  handleField(state, field)
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
  
  if (code) {
    state.pressedKey = { code, key };
    state.pressedKeys.add(code);
  }

  

  const exclusion = !event.repeat && location === 1 && !metaKey;
  const ctrlShift = ctrlKey && shiftKey && exclusion;
  const altShift = altKey && shiftKey && exclusion;

  if (ctrlShift || altShift) {
    state.lang = state.lang === 'en' ? 'ru' : 'en';
    setLang(state.lang);
  }

  const shift = shiftKey && !event.repeat && !ctrlShift && !altShift;

  if (shift) {
    state.isShifted = true;
  }

  const capsLock = code === 'CapsLock' && !event.repeat;

  if (capsLock) {
    state.isCapsLock = !state.isCapsLock;
  }

  
  setCarret(keyboard, state)
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

  const altShift = state.isShifted && code === 'AltLeft' || state.isShifted && code === 'AltRight';
  const ctrlShift = state.isShifted && code === 'ControlLeft' || state.isShifted && code === 'ControlRight';

  if (altShift || ctrlShift) {
   
    state.lang = state.lang === 'en' ? 'ru' : 'en';
    setLang(state.lang);
    render(state, keyboard);
  }

  
  setCarret(keyboard, state)
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
;
render(state, keyboard);
