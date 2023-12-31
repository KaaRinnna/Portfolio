"use strict"


/* Menu */
let burger = document.querySelector('.header__menu');
let menu = document.querySelector('.header__nav');
let link = document.querySelectorAll('.header__link');

function toggleBurger() {
   burger.addEventListener('click', function () {
      burger.classList.toggle('active');
      menu.classList.toggle('active');
      document.body.classList.toggle('lock');
   });

   for (let i = 0; i < link.length; i++){
      link[i].addEventListener('click', function() {
         burger.classList.remove('active');
         menu.classList.remove('active');
         document.body.classList.remove('lock');
     });
   }
};


toggleBurger();





