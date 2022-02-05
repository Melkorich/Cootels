'use strict'


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


const swiper = new Swiper('.swiper', {
  loop: false,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },
});