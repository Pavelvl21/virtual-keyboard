import deleteSymbols from './utils/deleteSymbols';

const handleDel = (textField) => {
  const { selectionStart } = textField;

  deleteSymbols(textField, selectionStart);
};

export default handleDel;
