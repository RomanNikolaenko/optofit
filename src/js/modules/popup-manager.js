import Popup from '../helpers/popup';
import Accordion from './accordion';

class PopupManager extends Popup {
  constructor(options = {}) {
    super();

    const defaultOptions = {
      isOpenClass: 'is-open',
      buttonCloseName: 'button-close',
    };

    this.options = Object.assign(defaultOptions, options);

    this.init();
    this.addEventListeners();
  }

  init() {
    this.popups.forEach((popup) => {
      popup.setAttribute('aria-hidden', 'true');
    });
  }

  addEventListeners() {
    document.addEventListener('click', this.togglePopup.bind(this));
    document.addEventListener('keydown', (e) => {
      const keyCode = e.keyCode;
      const popup = document.querySelector('.popup.is-open');

      if (keyCode == 27 && popup) {
        popup.classList.remove(this.options.isOpenClass);
        popup.setAttribute('aria-hidden', 'true');

        if (popup.querySelector(`.${this.options.buttonCloseName}`)) {
          popup
            .querySelector(`.${this.options.buttonCloseName}`)
            .setAttribute('tabindex', '-1');
        }

        this.cleanInput(popup);
        this.deleteIframe(popup);

        setTimeout(() => {
          this.toggleBodyLock(false);
        }, 400);
      }
    });
  }

  togglePopup({ target }) {
    if (target.closest('[data-type]')) {
      const popup = this.getPopupBySelector(target.dataset.type);
      this.isOpenElements.forEach((modal) => this.closePopup(modal));

      if(target.dataset.type == 'lightbox') {
        const lightboxImg = target.querySelector('img').cloneNode(true);
        popup.querySelector('.popup__body').innerHTML = '';
        popup.querySelector('.popup__body').appendChild(lightboxImg)

        this.openPopup(popup);
      } else {
        this.openPopup(popup);
      }
      this.toggleBodyLock(true);
    }

    if (
      target.hasAttribute('data-close-overlay') ||
      target.closest(`.${this.options.buttonCloseName}`)
    ) {
      this.closePopup(target.closest('[data-popup]'));
      this.cleanInput(target.closest('[data-popup]'));

      setTimeout(() => {
        this.toggleBodyLock(false);
      }, 400);
    }
  }

  getPopupBySelector(popupName) {
    return document.querySelector(`[data-popup="${popupName}"]`);
  }

  get popups() {
    return document.querySelectorAll('[data-popup]');
  }

  get isOpenElements() {
    return document.querySelectorAll(`.${this.options.isOpenClass}`);
  }

  openPopup(popup) {
    popup.scrollTop = 0;
    popup.classList.add(this.options.isOpenClass);
    popup.setAttribute('aria-hidden', 'false');
    if (popup.querySelector(`.${this.options.buttonCloseName}`)) {
      popup
        .querySelector(`.${this.options.buttonCloseName}`)
        .setAttribute('tabindex', '0');
    }

    if (popup.querySelector('.burger-popup__accordion')) {
      new Accordion('.burger-popup__accordion', {
        shouldOpenAll: true, // true
        defaultOpen: [], // [0,1]
        defaultOpenAll: true,
        collapsedClass: 'open',
      });
    }
  }

  closePopup(popup) {
    popup.classList.remove(this.options.isOpenClass);
    popup.setAttribute('aria-hidden', 'true');

    if (popup.querySelector(`.${this.options.buttonCloseName}`)) {
      popup
        .querySelector(`.${this.options.buttonCloseName}`)
        .setAttribute('tabindex', '-1');
    }

    this.deleteIframe(popup);
    this.cleanInput(popup);
  }

  cleanInput(popup) {
    const inputs = popup.querySelectorAll('input');
    const textareas = popup.querySelectorAll('textarea');
    const searchPopular = popup.querySelector('.form-search__popular');
    const searchResults = popup.querySelector('.form-search__results');

    if (inputs.length) {
      inputs.forEach((item) => {
        item.value = null;
      });
    }

    if (textareas.length) {
      textareas.forEach((item) => {
        item.value = null;
      });
    }

    if(searchPopular && searchResults) {
      searchPopular.classList.add('popular-search_hidden');
      searchResults.classList.add('popular-search_hidden');
    }
  }

  deleteIframe(popup) {
    const frame = popup.querySelector('iframe');
    if(frame) {
      popup.querySelector('iframe').remove();

      const tag = document.createElement('div');
      const parent = popup.querySelector('.popup__body');
      tag.id = 'player-2';
      parent.insertBefore(tag, parent.firstChild);
    }
  }
}

export default PopupManager;
