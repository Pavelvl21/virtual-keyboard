const addSymbols = (textField, cursorPosition, seporator) => {
  const { selectionStart, value } = textField;
  const arr = value.split('')
  const head = arr.slice(0, selectionStart);
  const tail = arr.slice(selectionStart);
  const text = head
    .concat(seporator)
    .concat(tail)
    .join('');

  textField.value = text;
  textField.setSelectionRange(cursorPosition, cursorPosition);
};

const deleteSymbols = (textField, cursorPosition) => {
  const { value } = textField;
  const text = value
    .split('')
    .filter((char, i) => char && i !== cursorPosition)
    .join('');

  textField.value = text;
  textField.setSelectionRange(cursorPosition, cursorPosition);
}

const getData = (textField) => {
  const { value, selectionStart } = textField;
  const data = value.split('\n');
  const splittedData = value
    .substring(0, selectionStart)
    .split('\n'); // last symbol before cursor
  return [data, splittedData];
};

const handleBackspace = (textField) => {
  const { selectionStart } = textField;
  const cursorPosition = selectionStart === 0 ? null : selectionStart - 1;
  deleteSymbols(textField, cursorPosition);
};

const handleDel = (textField) => {
  const { selectionStart } = textField;
  deleteSymbols(textField, selectionStart);
};

const handleEnter = (textField) => {
  const { selectionStart, value } = textField;
  const head = value
    .split('')
    .slice(0, selectionStart);
  const cursorPosition = head.length + 1;
  const seporator = '\n';
  addSymbols(textField, cursorPosition, seporator)

};

const handleTab = (textField) => {
  const { selectionStart, value } = textField;
  const head = value
    .split('')
    .slice(0, selectionStart);
  const seporator = '  ';
  const cursorPosition = head.length + seporator.length;

  addSymbols(textField, cursorPosition, seporator)
};

const hadleLeftArrow = (textField) => {
  const { selectionStart } = textField;
  const cursorPosition = selectionStart === 0 ? 0 : selectionStart - 1;
  textField.setSelectionRange(cursorPosition, cursorPosition);
};

const hadleRightArrow = (textField) => {
  const { selectionStart, value } = textField;
  const length = value.length;
  const cursorPosition = selectionStart === length ? length : selectionStart + 1;
  textField.setSelectionRange(cursorPosition, cursorPosition);
};

const hadleDownArrow = (textField) => {
  const [data, splittedData] = getData(textField);
  const rowPosition = splittedData.length;
  const colPosition = splittedData[rowPosition - 1]?.length || null;
  const length = data
    .slice(0, rowPosition)
    .join('\n').length; //sliced by rowPosition data length
  const nextRowLength = data[rowPosition]?.length || null;
  const nextCursorPosition = nextRowLength <= colPosition
    ? nextRowLength + length + 1
    : colPosition + length + 1;

  textField.setSelectionRange(nextCursorPosition, nextCursorPosition);
};

const hadleUpArrow = (textField) => {
  const [data, splittedData] = getData(textField);
  const rowPosition = splittedData.length - 1;
  const colPosition = splittedData[rowPosition].length;
  const length = data.slice(0, rowPosition).join('\n').length; //sliced by rowPosition data length
  const prevRowLength = data[rowPosition - 1]?.length || null;
  const nextCursorPosition = prevRowLength >= colPosition ? length - prevRowLength + colPosition : length;

  textField.setSelectionRange(nextCursorPosition, nextCursorPosition);
}

export {
  handleBackspace,
  handleDel,
  handleEnter,
  handleTab,
  hadleLeftArrow,
  hadleRightArrow,
  hadleDownArrow,
  hadleUpArrow,
};
