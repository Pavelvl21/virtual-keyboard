import getData from './utils/getData';

const handleDownArrow = (textField) => {
  const { data, splittedData } = getData(textField);
  const rowPosition = splittedData.length;
  const colPosition = splittedData[rowPosition - 1]?.length || null;
  const { length } = data
    .slice(0, rowPosition)
    .join('\n');
  const nextRowLength = data[rowPosition]?.length || null;
  const nextCursorPosition = nextRowLength <= colPosition
    ? nextRowLength + length + 1
    : colPosition + length + 1;

  textField.setSelectionRange(nextCursorPosition, nextCursorPosition);
};

export default handleDownArrow;
