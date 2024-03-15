const personName = document.querySelector('.name');
const cityNaim = document.querySelector('.city');
const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const wind = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');
const language = window.navigator.language;

console.log(language, "===>" , typeof language);
function showWeather(){
    switch(language){
        case "ru":
        case "ru-RU":
            getWeatherWithLanguage("ru","Скорость ветра","Влажность");
                break;
        case "en":
        case "en-US":
            getWeatherWithLanguage("en","Wind speed","Humidity");
                break;             
}
async function getWeatherWithLanguage(lang,wSpeed,humid){
    if (cityNaim.value){
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityNaim.value}&lang=${lang}&appid=89216d69da117bf4268b73f2926cd1af&units=metric`);
        const data = await res.json();
        weatherIcon.className = 'weather-icon owf';
        weatherDescription.textContent = data.weather[0].description;
        temperature.textContent = `${(data.main.temp).toFixed()}°C`;
        weatherIcon.classList.add(`owf-${data.weather[0].id}`);   
        wind.textContent = `${wSpeed}:${(data.wind.speed).toFixed()}m/s`;
        humidity.textContent = `${humid}:${((data.main.humidity).toFixed())}%`
    } else {
        weatherIcon.className = 'weather-icon';
        weatherDescription.textContent = '';
        temperature.textContent = ''
        wind.innerHTML = '';
        humidity.innerHTML = '';
    }
}

}
function setLocalStorage() {
    localStorage.setItem('namePerson', personName.value);
    localStorage.setItem('nameCity', cityNaim.value);

}
function getLocalStorage() {
    if(localStorage.getItem('namePerson')){
        personName.value = localStorage.getItem('namePerson');
    }
    if(localStorage.getItem('nameCity')){
        cityNaim.value = localStorage.getItem('nameCity');
    }
    showWeather()
}
window.addEventListener('load', getLocalStorage);
window.addEventListener('beforeunload', setLocalStorage);
cityNaim.addEventListener("change", showWeather);






