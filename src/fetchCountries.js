const BASE_URL = 'https://restcountries.com/v3.1/name/{name}';


export const fetchCountry = country => {
    const searchParams = new URLSearchParams({
        name: country,
    });
}


export const fetchCountry = country => {
    return fetch('${BASE_URL}/${searchParams}')
    response => {
        if (!response.ok) {
            throw new Error(response.status);
        }
        return response.json();
    }


    return fetch(`${BASE_URL}/data/2.5/weather?${searchParams}`).then(
        response => {
            if (!response.ok) {
                throw new Error(response.status);
            }

            return response.json();
        }
    );
};