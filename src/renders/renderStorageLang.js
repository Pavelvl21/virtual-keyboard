const renderStorageLang = (lang) => {
  const locale = { lang };
  localStorage.setItem('locale', JSON.stringify(locale));
};

export default renderStorageLang;
