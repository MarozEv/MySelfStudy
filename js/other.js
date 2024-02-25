const menuHeroButton = document.querySelector('.buttom_menu_hero');
const cupCoffeeHero = document.querySelector('.coffee_cup_ico');

menuHeroButton.addEventListener('mouseover', ()=> {
    document.querySelector('.hero_menu_text').classList.add('hero_menu_left');
    cupCoffeeHero.classList.add('coffee_cup_opacity');
});

menuHeroButton.addEventListener('mouseout', ()=> {
    document.querySelector('.hero_menu_text').classList.remove('hero_menu_left');
    cupCoffeeHero.classList.remove('coffee_cup_opacity');
});