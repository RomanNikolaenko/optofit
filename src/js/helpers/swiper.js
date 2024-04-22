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
    delay: 8000,
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
  speed: 300,
  autoplay: {
    delay: 8000,
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
