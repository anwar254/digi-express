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
                eu.innerHTML += `<li><img src="${europe[i].flag}" alt="Argentina" width="16" height="11">&nbsp;<a href="">${europe[i].name}</a></li>`
            }

            const americas = data.filter(dt => {
                return dt.region == "Americas";
            })

            for (let i in americas){
                amer.innerHTML += `<li><img src="${americas[i].flag}" alt="Argentina" width="16" height="11">&nbsp;<a href="">${americas[i].name}</a></li>`
            }

            const africa = data.filter(dt => {
                return dt.region == "Africa";
            })

            for (let i in africa){
                afr.innerHTML += `<li><img src="${africa[i].flag}" alt="Argentina" width="16" height="11">&nbsp;<a href="">${africa[i].name}</a></li>`
            }

            const asia = data.filter(dt => {
                return dt.region == "Asia";
            })

            for (let i in asia){
                asia.innerHTML += `<li><img src="${asia[i].flag}" alt="Argentina" width="16" height="11">&nbsp;<a href="">${asia[i].name}</a></li>`
            }
        }
    )
    .catch(err => console.log(err))