import locales from '../locales/locales';
import dataKeys from '../data/keys';
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
  textField.scrollTop = state.caretPosition;

  const {
    pressedKey: { code }, lang, isCapsLock, isShifted, pressedKeys,
  } = state;

  buttons.forEach((button) => {
    const btn = button;
    const key = getKey(btn.id, lang, isCapsLock, isShifted);
    btn.textContent = key;
    btn.classList.remove('active');
  });

  const keys = [...pressedKeys];
  keys.forEach((key) => {
    if (dataKeys.flat().includes(key)) {
      const btn = keyboard.querySelector(`#${key}`);
      btn.classList.add('active');
    }
  });

  const { services } = locales;
  const char = getKey(code, lang, isCapsLock, isShifted) ?? '';
  const value = !Object.hasOwn(services, code) ? char : '';
  const caps = keyboard.querySelector('#CapsLock');
  if (isCapsLock) {
    caps.classList.add('higlight');
  } else {
    caps.classList.remove('higlight');
  }

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
    Tab,
    Enter,
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
    Backspace: (field) => renderBackspace(field),
    Delete: (field) => renderDel(field),
    Enter: (field) => renderEnter(field),
    Tab: (field) => renderTab(field),
    ArrowLeft: (field) => renderLeftArrow(field),
    ArrowRight: (field) => renderRightArrow(field),
    ArrowDown: (field) => renderDownArrow(field),
    ArrowUp: (field) => renderUpArrow(field),
  };

  if (Object.hasOwn(textServices, code)) {
    actions[code](textField);
  }
};

export default render;
