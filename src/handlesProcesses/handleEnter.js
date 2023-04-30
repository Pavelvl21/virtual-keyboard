import addSymbols from './utils/addSymbols';

const handleEnter = (textField) => {
  const { selectionStart, value } = textField;
  const head = value
    .split('')
    .slice(0, selectionStart);
  const cursorPosition = head.length + 1;
  const seporator = '\n';

  addSymbols(textField, cursorPosition, seporator);
};

export default handleEnter;
