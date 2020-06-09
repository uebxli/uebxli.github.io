let logo = document.getElementById('logo');
let head = document.getElementById('head');

let classRemove = function (mid, rc) {
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
   } else {
      classRemove(logo, 'small_logo');
      logo.classList.add('large_logo');

      classRemove(head, 'headback');
   }
};

let navOne = document.getElementById('one');
let navTwo = document.getElementById('two');
let navThr = document.getElementById('three');

let uebxli = document.getElementById('uebxli');
let uebxliY = uebxli.getBoundingClientRect().top;
console.log('uebxliY:' + uebxliY);

let plo = document.getElementById('plo');
let ploY = plo.getBoundingClientRect().top;
console.log('ploY:' + ploY);

let need = document.getElementById('need');
let needY = need.getBoundingClientRect().top;
console.log('needY:' + needY);

let headScroll = (elem, elemY) => {
   elem.addEventListener('click', (e) => {
      e.preventDefault();
      window.scroll({
         top: elemY,
         behavior: 'smooth'
      });
   });
}

headScroll(navOne, uebxliY);
headScroll(navTwo, ploY);
headScroll(navThr, needY);

logo.addEventListener('click', (e) => {
   e.preventDefault();
   window.scroll({
      top: 0,
      behavior: 'smooth'
   });
});