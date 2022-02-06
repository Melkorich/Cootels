'use strict'

//accordion

const accordionBtn = document.querySelectorAll('.accordion__btn');

accordionBtn.forEach(accordionBtn => {
  accordionBtn.addEventListener('click', event => {

    const currentActiveBtn = document.querySelector('.accordion__btn.active');
    if (currentActiveBtn && currentActiveBtn !== accordionBtn) {
      currentActiveBtn.classList.toggle('active');
      currentActiveBtn.nextElementSibling.style.maxHeight = 0;
    }

    accordionBtn.classList.toggle('active');
    const accordionContent = accordionBtn.nextElementSibling;

    if (accordionBtn.classList.contains('active')) {
      accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
    }
    else {
      accordionContent.style.maxHeight = 0;
    }
  });
});

//swiper slider

const swiper = new Swiper('.swiper', {
  loop: false,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },
});


//burger menu

const burger = document.querySelector('.menu__burger');
const menuList = document.querySelector('.menu__list');
const menuLink = document. querySelectorAll('.menu__link');


burger.addEventListener('click', function() {
  this.classList.toggle('active');
  menuList.classList.toggle('menu__list--active');
  document.querySelector('body').classList.toggle('no-scroll');
})


for (let i=0; i<menuLink.length; i++) {
  menuLink[i].addEventListener('click', function() {
    menuList.classList.remove('menu__list--active');
    document.querySelector('body').classList.remove('no-scroll');
    burger.classList.remove('active');
  });
}



//modal window

const modal = document.querySelector('.modal');
const modalOpen = document.querySelector('.modal-open');
const modalClose = document.querySelector('.modal-close');
const modalOverlay = document.querySelector('.modal-overlay');

const openModal = function() {
  modal.classList.remove('hidden');
  modalOverlay.classList.remove('hidden');
}

const closeModal = function() {
  modal.classList.add('hidden');
  modalOverlay.classList.add('hidden');
}

modalOpen.addEventListener('click', openModal);
modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function(e) {
  if (e.key == 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
})

