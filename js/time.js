const showtime = document.querySelector('.time');
const showDate = document.querySelector('.date');
const greeting = document.querySelector('.greeting');

const showMonth = ['January','February','March','April','May','June','July','August','September','October','November','December'];
const showGreeting = ['Good morning', 'Good afternoon','Good evening','Good night']

const options = {
    weekday: "long",
    month: "long",
    day: "numeric",
}
const date = new Date();
console.log(date.toLocaleDateString("en-US", options));
function getTime() {
    const date = new Date();
    const month = date.getMonth()
    const weekDay = date.getDay();
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    showtime.innerText = 
        `${hours < 10 ? `0${hours}` : hours}:${
            minutes < 10 ? `0${minutes}` : minutes}:${
                seconds < 10 ? `0${seconds}` : seconds}`

    showDate.innerText = date.toLocaleDateString("en-US", options)
    greeting.innerText = `${ (hours >= 6 && hours < 12) ? `${showGreeting[0]}`
                                                    : (hours >= 12 && hours < 18) ? `${showGreeting[1]}`
                                                    : (hours >= 18 && hours < 24) ? `${showGreeting[2]}`
                                                    : `${showGreeting[3]}`}`
}
function showTimeInterval() {
    getTime();
    setInterval(getTime, 1000);
};
showTimeInterval()
