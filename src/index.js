import './css/styles.css';

const DEBOUNCE_DELAY = 300;

const refs = {
    formEl: document.querySelector("#search-box"),
    cardEl: document.querySelector(".country-info"),
}


const onsearchCounry = event => {
    const searchedQuery = event
}


refs.formEl.addEventListener('input', onsearchCounry)