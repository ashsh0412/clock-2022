const API = "402c6479f4471ed73175b1a35d6abe58";

function GeoOk(position){
    const lattitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lattitude}&lon=${longitude}&appid=${API}&units=metric`;
    fetch(URL).then(Response => Response.json()).then(date => {
        const weather = document.querySelector("#weather span:last-child");
        const city = document.querySelector("#weather span:first-child");
        city.innerText = date.name;
        weather.innerText = ` ${date.weather[0].main} / ${date.main.temp}Celcius`;
    })
};

function GeoError(){
    alert("Can't find you. Sorry");
};

navigator.geolocation.getCurrentPosition(GeoOk, GeoError);
