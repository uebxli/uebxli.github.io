let logo = document.getElementById('logo');
let head = document.getElementById('head');

let classRemove = function (mid,rc) {
   if (mid.classList.contains(rc)) {
      mid.classList.remove(rc);
   }
};

window.onscroll = function () {
   let scroll = document.documentElement.scrollTop || document.body.scrollTop;;

   if (scroll > 0) {
      classRemove(logo,'large_logo');
      logo.classList.add('small_logo');
      
      head.classList.add('headback');
   } else {
      classRemove(logo,'small_logo');
      logo.classList.add('large_logo');
      
      classRemove(head,'headback');
      console.log(head.classList);
   }
};
