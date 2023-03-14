import './css/styles.css';
import debounce from 'lodash.debounce';
import { fetchCountry } from './fetchCountries';

const DEBOUNCE_DELAY = 300;

const refs = {
    formEl: document.querySelector("#search-box"),
    cardEl: document.querySelector(".country-info"),
}


const onsearchCounry = debounce(event => {
    const searchedQuery = event.target.value.trim();
    console.log(searchedQuery);

}, DEBOUNCE_DELAY);


refs.formEl.addEventListener('input', onsearchCounry)