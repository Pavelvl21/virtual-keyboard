import locales from '../../locales/locales';

// avalible symbol to shift or caps lock
const isAvalible = (coll, code) => Object.hasOwn(coll, code);

const getKey = (code, lang, isCapsLock, isShifted) => {
  const chars = {
    ...locales[lang].keys, ...locales[lang].digits, ...locales.digits, ...locales.services,
  };
  const shifted = { ...locales[lang].keys, ...locales[lang].shifted, ...locales.shifted };
  const { keys } = locales[lang];
  const char = chars[code];
  const key = keys[code];
  const shiftedChar = shifted[code];

  if (isCapsLock && isShifted) {
    return isAvalible(shifted, code) ? shiftedChar.toLowerCase() : char;
  }
  if (isCapsLock) {
    return isAvalible(keys, code) ? key.toUpperCase() : char;
  }
  if (isShifted) {
    return isAvalible(shifted, code) ? shiftedChar.toUpperCase() : char;
  }

  return char;
};

export default getKey;
