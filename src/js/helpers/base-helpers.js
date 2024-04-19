import MobileChecker from './mobile-checker';

class BaseHelpers {
  static html = document.documentElement;
  static header = document.querySelector('.header');
  static firstScreen = document.querySelector('[data-observ]');

  /**
   * Проверка браузера на поддержку .webp изображений
   * (i) необходимо для корректного отображения webp из css
   * */
  static checkWebpSupport() {
    /** Проверка поддержки webp */
    const testWebp = (callback) => {
      const webP = new Image();

      webP.onload = webP.onerror = () => callback(webP.height === 2);
      webP.src =
        'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
    };

    /** Добавление класса _webp или _no-webp для HTML */
    testWebp((support) => {
      const className = support ? 'webp' : 'no-webp';
      BaseHelpers.html.classList.add(className);
    });
  }

  /**
   * Добавление класса touch для HTML если браузер мобильный
   * */
  static addTouchClass() {
    if (MobileChecker.isAny) {
      BaseHelpers.html.classList.add('touch');
    }
  }

  /**
   * Добавление loaded для HTML после полной загрузки страницы
   * */
  static addLoadedClass() {
    window.addEventListener('load', () => {
      setTimeout(() => {
        BaseHelpers.html.classList.add('loaded');
      }, 0);
    });
  }
}

export default BaseHelpers;
