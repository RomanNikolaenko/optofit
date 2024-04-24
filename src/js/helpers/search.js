const searchInput = document.getElementById('search-input');
const clean = document.querySelector('.form-search__clean');
const searchPopular = document.querySelector('.form-search__popular');
const searchResults = document.querySelector('.form-search__results');

searchInput.addEventListener('focus', (e) => {
  clean.classList.add('form-search__clean_hidden');
  searchPopular.classList.remove('popular-search_hidden');
  searchResults.classList.add('popular-search_hidden');
});

searchInput.addEventListener('blur', (e) => {
  if(!e.target.value) {
    clean.classList.add('form-search__clean_hidden');
    searchPopular.classList.add('popular-search_hidden');
    searchResults.classList.add('popular-search_hidden');
  }
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
