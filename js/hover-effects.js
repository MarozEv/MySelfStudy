
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




                // Scroll Button 

const scrollButton = document.createElement('div');
scrollButton.classList.add('scroll-button');
document.querySelector('body').append(scrollButton);

window.addEventListener('scroll', () => {
    if (window.scrollY > 800){
        scrollButton.classList.add('show_block');
        setTimeout(() => {
            scrollButton.classList.add('opacity_abit');    
        },1);
    }else scrollButton.classList.remove('opacity_abit', 'show_block');

})
scrollButton.addEventListener('mouseover', (event) => {
    scrollButton.classList.add('opacity_one')
});
scrollButton.addEventListener('click', (event) => {
    setTimeout(() => {
        window.scrollTo(0, 0)    
    },100);
    scrollButton.classList.remove('opacity_abit', 'hidden_block');
});
scrollButton.addEventListener('mouseout', () => {
    scrollButton.classList.remove('opacity_one');
})


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





            // Hover for drinks containers
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







// function renderCards(productCards = 'coffee'){
//     card.innerHTML = ' '
//     const newCard = document.createElement('div');
//     const cards = [];1
    
    
    
    
//     switch(productCards){
//         case 'coffee':
//             cards = createCoffee()
//     break;
//     case 'tea':
//             createTea()
//     break;
//     case 'dessert':
//             createDessert()
//     break;

//     }
     
    
//     newCard.innerHTML = 
//     card.appendChild(newCard);
// }

// renderCards()




