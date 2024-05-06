import Swiper from 'swiper';
import { Autoplay, Navigation, Thumbs } from 'swiper/modules';

Swiper.use([Navigation, Autoplay, Thumbs]);

new Swiper('.catalog__swiper', {
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    clickable: true,
  },
  slidesPerView: 1,
  centeredSlides: true,
  spaceBetween: 20,
  speed: 2000,
  autoplay: {
    delay: 12000,
    disableOnInteraction: false,
  },
  breakpoints: {
    576: {
      slidesPerView: 'auto',
    },
  },
});

new Swiper('.services__swiper', {
  loop: true,
  navigation: {
    nextEl: '.services-button-next',
    prevEl: '.services-button-prev',
    clickable: true,
  },
  slidesPerView: 1,
  spaceBetween: 20,
  speed: 2000,
  autoplay: {
    delay: 12000,
    disableOnInteraction: false,
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    1400: {
      slidesPerView: 3,
    },
  },
});

new Swiper('.swiper-first', {
  loop: true,
  navigation: {
    nextEl: '.swiper-first-button-next',
    prevEl: '.swiper-first-button-prev',
    clickable: true,
  },
  slidesPerView: 1,
  spaceBetween: 100,
  speed: 2000,
  autoplay: {
    delay: 12000,
    disableOnInteraction: false,
  },
});

new Swiper('.swiper-second', {
  loop: true,
  navigation: {
    nextEl: '.swiper-second-button-next',
    prevEl: '.swiper-second-button-prev',
    clickable: true,
  },
  slidesPerView: 1,
  spaceBetween: 100,
  speed: 2000,
  autoplay: {
    delay: 11900,
    disableOnInteraction: false,
  },
});

new Swiper('.company-in-persons__wrapper', {
  loop: true,
  navigation: {
    nextEl: '.company-in-persons-button-next',
    prevEl: '.company-in-persons-button-prev',
    clickable: true,
  },
  slidesPerView: 1,
  spaceBetween: 30,
  speed: 2000,
  autoplay: {
    delay: 12000,
    disableOnInteraction: false,
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
  },
});

new Swiper('.licenses__swiper', {
  loop: true,
  navigation: {
    nextEl: '.licenses__swiper-button-next',
    prevEl: '.licenses__swiper-button-prev',
    clickable: true,
  },
  slidesPerView: 1,
  spaceBetween: 30,
  speed: 2000,
  autoplay: {
    delay: 12000,
    disableOnInteraction: false,
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
  },
});

new Swiper('.reviews__swiper', {
  loop: true,
  navigation: {
    nextEl: '.reviews__swiper-button-next',
    prevEl: '.reviews__swiper-button-prev',
    clickable: true,
  },
  slidesPerView: 1,
  spaceBetween: 24,
  speed: 2000,
  autoplay: {
    delay: 12000,
    disableOnInteraction: false,
  },
  breakpoints: {
    650: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
  },
});

const swiper = new Swiper(".swiperThumb", {
  loop:true,
  freeMode: true,
  watchSlidesProgress: true,
  spaceBetween: 30,
  slidesPerView: 2,
  speed: 2000,
  breakpoints: {
    420: {
      slidesPerView: 3,
    },
  },
});

const swiper2 = new Swiper(".swiperThumb2", {
  loop:true,
  slidesPerView: 1,
  speed: 2000,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiperThumb-button-next",
    prevEl: ".swiperThumb-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});