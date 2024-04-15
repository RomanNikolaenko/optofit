const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const clean = document.querySelector('.form-search__clean');
const searchBtn = document.querySelector('.search__btn');

searchInput.addEventListener('input', (e) => {
    if(e.target.value) {
        clean.classList.remove('form-search__clean_hidden')
    } else {
        clean.classList.add('form-search__clean_hidden')
    }
})

clean.addEventListener('click', () => {
    searchInput.value = null;
    searchInput.focus()
    clean.classList.add('form-search__clean_hidden')
})

searchBtn.addEventListener('click', () => {
    searchForm.classList.add('form-search_open')
})

searchForm.addEventListener('click', (e) => {
    if(searchForm.classList.contains('form-search_open') && e.target.hasAttribute('data-close-search')) {
        searchForm.classList.remove('form-search_open')
    }
})