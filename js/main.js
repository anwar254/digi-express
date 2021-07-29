const countrySelect = document.querySelector('#country-select');
const countryFlag = document.querySelector('.country-flag');

fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(
        data => {
            countryFlag.innerHTML = ""
            for (let i = 0; i < data.length; i++){
                countryFlag.innerHTML = `<img src=${data[i].flag} alt='${data[0].name}-flag'>`
                countrySelect.innerHTML += `<option value="">${data[i].name}</option>`
            }
        }
    )
    .catch(err => console.log(err))