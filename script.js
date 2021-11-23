
const searchBox = document.getElementById("searchBox");
const searchBtn = document.getElementById("searchBtn");
const image = document.getElementById("image");
const cityName = document.getElementById("cityName");
const temperature = document.getElementById("temperature");
const condition = document.getElementById("condition");
const api = '2c4b58a96bb542edb7741111212111';
getData('Lucknow');
function getData(city) {
    console.log("the city in getData is", city);
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `https://api.weatherapi.com/v1/current.json?key=${api}&q=${city}&aqi=yes`, true);
    xhr.onload = function () {
        if (this.status === 200) {
            let json = JSON.parse(this.responseText);
            cityName.textContent = `${json.location.name}`;
            temperature.textContent = `${json.current.temp_c} degree celsius`;
            condition.textContent = `${json.current.condition.text} `;
            image.src = `${json.current.condition.icon}`;
        }
        else {
            console.log("error");
        }
    }
    xhr.send();
}

searchBtn.addEventListener('click', () => {
    let searchVal = searchBox.value;
    console.log("the searched data is", searchVal);
    if (searchVal !== "") {
        getData(searchVal);
    }
});
