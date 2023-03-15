export const cardCountry = countryInfo => {
    return `
      <h2 class="country-name">${cardInfo.name}</h2>
      <ul class="country-info list">
        <li class="country-info-item">
            <p class="temp">Температура: ${cardInfo.main.temp}<sup>&#176;</sup></p>
        </li>
        <li class="country-info-item">
            <p class="feels-like-temp">Відчувається як: ${cardInfo.main.feels_like}<sup>&#176;</sup></p>
        </li>
        <li class="country-info-item">
            <p class="sunrise-time">Схід сонця: ${cardInfo.sys.sunrise}</p>
        </li>
        <li class="country-info-item">
            <p class="sunset-time">Захід сонця: ${cardInfo.sys.sunset}</p>
        </li>
        <li class="country-info-item">
            <p class="clouds">Хмарність: ${cardInfo.clouds.all}%</p>
        </li>
      </ul>
    ` 

}