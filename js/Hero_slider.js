const sliderContent = document.querySelectorAll('.drinks_container')
const sliderPlace = document.querySelector('.favorite_coffee_slider')
const rightButtonSlider = document.querySelector('.right_coffee_bottun');
const leftButtonSlider = document.querySelector('.left_coffee_bottun');
const backgraundChenger = document.querySelectorAll('.radio_point')

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



leftButtonSlider.addEventListener('click',() => {
    if (flag) {
        previousItem(elem);
        backgraundChenger.forEach(element => {
            element.classList.remove('backgraund_dark');
        });
        backgraundChenger[elem].classList.add('backgraund_dark');
    }

});
rightButtonSlider.addEventListener('click',() => {
    if (flag) {
        nextItem(elem)
        backgraundChenger.forEach(element => {
            element.classList.remove('backgraund_dark');
        });
        backgraundChenger[elem].classList.add('backgraund_dark');
    }
});