import deleteSymbols from './utils/deleteSymbols';

const renderDel = (textField) => {
  const { selectionStart } = textField;

  deleteSymbols(textField, selectionStart);
};

export default renderDel;
