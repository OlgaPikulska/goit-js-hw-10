import './css/styles.css';

const DEBOUNCE_DELAY = 300;

const searchBox = document.querySelector("#search-box");
const countryList = document.querySelector(".country-list")
const countryInfo = document.querySelector(".country-info")

searchBox.addEventListener("input", () => {
    fetchCountries(name).then((country) => renderCountryList(countries)).catch((error) => console.log(error));

})

function fetchCountries(name) {
    return fetch("https://restcountries.com/v2/{service}?fields={field},{field},{field}").then(
          (response) => {
            if (!response.ok) {
              throw new Error(response.status);
            }
            return response.json();
          }
        );
}


function renderCountryList(countries) {
    const markup = countries.map((country) => {
        return `<li><p>${country.name.official}</p></li>`
    }).join("");
    countryList.innerHTML = markup;
}