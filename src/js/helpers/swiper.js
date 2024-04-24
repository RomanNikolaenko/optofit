import Swiper from 'swiper';
import { Autoplay, Navigation } from 'swiper/modules';

Swiper.use([Navigation, Autoplay]);

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
  speed: 3000,
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
  speed: 3000,
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
  speed: 3000,
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
  speed: 3000,
  autoplay: {
    delay: 11000,
    disableOnInteraction: false,
  },
});