import getData from './utils/getData';

const renderCaretPosition = (keyboard, watchedState) => {
  const state = watchedState;
  const textarea = keyboard.querySelector('.field');
  const { splittedData } = getData(textarea);
  if (splittedData.length < 12) {
    state.caretPosition = 0;
  } else {
    state.caretPosition = (splittedData.length - 1) * 18;
  }
};

export default renderCaretPosition;
