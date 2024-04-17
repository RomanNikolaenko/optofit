const searchInput = document.getElementById('search-input');
const clean = document.querySelector('.form-search__clean');
const searchBtn = document.querySelector('.search__btn');
const searchPopular = document.querySelector('.form-search__popular');
const searchResults = document.querySelector('.form-search__results');

searchBtn.addEventListener('click', () => {
  setTimeout(() => {
    searchInput.focus();
  }, 200);
});

searchInput.addEventListener('input', (e) => {
  if (e.target.value) {
    clean.classList.remove('form-search__clean_hidden');
    searchPopular.classList.add('popular-search_hidden');
    searchResults.classList.remove('popular-search_hidden');
  } else {
    clean.classList.add('form-search__clean_hidden');
    searchPopular.classList.remove('popular-search_hidden');
    searchResults.classList.add('popular-search_hidden');
  }
});

clean.addEventListener('click', () => {
  searchInput.value = null;
  searchInput.focus();
  clean.classList.add('form-search__clean_hidden');
  searchPopular.classList.remove('popular-search_hidden');
  searchResults.classList.add('popular-search_hidden');
});
