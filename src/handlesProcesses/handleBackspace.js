import deleteSymbols from './utils/deleteSymbols';

const handleBackspace = (textField) => {
  const { selectionStart } = textField;
  const cursorPosition = selectionStart === 0 ? null : selectionStart - 1;

  deleteSymbols(textField, cursorPosition);
};

export default handleBackspace;
