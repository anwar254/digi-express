// const countrySelect = document.querySelector('#country-select');
// const countryFlag = document.querySelector('.country-flag');

window.addEventListener('scroll', e => {
    const navbar = document.querySelector('header.dge-header');
    
    if (window.scrollY == 100){
        navbar.style.position = 'fixed';
        navbar.style.zIndex = 2;
        navbar.style.backgroundColor = "#ffffff"
    }
})

const eu = document.querySelector('.europe');
const amer = document.querySelector('.americas');
const afr = document.querySelector('.africa');
const asia = document.querySelector('.asia');

eu.innerHTML = ""
amer.innerHTML = ""
afr.innerHTML = ""
asia.innerHTML = ""

fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(
        data => {
            const europe = data.filter(dt => {
                return dt.region == "Europe";
            })
            for (let i in europe){
                eu.innerHTML += `<li><img src="${europe[i].flag}" alt="Argentina" width="16" height="11">&nbsp;<a href="../pages/services.html">${europe[i].name}</a></li>`
            }

            const americas = data.filter(dt => {
                return dt.region == "Americas";
            })

            for (let i in americas){
                amer.innerHTML += `<li><img src="${americas[i].flag}" alt="Argentina" width="16" height="11">&nbsp;<a href="../pages/services.html">${americas[i].name}</a></li>`
            }

            const africa = data.filter(dt => {
                return dt.region == "Africa";
            })

            for (let i in africa){
                afr.innerHTML += `<li><img src="${africa[i].flag}" alt="Argentina" width="16" height="11">&nbsp;<a href="../pages/services.html">${africa[i].name}</a></li>`
            }

            const asia = data.filter(dt => {
                return dt.region == "Asia";
            })

            for (let i in asia){
                asia.innerHTML += `<li><img src="${asia[i].flag}" alt="Argentina" width="16" height="11">&nbsp;<a href="../pages/services.html">${asia[i].name}</a></li>`
            }
        }
    )
    .catch(err => console.log(err))


    