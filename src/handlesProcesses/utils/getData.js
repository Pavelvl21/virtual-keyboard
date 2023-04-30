const getData = (textField) => {
  const { value, selectionStart } = textField;
  const data = value.split('\n');
  const splittedData = value
    .substring(0, selectionStart)
    .split('\n'); // last symbol before cursor
  return { data, splittedData };
};

export default getData;
