import './css/styles.css';
import debounce from 'lodash.debounce';
import {fetchCountry} from './fetchCountries';


const DEBOUNCE_DELAY = 300;

const refs = {
    formEl: document.querySelector("#search-box"),
    cardEl: document.querySelector(".country-info"),
    inputonForm: document.querySelector("#search-box"),
}


const onsearchCounry = debounce(event => {
    const searchedQuery = event.target.value.trim();
    refs.inputText = event.target.value.trim()
    fetchCountry(searchedQuery)
        .then(data => {
            console.log(data);
        renderHero(data)       
    })
}, DEBOUNCE_DELAY);



function renderHero(data) {
    const markup = data.map(country => {
        return `<li>
      <img src="${country.flags.svg}" alt="Flag of ${country.name.official
            }" width="30" hight="20">
         <b>${country.name.official}</b></p>
            <p><b>Capital</b>: ${country.capital}</p>
            <p><b>Population</b>: ${country.population}</p>
            <p><b>Languages</b>: ${Object.values(country.languages)} </p>
                </li>`;
    }).join('');
    
    refs.cardEl.innerHTML = markup;
}

    refs.formEl.addEventListener('input', onsearchCounry)