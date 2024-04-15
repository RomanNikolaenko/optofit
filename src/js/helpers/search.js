const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const clean = document.querySelector('.form-search__clean');
const searchBtn = document.querySelector('.search__btn');

searchBtn.addEventListener('click', () => {
    searchForm.classList.add('form-search_open');
    setTimeout(()=> {
        searchInput.focus()
    },100)
})

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

searchForm.addEventListener('click', (e) => {
    if(searchForm.classList.contains('form-search_open') && e.target.hasAttribute('data-close-search')) {
        searchForm.classList.remove('form-search_open');
        searchInput.value = null;
        clean.classList.add('form-search__clean_hidden')
    }
})

document.addEventListener("keydown", (e) => {
    const keyCode = e.keyCode;
    if(keyCode == 27 && searchForm.classList.contains('form-search_open')) {
        searchForm.classList.remove('form-search_open');
        searchInput.value = null;
        clean.classList.add('form-search__clean_hidden')
    }
});