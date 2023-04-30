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

export default getKey;
