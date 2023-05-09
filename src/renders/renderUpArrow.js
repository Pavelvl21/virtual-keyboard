import getData from './utils/getData';

const renderUpArrow = (textField) => {
  const { data, splittedData } = getData(textField);
  const rowPosition = splittedData.length - 1;
  const colPosition = splittedData[rowPosition].length;
  // rows length before current
  const { length } = data.slice(0, rowPosition).join('\n');
  const prevRowLength = data[rowPosition - 1]?.length || null;
  const nextCursorPosition = prevRowLength >= colPosition
    ? length - prevRowLength + colPosition
    : length;

  textField.setSelectionRange(nextCursorPosition, nextCursorPosition);
};

export default renderUpArrow;
