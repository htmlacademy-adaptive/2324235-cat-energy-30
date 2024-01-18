document.querySelector('.header').classList.remove('header--nojs');
document.querySelector('.menu-nav').classList.remove('menu-nav--nojs');

document.getElementById('burger').addEventListener('click', () => {
  document.querySelector('.menu-nav__list').classList.toggle('active');
  document.querySelector('.menu-nav__toggle').classList.toggle('active');
});
