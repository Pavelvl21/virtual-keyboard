const renderRightArrow = (textField) => {
  const { selectionStart, value } = textField;
  const { length } = value;
  const cursorPosition = selectionStart === length ? length : selectionStart + 1;

  textField.setSelectionRange(cursorPosition, cursorPosition);
};

export default renderRightArrow;
