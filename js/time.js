const showtime = document.querySelector('.time');
const showDate = document.querySelector('.date');
const greeting = document.querySelector('.greeting');
const naim = document.querySelector('.name');
const city = document.querySelector('.city');



const showGreetinUS = ['Good morning', 'Good afternoon','Good evening','Good night']
const showGreetingRU = ['Доброе утро', 'Добрый день','Добрый вечер','Доброй ночи']
const localLanguage = window.navigator.language;

const options = {
    weekday: "long",
    month: "long",
    day: "numeric",
}
function getTime() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    showtime.innerText = 
        `${hours < 10 ? `0${hours}` : hours}:${
            minutes < 10 ? `0${minutes}` : minutes}:${
                seconds < 10 ? `0${seconds}` : seconds}`
}
function showTimeInterval() {
    getTime();
    setInterval(getTime, 1000);
};
showTimeInterval()

function getDate(language){
    const date = new Date();
    showDate.innerText = date.toLocaleDateString(language, options);
}
function getGreeting(greetings){
    const date = new Date();
    const hours = date.getHours();
    greeting.innerText = `${ (hours >= 6 && hours < 12) ? `${greetings[0]}`
                           : (hours >= 12 && hours < 18) ? `${greetings[1]}`
                           : (hours >= 18 && hours < 24) ? `${greetings[2]}`
                           : `${greetings[3]}`}`
}
function placeholderInput(language){
    switch(language){
        case ("ru-RU"):
            naim.placeholder = "[Введите имя]";
            city.placeholder = "[Введите город]";
                break;
        case ("en-US"):
            naim.placeholder = "[Enter name]";
            city.placeholder = "[Enter city]";
                break;
                        
    }
}

function DateGreeting(){
    switch(localLanguage){
        case ("ru-RU"):
        case ("ru"): 
            getDate("ru-RU");
            getGreeting(showGreetingRU);
            placeholderInput("ru-RU")
                break;
        case ("en-US"):
        case ("en"):   
            getDate("en-US");
            getGreeting(showGreetinUS);
            placeholderInput("en-US")
                break;   
    }

}
DateGreeting()

function showDateGreeting(){
    DateGreeting()
    setInterval(DateGreeting, 60000);
}
showDateGreeting()