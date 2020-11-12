//ハンバーガーメニュー記述
function toggleNav() {
  let body = document.body;
  let hamburger = document.getElementById('js_hamburger');
  let nav = document.getElementById('hamnav');

  hamburger.addEventListener('click', function () {
    body.classList.toggle('nav_open');
  });
  nav.addEventListener('click', function () {
    body.classList.remove('nav_open');
  });
}
toggleNav();