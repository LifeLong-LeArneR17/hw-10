const BASE_URL = 'https://restcountries.com/v3.1/name/';

export const fetchCountry = country => {
    const searchParams = new URLSearchParams({
        name: country,
    });
    return fetch(`${BASE_URL}${searchParams}`).then(
        response => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        }
    );
}
