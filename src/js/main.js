/**
 * !(i)
 * Код попадает в итоговый файл, только когда вызвана функция, например FLSFunctions.spollers();
 * Или когда импортирован весь файл, например import "files/script.js";
 * Неиспользуемый код в итоговый файл не попадает.

 * Если мы хотим добавить модуль следует его раскомментировать
 */
// import MousePRLX from './libs/parallaxMouse'
import counter from './libs/counter';
import { useDynamicAdapt } from './libs/adaptive.js';

useDynamicAdapt();

import './helpers/bounding-client-rect';
import './helpers/search';
import './helpers/animation';
import './helpers/swiper';
import './helpers/YT';
import BaseHelpers from './helpers/base-helpers';

import PopupManager from './modules/popup-manager';
// import BurgerMenu from './modules/burger-menu';
// import Tabs from './modules/tabs';
import Accordion from './modules/accordion';

BaseHelpers.checkWebpSupport();

BaseHelpers.addTouchClass();

BaseHelpers.addLoadedClass();

new PopupManager();

new Accordion('.frequently-asked-questions__accordion', {
  shouldOpenAll: true, // true
  defaultOpen: [], // [0,1]
  defaultOpenAll: false,
  collapsedClass: 'open',
});

const stats = document.querySelectorAll('.data-stats__title span');
const dataStats = document.querySelector('.data-stats');

const count = (parent, stats) => {
  const options = {
    threshold: [0.3, 0.7],
  };

  let hasRun = false;

  const callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !hasRun) {
        counter(stats);
        hasRun = true;
      }
    });
  };

  const observer = new IntersectionObserver(callback, options);
  observer.observe(parent);
};

count(dataStats, stats);

const tooltip = document.querySelector('.hero .tooltip');

tooltip.addEventListener('click', () => {
  tooltip.classList.toggle('tooltip_open');
});
