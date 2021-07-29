// const countrySelect = document.querySelector('#country-select');
// const countryFlag = document.querySelector('.country-flag');


fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(
        data => {
            const americas = data.filter(item => {
                return item.region;
            })

            console.log(americas)
            // const africa = data.filter(item => {
            //     return item.region == "Africa"
            // })

            // const europe = data.filter(item => {
            //     return item.region == "Europe"
            // })

            // const asia = data.filter(item => {
            //     return item.region == "Asia"
            // })
            // for (let i = 0; i < data.length; i++){
            //     console.log(data[i])
            //     countryFlag.innerHTML = `<p>You selected</p> <img src=${data[i].flag} alt='${data[0].name}-flag'> <p>${data[i].name}</p>`
            //     countrySelect.innerHTML += `<option value="" onclick='flagDisplay(${i})'>${data[i].name}</option>`
            // }
        }
    )
    .catch(err => console.log(err))