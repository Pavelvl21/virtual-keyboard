import ru from './ru';
import en from './en';

const locales = {
  en,
  ru,
  services: {
    AltRight: 'alt',
    ControlRight: 'ctrl',
    Backspace: '',
    Enter: '',
    ShiftRight: '',
    ArrowLeft: '',
    ArrowRight: '',
    ArrowUp: '',
    ArrowDown: '',
    CapsLock: 'caps lock',
    ShiftLeft: '',
    ControlLeft: 'ctrl',
    MetaLeft: '',
    AltLeft: 'alt',
    Tab: '',
    Delete: 'del',
  },
  digits: {
    Digit1: '1',
    Digit5: '5',
    Digit8: '8',
    Digit9: '9',
    Digit0: '0',
    Minus: '-',
    Equal: '=',
    Space: ' ',
  },
  shifted: {
    Digit1: '!',
    Digit5: '%',
    Digit8: '*',
    Digit9: '(',
    Digit0: ')',
    Minus: '_',
    Equal: '+',
  },
};

export default locales;
