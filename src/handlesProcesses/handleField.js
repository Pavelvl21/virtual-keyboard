const renderField = ({ isOpen }, field) => {
  !isOpen ? field.classList.add('hidden') : field.classList.remove('hidden');
  const textField = field.querySelector('.field');
  textField.classList.toggle('hidden-field');

}

export default renderField;
