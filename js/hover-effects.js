
const listenerAddElementClass = (element1,classElement1, element2,classElement2) => (event) =>{
    element1.classList.add(classElement1);
    element2.classList.add(classElement2);
}
const listenerRemoveElementClass = (element1,classElement1, element2,classElement2) => (event) =>{
    element1.classList.remove(classElement1);
    element2.classList.remove(classElement2);
}            
const listenerAddAllElementClass = (element1,classElement1, element2,classElement2) => (event) =>{
    element1.forEach(element => {
        element.classList.add(classElement1);
    });
    if (element2){
        element2.classList.add(classElement2);
    };
    
}
const listenerRemoveAllElementClass = (element1,classElement1, element2,classElement2) => (event) =>{
    element1.forEach(element => {
        element.classList.remove(classElement1);
    });
    if (element2){
        element2.classList.remove(classElement2);
    };
} 
                            // Hero Menu Button
const heroButton = document.querySelector('.buttom_menu_hero');
const heroButtonMenuText = document.querySelector('.hero_menu_text');
const heroMenuheroCoffeeCupIco = document.querySelector('.coffee_cup_ico');
heroButton.addEventListener('mouseover', listenerAddElementClass(heroButtonMenuText,'hero_menu_left', heroMenuheroCoffeeCupIco,'coffee_cup_opacity'));
heroButton.addEventListener('mouseout', listenerRemoveElementClass( heroButtonMenuText,'hero_menu_left', heroMenuheroCoffeeCupIco,'coffee_cup_opacity'));

                          // left hero buttom
const favoriteLeftButton = document.querySelector(".left_coffee_bottun");
const favoriteSvgLeftBackground =  document.querySelectorAll('.hero_buttomFill')[0];
const favoriteSvgLeftArrow = document.querySelectorAll('.hero_buttomSvg')[0];
favoriteLeftButton.addEventListener('mouseover', listenerAddElementClass(favoriteSvgLeftBackground,'fill_dark', favoriteSvgLeftArrow,'stroke_light'));
favoriteLeftButton.addEventListener('mouseout', listenerRemoveElementClass(favoriteSvgLeftBackground,'fill_dark', favoriteSvgLeftArrow,'stroke_light'));

                          // right hero buttom 
const favoriteRightButton = document.querySelector(".right_coffee_bottun");
const favoriteSvgBackground =  document.querySelectorAll('.hero_buttomFill')[1];
const favoriteSvgArrow = document.querySelectorAll('.hero_buttomSvg')[1];
favoriteRightButton.addEventListener('mouseover', listenerAddElementClass(favoriteSvgBackground,'fill_dark', favoriteSvgArrow,'stroke_light'));
favoriteRightButton.addEventListener('mouseout', listenerRemoveElementClass(favoriteSvgBackground,'fill_dark', favoriteSvgArrow,'stroke_light'));

                          //App bottum 

document.querySelector('.mobile_app_store').
addEventListener('mouseover', listenerAddAllElementClass( document.querySelectorAll('.app_icon'),'fill_light'));
document.querySelector('.mobile_app_store').
addEventListener('mouseout', listenerRemoveAllElementClass( document.querySelectorAll('.app_icon'),'fill_light'));
                        //Google bottum

document.querySelector('.mobile_google_play').
addEventListener('mouseover', listenerAddAllElementClass( document.querySelectorAll('.goog_icon'),'fill_light'));
document.querySelector('.mobile_google_play').
addEventListener('mouseout', listenerRemoveAllElementClass( document.querySelectorAll('.goog_icon'),'fill_light'));

                        // Fotter icons
// twitter
const contactTwitterButton = document.querySelector('.footer_icon_twit');
const contactTwitterIco =  document.querySelector('.footer_icon_twit');
const contactTwitterPath = document.querySelector('.footer_icon_twit path');
contactTwitterButton.addEventListener('mouseover', listenerAddElementClass(contactTwitterIco,'fill_light',contactTwitterPath,'stroke_dark'));
contactTwitterButton.addEventListener('mouseout', listenerRemoveElementClass(contactTwitterIco,'fill_light',contactTwitterPath,'stroke_dark'));
// instagram
document.querySelector('.footer_icon_inst').
addEventListener('mouseover', listenerAddAllElementClass(document.querySelectorAll('.footer_icon_inst path'),'stroke_dark', document.querySelector('.footer_icon_inst'),'fill_light'));
document.querySelector('.footer_icon_inst').
addEventListener('mouseout', listenerRemoveAllElementClass(document.querySelectorAll('.footer_icon_inst path'),'stroke_dark', document.querySelector('.footer_icon_inst'),'fill_light'));
// facebook

document.querySelector('.footer_icon_face').
addEventListener('mouseover', listenerAddElementClass(document.querySelector('.footer_icon_face'),'fill_light', document.querySelector('.footer_icon_face path'),'stroke_dark'));
document.querySelector('.footer_icon_face').
addEventListener('mouseout', listenerRemoveElementClass(document.querySelector('.footer_icon_face'),'fill_light', document.querySelector('.footer_icon_face path'),'stroke_dark'));

             // Hover for drink buttons containers
const drinkButton = document.querySelector('.menu_icons');
const coffeeMenuButton = document.querySelector('.coffee_button');
const teaMenuButton = document.querySelector('.tea_button');
const desserMenuButton = document.querySelector('.dessert_button')

drinkButton.addEventListener('mouseover', function(event){
    if (event.target.closest('.coffee_button')) {
        coffeeMenuButton.classList.add('menu_hover_boutton')
    } else if (event.target.closest('.tea_button')){
        teaMenuButton.classList.add('menu_hover_boutton');
    } else if (event.target.closest('.dessert_button')){
        desserMenuButton.classList.add('menu_hover_boutton');
    }
});

drinkButton.addEventListener('mouseout', (event) => {
    if (event.target.closest('.coffee_button')) {
        coffeeMenuButton.classList.remove('menu_hover_boutton')
    } else if (event.target.closest('.tea_button')){
        teaMenuButton.classList.remove('menu_hover_boutton');
    } else if (event.target.closest('.dessert_button')){
        desserMenuButton.classList.remove('menu_hover_boutton');
    }
});












