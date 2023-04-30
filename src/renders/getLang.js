const getLang = () => {
  const locale = localStorage.length === 0 ? { lang: 'en' } : JSON.parse(localStorage.getItem('locale'));
  return locale.lang;
};

export default getLang;
