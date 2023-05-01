const deleteSymbols = (field, cursorPosition) => {
  const textField = field;
  const { value } = textField;
  const text = value
    .split('')
    .filter((char, i) => char && i !== cursorPosition)
    .join('');

  textField.value = text;
  textField.setSelectionRange(cursorPosition, cursorPosition);
};

export default deleteSymbols;
