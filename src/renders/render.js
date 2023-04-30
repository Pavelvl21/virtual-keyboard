import locales from '../locales/locales';
import {
  handleBackspace,
  handleDel,
  handleEnter,
  handleTab,
  hadleLeftArrow,
  hadleRightArrow,
  hadleDownArrow,
  hadleUpArrow,
} from './handleServices';



const getKey = (code, lang, isCapsLock, isShifted) => {
  const isAvalible = (coll, code) => coll.hasOwnProperty(code); // avalible symbol to shift or caps lock
  const chars = {
    ...locales[lang].keys, ...locales[lang].digits, ...locales.digits, ...locales.services,
  };
  const shifted = { ...locales[lang].keys, ...locales[lang].shifted, ...locales.shifted };
  const { keys } = locales[lang];
  const char = chars[code];
  const key = keys[code];
  const shiftedChar = shifted[code];

  if (!isCapsLock && !isShifted) {
    return char;
  }
  if (isCapsLock && isShifted) {
    return isAvalible(shifted, code) ? shiftedChar.toLowerCase() : char;
  }
  if (isCapsLock) {
    return isAvalible(keys, code) ? key.toUpperCase() : char;
  }
  if (isShifted) {
    return isAvalible(shifted, code) ? shiftedChar.toUpperCase() : char;
  }
};

const render = (state, keyboard) => {


  const textField = keyboard.querySelector('.field');
  const buttons = keyboard.querySelectorAll('.key');
  textField.focus();
  textField.scrollTop = textField.scrollHeight;

  
  const {
    pressedKey: { code }, lang, isCapsLock, isShifted, pressedKeys,
  } = state;



  buttons.forEach((btn) => {
    const key = getKey(btn.id, lang, isCapsLock, isShifted);
    btn.textContent = key;
    btn.classList.remove('active');
  });

  

  
    







  const keys = [...pressedKeys];

  keys.forEach((key) => {
    const btn = keyboard.querySelector(`#${key}`);
    btn.classList.add('active');
  });

  const { services } = locales;

  const char = getKey(code, lang, isCapsLock, isShifted) ?? '';
  const value = !services.hasOwnProperty(code) ? char : '';

  const caps = keyboard.querySelector('#CapsLock');

  isCapsLock ? caps.classList.add('higlight') : caps.classList.remove('higlight');

  const {
    selectionStart,
    selectionEnd,
  } = textField;

  textField.setRangeText(value, selectionStart, selectionEnd, 'end');

  const {
    Backspace,
    Delete,
    ArrowLeft,
    ArrowRight,
    ArrowUp,
    ArrowDown,
  } = services;

  const textServices = {
    Backspace,
    Delete,
    ArrowLeft,
    ArrowRight,
    ArrowUp,
    ArrowDown,
    Tab,
    Enter,
  };
  
  const actions = {
    Backspace: (textField) => handleBackspace(textField),
    Delete: (textField) => handleDel(textField),
    Enter: (textField) => handleEnter(textField),
    Tab: (textField) => handleTab(textField),
    ArrowLeft: (textField) => hadleLeftArrow(textField),
    ArrowRight: (textField) => hadleRightArrow(textField),
    ArrowDown: (textField) => hadleDownArrow(textField),
    ArrowUp: (textField) => hadleUpArrow(textField),
  };

  textServices.hasOwnProperty(code) ? actions[code](textField) : '';
};

export default render;
