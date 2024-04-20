import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

Swiper.use([Navigation]);

new Swiper('.swiper', {
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    clickable: true,
  },
  slidesPerView: 'auto',
  spaceBetween: 30,
  speed: 1500,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
});
