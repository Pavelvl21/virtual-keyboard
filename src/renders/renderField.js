const renderField = ({ isOpen }, field) => {
  if (isOpen) {
    field.classList.remove('hidden');
  } else {
    field.classList.add('hidden');
  }

  const textField = field.querySelector('.field');
  textField.classList.toggle('hidden-field');
};

export default renderField;
