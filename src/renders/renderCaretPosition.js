import getData from './utils/getData';

const renderCaretPosition = (keyboard, watchedState) => {
  const state = watchedState;
  const textarea = keyboard.querySelector('.field');
  const { splittedData } = getData(textarea);
  state.carretPosition = (splittedData.length - 1) * 18;
};

export default renderCaretPosition;
