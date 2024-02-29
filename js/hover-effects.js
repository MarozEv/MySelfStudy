
              // left hero buttom
document.querySelector('.buttom_menu_hero').addEventListener('mouseover', ()=> {
    document.querySelector('.hero_menu_text').classList.add('hero_menu_left');
    document.querySelector('.coffee_cup_ico').classList.add('coffee_cup_opacity');
});

document.querySelector('.buttom_menu_hero').addEventListener('mouseout', ()=> {
    document.querySelector('.hero_menu_text').classList.remove('hero_menu_left');
    document.querySelector('.coffee_cup_ico').classList.remove('coffee_cup_opacity');
});
                          // left hero buttom
document.querySelector(".left_coffee_bottun").addEventListener('mouseover', ()=>{
    document.querySelectorAll('.hero_buttomFill')[0].classList.add('fill_dark');
    document.querySelectorAll('.hero_buttomSvg')[0].classList.add('stroke_light');
});
document.querySelector(".left_coffee_bottun").addEventListener('mouseout', ()=>{
    document.querySelectorAll('.hero_buttomFill')[0].classList.remove('fill_dark');
    document.querySelectorAll('.hero_buttomSvg')[0].classList.remove('stroke_light');
});
                          // right hero buttom 
document.querySelector('.right_coffee_bottun').addEventListener('mouseover', ()=>{
    document.querySelectorAll('.hero_buttomFill')[1].classList.add('fill_dark');
    document.querySelectorAll('.hero_buttomSvg')[1].classList.add('stroke_light');
});
document.querySelector(".right_coffee_bottun").addEventListener('mouseout', ()=>{
    document.querySelectorAll('.hero_buttomFill')[1].classList.remove('fill_dark');
    document.querySelectorAll('.hero_buttomSvg')[1].classList.remove('stroke_light');
});


                          //App bottum 
document.querySelector('.mobile_app_store').addEventListener('mouseover', () => {
    document.querySelectorAll('.app_icon').forEach(element => {
        element.classList.add('fill_light');
    });
});
document.querySelector('.mobile_app_store').addEventListener('mouseout', () => {
    document.querySelectorAll('.app_icon').forEach(element => {
        element.classList.remove('fill_light');
    });
});
                        //Google bottum
document.querySelector('.mobile_google_play').addEventListener('mouseover', () => {
    document.querySelectorAll('.goog_icon').forEach(element => {
        element.classList.add('fill_light');
    });
});
document.querySelector('.mobile_google_play').addEventListener('mouseout', () => {
    document.querySelectorAll('.goog_icon').forEach(element => {
        element.classList.remove('fill_light');
    });
});
                        // Fotter icons
// twitter
document.querySelector('.footer_icon_twit').addEventListener('mouseover', () => {
    document.querySelector('.footer_icon_twit').classList.add('fill_light');
    document.querySelector('.footer_icon_twit path').classList.add('stroke_dark');
});
document.querySelector('.footer_icon_twit').addEventListener('mouseout', () => {
    document.querySelector('.footer_icon_twit').classList.remove('fill_light');
    document.querySelector('.footer_icon_twit path').classList.remove('stroke_dark');
});
// instagram
document.querySelector('.footer_icon_inst').addEventListener('mouseover', () => {
    document.querySelector('.footer_icon_inst').classList.add('fill_light');
    document.querySelectorAll('.footer_icon_inst path').forEach(element => {
        element.classList.add('stroke_dark');
    }); 
});
document.querySelector('.footer_icon_inst').addEventListener('mouseout', () => {
    document.querySelector('.footer_icon_inst').classList.remove('fill_light');
    document.querySelectorAll('.footer_icon_inst path').forEach(element => {
        element.classList.remove('stroke_dark');
    }); 
});
// facebook
document.querySelector('.footer_icon_face').addEventListener('mouseover', () => {
    document.querySelector('.footer_icon_face').classList.add('fill_light');
    document.querySelector('.footer_icon_face path').classList.add('stroke_dark');
});
document.querySelector('.footer_icon_face').addEventListener('mouseout', () => {
    document.querySelector('.footer_icon_face').classList.remove('fill_light');
    document.querySelector('.footer_icon_face path').classList.remove('stroke_dark');
});

            //  Next Menu show

const mainFirstContent = document.querySelector('.main');
const mainSecondContent = document.querySelector('.main_container');
const fotterContent = document.querySelector('.contact');
function nextMainContent(){
    mainSecondContent.classList.add('show_block');
    mainFirstContent.classList.remove('pasity_one');
    fotterContent.classList.remove('show_block','pasity_one');
    fotterContent.classList.add('position_absolute',);
    document.querySelector('.header_menu').classList.add('header_menu_width')
    setTimeout(()=> {       
        fotterContent.classList.add('show_block');
            },10);
    setTimeout(()=> {
        mainSecondContent.classList.add('pasity_one');
        fotterContent.classList.add('pasity_one');
            },20);
    setTimeout(()=> {
        mainFirstContent.classList.remove('show_block');
        mainSecondContent.classList.add('position_inherit');
        mainSecondContent.classList.remove('position_absolute');
        
            },450);
}
function previousMainContent(){
    mainFirstContent.classList.add('show_block');
    mainSecondContent.classList.remove('position_inherit');
    fotterContent.classList.remove('pasity_one');
    document.querySelector('.header_menu').classList.remove('header_menu_width')
    setTimeout(()=> {
        mainFirstContent.classList.add('pasity_one');  
        mainSecondContent.classList.remove('pasity_one');
            },1);
    setTimeout(()=> {
        
            },2);
    setTimeout(()=> {
        fotterContent.classList.add('pasity_one');
        fotterContent.classList.remove('position_absolute');
        mainSecondContent.classList.remove('show_block');
            },450);
}

document.querySelector('.buttom_menu_hero').addEventListener('click', nextMainContent);
document.querySelector('.header_menu').addEventListener('click', nextMainContent);

document.querySelector('.header_logo').addEventListener('click', previousMainContent);


const navHeaderButton = document.querySelectorAll('.nav_header')
document.querySelector('.header_navigation').addEventListener('click', (event) => {
    for(let i=0; i<navHeaderButton.length-1; i++){
        if (navHeaderButton[i] == event.target.closest('.nav_header')){
            previousMainContent();    
        } 
    }
})








            // Second Menu Listener Button

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

            // Chenger drinks Menu

drinkButton.addEventListener('click', (event) => {
    if (event.target.closest('.coffee_button')) {
        coffeeMenuButton.classList.add('menu_focus_boutton')
        teaMenuButton.classList.remove('menu_focus_boutton')
        desserMenuButton.classList.remove('menu_focus_boutton')
    } else if (event.target.closest('.tea_button')) {
        coffeeMenuButton.classList.remove('menu_focus_boutton')
        teaMenuButton.classList.add('menu_focus_boutton')
        desserMenuButton.classList.remove('menu_focus_boutton')
    } else if (event.target.closest('.dessert_button')) {
        coffeeMenuButton.classList.remove('menu_focus_boutton')
        teaMenuButton.classList.remove('menu_focus_boutton')
        desserMenuButton.classList.add('menu_focus_boutton')
    }
});















const arrImage = document.querySelectorAll('.drinks_container_img_img')
const arr = document.querySelectorAll('.coffee_drinks_container');


document.querySelector('.menu_coffee_drinks').addEventListener('mouseover', (event) => {
    for (let i=0; i<arr.length; i++){
        if (arr[i] == event.target.closest('.coffee_drinks_container')) {
            arrImage[i].classList.add('image_scale')
        }       
    }
});

document.querySelector('.menu_coffee_drinks').addEventListener('mouseout', (event) => {
    for (let i=0; i<arr.length; i++){
        if (arr[i] == event.target.closest('.coffee_drinks_container')) {
            arrImage[i].classList.remove('image_scale')
        }       
    }
});










 



