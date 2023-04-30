const setLang = (lang) => {
  const locale = { lang };
  localStorage.setItem('locale', JSON.stringify(locale));
  // const currentLocale = JSON.parse(localStorage.getItem('locale'));
  // state.lang = currentLocale.lang;
};

export default setLang;
