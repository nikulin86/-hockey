const burgerBtn = document.querySelector('.header__burger');
const burgerMemu = document.querySelector('.burger__nav');
const btnClose = document.querySelector('.burger__nav-btn')






burgerBtn.addEventListener('click', (e) => {
  e.preventDefault();
  burgerMemu.classList.add('active');
  // уюирает прокрутку
  document. body. style. overflow = "hidden" 
  if (header.classList.contains('active')) {
    hideScroll()
  } else { 
    showScroll()
  }
});


btnClose.addEventListener('click', (e) => {
  e.preventDefault();
  burgerMemu.classList.remove('active');
  // добавляет прокрутку
  document.body.style.overflow = '';
  
});


// get scrollbar width
const getScrollbarWidth = () => {
  const outer = document.createElement('div');

  outer.style.position = 'absolute';
  outer.style.top = '-9999px';
  outer.style.width = '50px';
  outer.style.height = '50px';
  outer.style.overflow = 'scroll';
  outer.style.visibility = 'hidden';


  document.body.appendChild(outer);
  const scrollBarWidth = outer.offsetWidth - outer.clientWidth;
  document.body.removeChild(outer);

  return scrollBarWidth;
}



// функции которые прячут скролл и возвращают
const hideScroll = () => {
  const scrollWidth = `${getScrollbarWidth()}px`;

  document.body.style.paddingRight = scrollWidth;
  document.body.style.overflow = 'hidden';


}

const showScroll = () => {

  document.body.style.paddingRight = '';
  document.body.style.overflow = 'visible';


}



// убирает бургер если ресайзить страницу
const resetNav = () => {
  burgerMemu.classList.remove('active');
  showScroll()
}

window.addEventListener('resize', resetNav);








// слайдер
const swiper = new Swiper('.banner__slider', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  loopedSlides: 1,
  spaceBetween: 50,
  visibilityFullFit: true,
  autoResize: true,


  // breakpoints: {
  //   640: {
  //     slidesPerView: 2,
  //     spaceBetween: 20,
  //   },
  //   768: {
  //     slidesPerView: 3,
  //     spaceBetween: 40,
  //   },
  //   1024: {
  //     slidesPerView: 4,
  //     spaceBetween: 50,
  //   },
  // },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.banner__btn-next',
    prevEl: '.banner__btn-left',
  },


  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});



const swiper_2 = new Swiper('.card__slider', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  loopedSlides: 1,
  spaceBetween: 50,
  visibilityFullFit: true,
  autoResize: true,


  // breakpoints: {
  //   640: {
  //     slidesPerView: 2,
  //     spaceBetween: 20,
  //   },
  //   768: {
  //     slidesPerView: 3,
  //     spaceBetween: 40,
  //   },
  //   1024: {
  //     slidesPerView: 4,
  //     spaceBetween: 50,
  //   },
  // },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.next-btn',
    prevEl: '.prev-btn',
  },


  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});



// header


const header = document.querySelector('.header');


const scrollChange = 1

const addClass = () => header.classList.add("header__shadow");

const removeClass = () => header.classList.remove("header__shadow");

window.addEventListener('scroll', function() { 
  scrollpos = window.scrollY;

  if (scrollpos >= scrollChange) { addClass() }
  else { removeClass() }
  
});




