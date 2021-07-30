const eu = document.querySelector('.europe');
const amer = document.querySelector('.americas');

eu.innerHTML = ""
amer.innerHTML = ""

fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(
        data => {
            const europe = data.filter(dt => {
                return dt.region == "Europe";
            })
            for (let i in europe){
                console.log(europe)
                eu.innerHTML = `<li><img src="${europe[i].flag}" alt="Argentina" width="16" height="11">&nbsp;<a href="">${europe[i].name}</a></li>`
            }
        }
    )
    .catch(err => console.log(err))