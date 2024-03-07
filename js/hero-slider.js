const sliderContent = document.querySelectorAll('.drinks_container')
const sliderPlace = document.querySelector('.favorite_coffee_slider')
const rightButtonSlider = document.querySelector('.right_coffee_bottun');
const leftButtonSlider = document.querySelector('.left_coffee_bottun');
const backgraundChenger = document.querySelectorAll('.radio_point');
const sliderFavoritDrink = document.querySelector('.slider');

let elem = 0;
let flag = true;

function elemItem(i){
    elem = (i + sliderContent.length) % sliderContent.length;
}
    
function hidenItem(direction){
    flag = false;
    sliderContent[elem].classList.add(direction);
    sliderContent[elem].addEventListener('animationend', function(){
        this.classList.remove('visible', direction);
    });
}

function showItem(direction){
    
    sliderContent[elem].classList.add('next', direction);
    sliderContent[elem].addEventListener('animationend', function(){
        this.classList.remove('next', direction);
        this.classList.add('visible');
        flag = true;
    });

}

function previousItem(i) {
    hidenItem('to_right');
    elemItem(i - 1);
    showItem('from_left');
}

function nextItem(i) {
    hidenItem('to_left');
    elemItem(i + 1);
    showItem('from_right');
}


const swapToLeft = () => {
    if (flag) {
        previousItem(elem);
        backgraundChenger.forEach(element => {
            element.classList.remove('backgraund_dark');
        });
        backgraundChenger[elem].classList.add('backgraund_dark');
    }

}
const swapToRight = () =>{
    if (flag) {
        nextItem(elem)
        backgraundChenger.forEach(element => {
            element.classList.remove('backgraund_dark');
    });
    backgraundChenger[elem].classList.add('backgraund_dark');
}
}
leftButtonSlider.addEventListener('click',swapToLeft);

rightButtonSlider.addEventListener('click', swapToRight);

let start = 0;
sliderFavoritDrink.addEventListener('touchstart', (event) => {
    start = event;
});
sliderFavoritDrink.addEventListener('touchmove', (event) => {
    if (event){
        (+(event.touches[0].pageX - start.touches[0].pageX) > 80)
        ? swapToLeft() :
        ((event.touches[0].pageX - start.touches[0].pageX) < -80) 
        ? swapToRight() : {}
    }
    
})
sliderFavoritDrink.addEventListener('touchend', (event) => {
    start = 0;
})
// sliderFavoritDrink.addEventListener('touchmove', (event) => {
//     if (event){
//         +(event.touches[0].pageX - event.touches[touches.lenght-1].pageX) > +event.touches[0].pageX ? swapToRight() : swapToLeft()
//     }
// })