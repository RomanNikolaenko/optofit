function reportWindowSize() {
    const width = document.querySelector('html').getBoundingClientRect().width.toFixed(2);
    const height = document.querySelector('html').getBoundingClientRect().height.toFixed(2);
    const heightHeader = document.querySelector('.search-popup .popup__content').getBoundingClientRect().height.toFixed(2);
    
    document.documentElement.style.setProperty('--vw', `${width}px`);
    document.documentElement.style.setProperty('--vh', `${height}px`);
    document.documentElement.style.setProperty('--height-search', `${heightHeader}px`);
}

reportWindowSize();

window.onresize = reportWindowSize;