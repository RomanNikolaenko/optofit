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
import YTIframe from './helpers/YT';
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

if(dataStats) {
  count(dataStats, stats);
}

// --------
const tooltip = document.querySelector('.hero__tooltip');
if(tooltip) {
  tooltip.addEventListener('click', () => {
    tooltip.classList.toggle('tooltip_open');
  });
}

const fixedBlockPhone = document.querySelector('.fixed-block__phone');
if(fixedBlockPhone) {
  fixedBlockPhone.addEventListener('click', () => {
    fixedBlockPhone.classList.toggle('open');
  });
}

const fixedBlockMessangers = document.querySelector('.fixed-block__messangers');
if(fixedBlockMessangers) {
  fixedBlockMessangers.addEventListener('click', (e) => {
    fixedBlockMessangers.classList.toggle('open');
  });
}

document.addEventListener('click', function (e) {
  if(tooltip) {
    if (!e.target.closest('.tooltip') && tooltip.classList.contains('tooltip_open')) {
      tooltip.classList.remove('tooltip_open');
    }
  }

  if(fixedBlockPhone) {
    if (!e.target.closest('.fixed-block__phone') && fixedBlockPhone.classList.contains('open')) {
      fixedBlockPhone.classList.remove('open');
    }
  }

  if(fixedBlockMessangers) {
    if (!e.target.closest('.fixed-block__messangers') && fixedBlockMessangers.classList.contains('open')) {
      fixedBlockMessangers.classList.remove('open');
    }
  }

  if(e.target.getAttribute('data-video')) {
    YTIframe(e.target);
    e.target.classList.add('hide');
  }
});

document.addEventListener('keydown', (e) => {
  const keyCode = e.keyCode;

  if (keyCode == 27) {
    if(tooltip) {
      if (!e.target.closest('.hero .tooltip') && tooltip.classList.contains('tooltip_open')) {
        tooltip.classList.remove('tooltip_open');
      }
    }
  
    if(fixedBlockPhone) {
      if (!e.target.closest('.fixed-block__phone') && fixedBlockPhone.classList.contains('open')) {
        fixedBlockPhone.classList.remove('open');
      }
    }
  
    if(fixedBlockMessangers) {
      if (!e.target.closest('.fixed-block__messangers') && fixedBlockMessangers.classList.contains('open')) {
        fixedBlockMessangers.classList.remove('open');
      }
    }
  }
});

const statsScrolling = document.querySelector('.goToVideo');
if(statsScrolling) {
  statsScrolling.addEventListener('click', () => {
    document.getElementById('creation-process')?.scrollIntoView({ behavior: 'smooth' });
  })
}
