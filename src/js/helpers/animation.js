const scrollItems = document.querySelectorAll('.line');

const scrollAnimation = () => {
  const windowCenter = window.innerHeight * 0.7 + window.scrollY;

  const scrollHeight = document.documentElement.scrollHeight;
  const clientHeight = document.documentElement.clientHeight;
  const height = window.scrollY + clientHeight + 300;

  scrollItems.forEach((el) => {
    const jEl = el;
    const scrollOffset = jEl.offsetTop;

    if (
      windowCenter >= scrollOffset &&
      !jEl.classList.contains('animation-block')
    ) {
      el.classList.add('animation-block');
    }
    //   else if (windowCenter < scrollOffset && jEl.classList.contains("animation-block")) {
    //     el.classList.remove('animation-block');
    //   }

    if (height >= scrollHeight) {
      el.classList.add('animation-block');
    }
  });
};

scrollAnimation();

window.addEventListener('scroll', () => {
  scrollAnimation();
});
