/**
 * !(i)
 * Код попадает в итоговый файл, только когда вызвана функция, например FLSFunctions.spollers();
 * Или когда импортирован весь файл, например import "files/script.js";
 * Неиспользуемый код в итоговый файл не попадает.

 * Если мы хотим добавить модуль следует его раскомментировать
 */
// import MousePRLX from './libs/parallaxMouse'
import counter from './libs/counter';
// import AOS from 'aos'
// import Swiper, { Navigation, Pagination } from 'swiper';

import './helpers/bounding-client-rect';
import './helpers/search';
import './helpers/animation';

import BaseHelpers from './helpers/base-helpers';
import PopupManager from './modules/popup-manager';
// import BurgerMenu from './modules/burger-menu';
// import Tabs from './modules/tabs';
import Accordion from './modules/accordion';

BaseHelpers.checkWebpSupport();

BaseHelpers.addTouchClass();

BaseHelpers.addLoadedClass();

// BaseHelpers.headerFixed();

/**
 * Открытие/закрытие модальных окон
 * Чтобы модальное окно открывалось и закрывалось
 * На окно повешай атрибут data-popup="<название окна>"
 * На кнопку, которая вызывает окно повешай атрибут data-type="<название окна>"

 * На обертку(.popup) окна добавь атрибут '[data-close-overlay]'
 * На кнопку для закрытия окна добавь класс '.button-close'
 * */
new PopupManager();

/**
 *  Модуль для работы с меню (Бургер)
 * */
// new BurgerMenu().init();

/**
 *  Библиотека для анимаций
 *  документация: https://michalsnik.github.io/aos
 * */
// AOS.init();

/**
 * Параллакс мышей
 * */
// new MousePRLX();

// new Tabs('tabs-example', {
// 	onChange: (data) => {
// 		console.log(data);
// 	},
// });

// new Accordion('.footer__accordion', {
// 	shouldOpenAll: true, // true
// 	defaultOpen: [], // [0,1]
// 	defaultOpenAll: true,
// 	collapsedClass: 'open',
// });

const stats = document.querySelectorAll('.data-stats__title span')
const dataStats = document.querySelector('.data-stats');

const count = (parent, stats)=> {
    const options = {
        threshold: [0.3, 1],
      };
      
      let hasRun = false;
      
      const callback = (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (!hasRun) {
              counter(stats);
              hasRun = true;
            }
          }
        });
      };
      
      const observer = new IntersectionObserver(callback, options);
      observer.observe(parent);
}

count(dataStats, stats)
