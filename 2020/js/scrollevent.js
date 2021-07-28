let ebrowser = window.navigator.userAgent.toLowerCase(); //ブラウザ取得
let logo = document.getElementById('logo');
let body = document.body;
let head = document.getElementById('head');
let phonehead = document.getElementById('phonehead');

//ヘッダー挙動記述
let classRemove = (mid, rc) => {
  if (mid.classList.contains(rc)) {
    mid.classList.remove(rc);
  }
};

window.onscroll = () => {
  let scroll = document.documentElement.scrollTop || document.body.scrollTop;

  if (scroll > 0) {
    classRemove(logo, 'large_logo');
    logo.classList.add('small_logo');

    head.classList.add('headback');
    phonehead.classList.add('headback');
  } else {
    classRemove(logo, 'small_logo');
    logo.classList.add('large_logo');

    classRemove(head, 'headback');
    phonehead.classList.add('headback');
  }
};

//スムーススクロール記述
//各要素取得
let navOne = document.getElementById('one');
let hamOne = document.getElementById('hamone');
let uebxli = document.getElementById('uebxli');
let navTwo = document.getElementById('two');
let hamTwo = document.getElementById('hamtwo');
let plo = document.getElementById('plo');
let navThr = document.getElementById('three');
let hamThr = document.getElementById('hamthree');
let need = document.getElementById('need');

if (ebrowser.indexOf('iphone') !== -1 || ebrowser.indexOf('ipad') !== -1) {
  let phonesmooth = (e, time, where) => {
    let eTop = e.getBoundingClientRect().top;
    let eAmt = eTop / 100;
    let curTime = 0;
    while (curTime <= time) {
      window.setTimeout(phonescroll, curTime, eAmt, where);
      curTime += time / 130;
    }
  }

  let phonescroll = (eAmt, where) => {
    if (where == "center" || where == "") window.scrollBy(0, eAmt * 2);
    if (where == "top") window.scrollBy(0, eAmt　* 2);
  }

  let phoneScroll = (elem, scrollElem, where) => {
    elem.addEventListener('click', (e) => {
      e.preventDefault();
      phonesmooth(scrollElem, 400, where);
    });
  }

  phoneScroll(navOne, uebxli, "");
  phoneScroll(hamOne, uebxli, "");
  phoneScroll(navTwo, plo, "");
  phoneScroll(hamTwo, plo, "");
  phoneScroll(navThr, need, "");
  phoneScroll(hamThr, need, "");
  phoneScroll(logo, body, "top");

} else
if (ebrowser.indexOf('safari') !== -1) {
  //ブラウザがSafariの場合
  let smooth = (e, time, where) => {
    let eTop = e.getBoundingClientRect().top;
    let eAmt = eTop / 100;
    let curTime = 0;
    while (curTime <= time) {
      window.setTimeout(scroll, curTime, eAmt, where);
      curTime += time / 100;
    }
  }

  let scroll = (eAmt, where) => {
    if (where == "center" || where == "") window.scrollBy(0, eAmt + 1);
    if (where == "top") window.scrollBy(0, eAmt);
  }

  let safariScroll = (elem, scrollElem, where) => {
    elem.addEventListener('click', (e) => {
      e.preventDefault();
      smooth(scrollElem, 275, where);
    });
  }

  safariScroll(navOne, uebxli, "");
  safariScroll(hamOne, uebxli, "");
  safariScroll(navTwo, plo, "");
  safariScroll(hamTwo, plo, "");
  safariScroll(navThr, need, "");
  safariScroll(hamThr, need, "");
  safariScroll(logo, body, "top");

} else {
  //ブラウザがそれ以外の場合
  let headScroll = (elem, elemY) => {
    elem.addEventListener('click', (e) => {
      e.preventDefault();
      window.scroll({
        top: elemY,
        behavior: 'smooth'
      });
    });
  }

  headScroll(logo, 0);

  let uebxliY = uebxli.getBoundingClientRect().top;
  headScroll(navOne, uebxliY);
  headScroll(hamOne, uebxliY);

  let ploY = plo.getBoundingClientRect().top;
  headScroll(navTwo, ploY);
  headScroll(hamTwo, ploY);

  let needY = need.getBoundingClientRect().top;
  headScroll(navThr, needY);
  headScroll(hamThr, needY);

  logo.addEventListener('click', (e) => {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  });
}

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
