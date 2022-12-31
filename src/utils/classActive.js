export const classActive = (page) => {
  const el = document.querySelector('div.Header__menu__link');
  console.log(el);
  page ? el.classList.add('active') : el.classList.remove('active');
};
