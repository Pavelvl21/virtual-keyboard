import locales from '../locales/locales';
import renderBackspace from './renderBackspace';
import renderDel from './renderDel';
import renderEnter from './renderEnter';
import renderTab from './renderTab';
import renderLeftArrow from './renderLeftArrow';
import renderRightArrow from './renderRightArrow';
import renderDownArrow from './renderDownArrow';
import renderUpArrow from './renderUpArrow';
import getKey from './utils/getKey';

const render = (state, keyboard) => {

  const textField = keyboard.querySelector('.field');
  const buttons = keyboard.querySelectorAll('.key');
  textField.focus();
  textField.scrollTop = state.carretPosition;

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
    Backspace: (textField) => renderBackspace(textField),
    Delete: (textField) => renderDel(textField),
    Enter: (textField) => renderEnter(textField),
    Tab: (textField) => renderTab(textField),
    ArrowLeft: (textField) => renderLeftArrow(textField),
    ArrowRight: (textField) => renderRightArrow(textField),
    ArrowDown: (textField) => renderDownArrow(textField),
    ArrowUp: (textField) => renderUpArrow(textField),
  };

  textServices.hasOwnProperty(code) ? actions[code](textField) : '';
};

export default render;
