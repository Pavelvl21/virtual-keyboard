const setLang = (lang) => {
  const locale = { lang };
  localStorage.setItem('locale', JSON.stringify(locale));
};

export default setLang;
