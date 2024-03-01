const mainFirstContent = document.querySelector('.main');
const mainSecondContent = document.querySelector('.main_container');
const fotterContent = document.querySelector('.contact');
const menuHeaderButton = document.querySelector('.header_menu');
const menuHeroButton = document.querySelector('.buttom_menu_hero');
const resourseLogo = document.querySelector('.header_logo')
const navHeaderButton = document.querySelectorAll('.nav_header');
const headerNavigationButtons = document.querySelector('.header_navigation');

function nextMainContent(){
    mainSecondContent.classList.add('show_block');
    mainFirstContent.classList.remove('pasity_one');
    fotterContent.classList.remove('show_block','pasity_one');
    fotterContent.classList.add('position_absolute');
    document.querySelector('.header_menu').classList.add('header_menu_width');
    menuHeaderButton.removeEventListener('click', nextMainContent); 
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
        fotterContent.classList.remove('position_absolute');     
            },450);
    setTimeout(()=> {
        resourseLogo.addEventListener('click', previousMainContent);
        headerNavigationButtons.addEventListener('click',previousMainNavigation);
    },1000);
};

function previousMainContent(){
    mainFirstContent.classList.add('show_block');
    mainSecondContent.classList.remove('position_inherit');
    fotterContent.classList.remove('pasity_one');
    document.querySelector('.header_menu').classList.remove('header_menu_width');
    resourseLogo.removeEventListener('click', previousMainContent);
    headerNavigationButtons.removeEventListener('click',previousMainNavigation);
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
    setTimeout(()=> {menuHeaderButton.addEventListener('click', nextMainContent)},1000);       
};

function previousMainNavigation(event){
    for(let i=0; i<navHeaderButton.length-1; i++){
        if (navHeaderButton[i] == event.target.closest('.nav_header')){
            previousMainContent();    
        } 
    }
};

menuHeroButton.addEventListener('click', nextMainContent);
menuHeaderButton.addEventListener('click', nextMainContent);




            // Chenger drinks Menu

drinkButton.addEventListener('click', (event) => {
    if (event.target.closest('.coffee_button')) {
        coffeeMenuButton.classList.add('menu_focus_boutton');
        teaMenuButton.classList.remove('menu_focus_boutton');
        desserMenuButton.classList.remove('menu_focus_boutton');
        drinkContent.classList.remove('hidden_block');
        chengeDrinkContainer('coffee');

    } else if (event.target.closest('.tea_button')) {
        coffeeMenuButton.classList.remove('menu_focus_boutton');
        teaMenuButton.classList.add('menu_focus_boutton');
        desserMenuButton.classList.remove('menu_focus_boutton');
        chengeDrinkContainer('tea');

    } else if (event.target.closest('.dessert_button')) {
        coffeeMenuButton.classList.remove('menu_focus_boutton');
        teaMenuButton.classList.remove('menu_focus_boutton');
        desserMenuButton.classList.add('menu_focus_boutton');
        chengeDrinkContainer('dessert');

    }
});

const drinkContent = document.querySelector('.menu_coffee_drinks');
function createHTMLElement(elementType, elementClass,perentElement){
    const element =document.createElement(elementType);
    element.classList.add(elementClass);-
    perentElement.append(element)
    return element;
}

const arrCoffeeImages = ['main_Irish_coffe.jpg','main_Kahlua_coffee.jpg','main_Honey_raf.jpg','main_Ice_cappuccino.jpg','main_Espresso.jpg','main_Latte.jpg','main_Latte_macchiato.jpg','main_Coffee_with_cognac.jpg' ]
const arrCoffeeNaims = ['Irish coffee','Kahlua coffee','Honey raf','Ice cappuccino','Espresso','Latte','Latte macchiato','Coffee with cognac']
const arrCoffeeDescriptions = ['Fragrant black coffee with Jameson Irish whiskey and whipped milk',
                                'Classic coffee with milk and Kahlua liqueur under a cap of frothed milk',
                                'Espresso with frothed milk, cream and aromatic honey',
                                'Cappuccino with soft thick foam in summer version with ice',
                                'Classic black coffee',
                                'Espresso coffee with the addition of steamed milk and dense milk foam',
                                'Espresso with frothed milk and chocolate',
                                'Fragrant black coffee with cognac and whipped cream']
const arrCoffeeCosts = ['$7.00','$7.00','$5.50','$5.00','$4.50','$5.50','$5.50','$6.50']

function coffeeDrinkContainer(){  
    for(let i = 0; i<arrCoffeeNaims.length; i++) {
    const coffeeContainer = createHTMLElement('div','coffee_drinks_container',drinkContent);
    const imageContainer = createHTMLElement('div','drinks_container_img',coffeeContainer);
        const imageDrink = createHTMLElement('img','drinks_container_img_img',imageContainer);
            imageDrink.alt = ('' + arrCoffeeNaims[i]);
            imageDrink.src = ('./images/menu/' + arrCoffeeImages[i]);
    const textContent = createHTMLElement('div','coffee_drink_second_content',coffeeContainer);
        const naimDrink = createHTMLElement('p','coffee_drink_naim',textContent);
            naimDrink.innerHTML = arrCoffeeNaims[i];            
        const descriptionDrink = createHTMLElement('p','coffee_drink_description',textContent);
            descriptionDrink.innerHTML = arrCoffeeDescriptions[i];        
            const costDrink = createHTMLElement('p','coffe_drink_cost',textContent);
            costDrink.innerHTML = arrCoffeeCosts[i];
    coffeeContainer.append(textContent); 
    }
}
coffeeDrinkContainer();


const arrTeaImages = ['naim_tea_Moroccan.svg','naim_tea_Ginger.svg','naim_tea_Cranberry.svg','naim_tea_SeaBuckthorn.svg'];
const arrTeaNaims = ['Moroccan','Ginger','Cranberry','Sea buckthorn'];
const arrTeaDescriptions = ['Fragrant black tea with the addition of tangerine, cinnamon, honey, lemon and mint',
                          'Original black tea with fresh ginger, lemon and honey',
                          'Invigorating black tea with cranberry and honey',
                          'Toning sweet black tea with sea buckthorn, fresh thyme and cinnamon'];
const arrTeaCosts = ['$4.50','$5.00','$5.00','$5.50']

function teaDrinkContainer(){
    for(let i = 0; i<arrTeaNaims.length; i++) {
    const teaContainer = createHTMLElement('div','coffee_drinks_container',drinkContent);
    const imageContainer = createHTMLElement('div','drinks_container_img',teaContainer);
        const imageDrink = createHTMLElement('img','drinks_container_img_img',imageContainer);
                imageDrink.alt = ('' + arrTeaNaims[i]);
                imageDrink.src = ('./images/menu/' + arrTeaImages[i]);
    const textContent = createHTMLElement('div','coffee_drink_second_content',teaContainer);
        const naimDrink = createHTMLElement('p','coffee_drink_naim',textContent);
                naimDrink.innerHTML = arrTeaNaims[i];            
        const descriptionDrink = createHTMLElement('p','coffee_drink_description',textContent);
                descriptionDrink.innerHTML = arrTeaDescriptions[i];        
                const costDrink = createHTMLElement('p','coffe_drink_cost',textContent);
                costDrink.innerHTML = arrTeaCosts[i];
    teaContainer.append(textContent); 
    }
}

const arrDessertImages =['niam_Marble_cheesecake.svg','naim_Red_velvet.svg','naim_Cheesecakes.svg','naim_Creme_brulee.svg','naim_Pancakes.svg','naim_Honey_cake.svg','naim_Chocolate_cake.svg','naim_Black_forest.svg']
const arrDessertNaims =['Marble cheesecake','Red velvet','Cheesecakes','Creme brulee','Pancakes','Honey cake','Chocolate cake','Black forest']
const arrDessertDescriptions =['Philadelphia cheese with lemon zest on a light sponge cake and red currant jam',
                                'Layer cake with cream cheese frosting',
                                'Soft cottage cheese pancakes with sour cream and fresh berries and sprinkled with powdered sugar',
                                'Delicate creamy dessert in a caramel basket with wild berries',
                                'Tender pancakes with strawberry jam and fresh strawberries',
                                'Classic honey cake with delicate custard',
                                'Cake with hot chocolate filling and nuts with dried apricots',
                                'A combination of thin sponge cake with cherry jam and light chocolate mousse']
const arrDessertCosts = ['$3.50','$4.00','$4.50','$4.00','$4.50','$4.50','$5.50','$6.50']

function dessertDrinkContainer(){
    for(let i = 0; i<arrDessertNaims.length; i++) {
    const dessertContainer = createHTMLElement('div','coffee_drinks_container',drinkContent);
    const imageContainer = createHTMLElement('div','drinks_container_img',dessertContainer);
        const imageDrink = createHTMLElement('img','drinks_container_img_img',imageContainer);
                imageDrink.alt = ('' + arrDessertNaims[i]);
                imageDrink.src = ('./images/menu/' + arrDessertImages[i]);
    const textContent = createHTMLElement('div','coffee_drink_second_content',dessertContainer);
        const naimDrink = createHTMLElement('p','coffee_drink_naim',textContent);
                naimDrink.innerHTML = arrDessertNaims[i];            
        const descriptionDrink = createHTMLElement('p','coffee_drink_description',textContent);
                descriptionDrink.innerHTML = arrDessertDescriptions[i];        
                const costDrink = createHTMLElement('p','coffe_drink_cost',textContent);
                costDrink.innerHTML = arrDessertCosts[i];
    dessertContainer.append(textContent); 
    }    
}

function chengeDrinkContainer(drinks = 'coffee'){
    drinkContent.innerHTML = '';
    switch(drinks){
        case 'coffee':
            coffeeDrinkContainer();
                break;
        case 'tea':
            teaDrinkContainer();
                break;
        case 'dessert':
            dessertDrinkContainer();
                break;
    }
}






