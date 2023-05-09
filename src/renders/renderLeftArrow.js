const renderLeftArrow = (textField) => {
  const { selectionStart } = textField;
  const cursorPosition = selectionStart === 0 ? 0 : selectionStart - 1;

  textField.setSelectionRange(cursorPosition, cursorPosition);
};

export default renderLeftArrow;
