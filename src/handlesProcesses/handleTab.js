import addSymbols from './utils/addSymbols';

const handleTab = (textField) => {
  const { selectionStart, value } = textField;
  const head = value
    .split('')
    .slice(0, selectionStart);
  const seporator = '    ';
  const cursorPosition = head.length + seporator.length;

  addSymbols(textField, cursorPosition, seporator);
};

export default handleTab;
