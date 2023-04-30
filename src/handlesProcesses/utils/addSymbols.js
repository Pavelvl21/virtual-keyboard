const addSymbols = (textField, cursorPosition, seporator) => {
  const { selectionStart, value } = textField;
  const arr = value.split('');
  const head = arr.slice(0, selectionStart);
  const tail = arr.slice(selectionStart);
  const text = head
    .concat(seporator)
    .concat(tail)
    .join('');

  textField.value = text;
  textField.setSelectionRange(cursorPosition, cursorPosition);
};

export default addSymbols;
