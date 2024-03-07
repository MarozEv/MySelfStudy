const body = document.querySelector('body');
const mainFirstContent = document.querySelector('.main');
const mainSecondContent = document.querySelector('.main_container');
const fotterContent = document.querySelector('.contact');
const menuHeaderButton = document.querySelector('.header_menu');
const menuHeroButton = document.querySelector('.buttom_menu_hero');
const resourseLogo = document.querySelector('.header_logo')
const navHeaderButton = document.querySelectorAll('.nav_header');
const headerNavigationButtons = document.querySelector('.header_navigation');

function nextMainContent(){
    document.querySelector('.header_menu').classList.add('header_menu_width');
    menuHeaderButton.removeEventListener('click', nextMainContent);
    mainFirstContent.classList.remove('pasity_one');
    fotterContent.classList.remove('pasity_one');
    setTimeout(()=> {       
        mainFirstContent.classList.remove('show_block');
        fotterContent.classList.remove('show_block');
        mainSecondContent.classList.add('show_block');
        fotterContent.classList.add('show_block');
    },150);
    setTimeout(()=> {       
        mainSecondContent.classList.add('pasity_one');
        fotterContent.classList.add('pasity_one');
    },155);
    setTimeout(()=> {
        resourseLogo.addEventListener('click', previousMainContent);
        headerNavigationButtons.addEventListener('click',previousMainNavigation);
    },1000);
};

function previousMainContent(){
    document.querySelector('.header_menu').classList.remove('header_menu_width');
    mainSecondContent.classList.remove('pasity_one');
    fotterContent.classList.remove('pasity_one');
    resourseLogo.removeEventListener('click', previousMainContent);
    headerNavigationButtons.removeEventListener('click',previousMainNavigation);
    setTimeout(()=> {
        mainSecondContent.classList.remove('show_block');
        fotterContent.classList.remove('show_block');
        mainFirstContent.classList.add('show_block');
        fotterContent.classList.add('show_block');
    },150);
    setTimeout(()=> {
        mainFirstContent.classList.add('pasity_one');
        fotterContent.classList.add('pasity_one');
    },151);
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
    element.classList.add(elementClass);
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

// Hover for drinks containers

function listenerOverOut(){
    const arrImage = document.querySelectorAll('.drinks_container_img_img')
    const arr = document.querySelectorAll('.coffee_drinks_container');
    const hoverOverImageMenu = () => (event) => {
        for (let i=0; i<arr.length; i++){
            if (arr[i] == event.target.closest('.coffee_drinks_container') ) {
                arrImage[i].classList.add('image_scale')
            }       
        }
    };
    const hoverOutImageMenu = () =>(event) => {
        for (let i=0; i<arr.length; i++){ 
            if (arr[i] == event.target.closest('.coffee_drinks_container')) {
                arrImage[i].classList.remove('image_scale')
            }       
        }
    }    
    drinkContent.addEventListener('mouseover',hoverOverImageMenu(true));
    drinkContent.addEventListener('mouseout', hoverOutImageMenu(true));    
}
var drinkInfo = {
    valueS: '200 ml',
    costS: '1',
    valueM: '300 ml',
    costM: '1.2',
    valueL: '400 ml',
    costL: '1.4',
    firstAdd: 'Sugar',
    firstAddCost: "0.50",
    secondtAdd: 'Cinnamon',
    secondAddCost: '0.50',
    thirdAdd: 'Syrup',
    thirdAddCost: "0.30",
}
var dessertInfo = {
    valueS: '50 g',
    costS: '1',
    valueM: '100 g',
    costM: '1.2',
    valueL: '200 g',
    costL: '1.5',
    firstAdd: 'Berries',
    firstAddCost: "1.5",
    secondtAdd: 'Nuts',
    secondAddCost: "1.5",
    thirdAdd: 'Jam',
    thirdAddCost: "1",
}
// Click for drinks containers + Pup-Up
function clickListenerDrink(){
    const arr = document.querySelectorAll('.coffee_drinks_container');
    const clickPupUpMenu = () => (event) => {
        for (let i=0; i<arr.length; i++){      
            if (arr[i] == event.target.closest('.coffee_drinks_container') && (coffeeMenuButton.classList.contains('menu_focus_boutton'))){
                drinkInfo.secondtAdd = 'Cinnamon';
                drinkInfo.secondAddCost = '0.50';
                createPupUp(arr[i], drinkInfo)
            }else if (arr[i] == event.target.closest('.coffee_drinks_container') && teaMenuButton.classList.contains('menu_focus_boutton')){
                drinkInfo.secondtAdd = 'Lemon'
                drinkInfo.secondAddCost = '0.5'
                createPupUp(arr[i], drinkInfo)
            }else if (arr[i] == event.target.closest('.coffee_drinks_container') && desserMenuButton.classList.contains('menu_focus_boutton')){
                createPupUp(arr[i], dessertInfo)
            }    
        }
    }
    drinkContent.addEventListener('click',clickPupUpMenu(true));
}
// Create Pup-Up
const allWindow = createHTMLElement('div','fill', body);
const pupUp = createHTMLElement('div','pup_up', body);
function createPupUp(element, parametrs){
    pupUp.innerHTML = '';
    pupUp.classList.add('show_block');
    allWindow.classList.add('show_block');
    body.classList.add('overflow_hidden')
    setTimeout(() => {
        pupUp.classList.add('pasity_one');
        allWindow.classList.add('pasity_one');
    },2);
    const pupUpContainer = createHTMLElement('div','pup_up_container',pupUp);
        const leftPupUpContent = createHTMLElement('div','drinks_container_img',pupUpContainer);
        const imageLeftcontent = createHTMLElement('img','drinks_container_img_img',leftPupUpContent);
                                    imageLeftcontent.alt = element.childNodes[1].childNodes[0].innerHTML;
                                    imageLeftcontent.src = element.childNodes[0].childNodes[0].src;
        const rightPupUpContent = createHTMLElement('div','rightPupUpContent',pupUpContainer);
            // NAIM DRINK
            const naimDrinkPupUp = createHTMLElement('p','coffee_drink_naim',rightPupUpContent);
                                    naimDrinkPupUp.innerHTML = element.childNodes[1].childNodes[0].innerHTML;
            // DESCRIPTION DRINK
            const descriptionDrinkPupUp = createHTMLElement('p','drink_description_pupUP',rightPupUpContent);
                                    descriptionDrinkPupUp.innerHTML = element.childNodes[1].childNodes[1].innerHTML; 
            // SIZE DRINK
            const sizeDrinkPupUp = createHTMLElement('div','sizeDrinkPupUp',rightPupUpContent);
                const textSizeDrinkPupUp = createHTMLElement('p','sSizeDrinkPupUp',sizeDrinkPupUp);
                                    textSizeDrinkPupUp.innerHTML = 'Size';
                const containerSML = createHTMLElement('div','containerSML',sizeDrinkPupUp);
                    const sVolume = createHTMLElement('div','sizeVolume',containerSML);
                                    sVolume.classList.add('volume_activ_button')                                                   
                        const letterSSize = createHTMLElement('p','letterSSize',sVolume); 
                                    letterSSize.classList.add('letter_activ')                                            
                                    letterSSize.innerHTML = 'S';
                        const volumeSSize = createHTMLElement('p','volumeSize',sVolume);
                                    volumeSSize.classList.add('text_activ')                                          
                                    volumeSSize.innerHTML = parametrs.valueS;
                                    volumeSSize.dataset.cost = parametrs.costS;
                    const mVolume = createHTMLElement('div','sizeVolume',containerSML);
                        const letterMSize = createHTMLElement('p','letterMSize',mVolume);
                                    letterMSize.innerHTML = 'M';
                        const volumeMSize = createHTMLElement('p','volumeSize',mVolume);    
                                    volumeMSize.innerHTML = parametrs.valueM;
                                    volumeMSize.dataset.cost = parametrs.costM;       
                    const lVolume = createHTMLElement('div','sizeVolume',containerSML);
                        const letterLSize = createHTMLElement('p','letterLSize',lVolume);
                                    letterLSize.innerHTML = 'L';
                        const volumeLSize = createHTMLElement('p','volumeSize',lVolume);    
                                    volumeLSize.innerHTML = parametrs.valueL;
                                    volumeLSize.dataset.cost = parametrs.costL;
            // ADDITIVIES DRINK                            
            const additivesDrinkPupUp = createHTMLElement('div','additivesDrinkPupUp',rightPupUpContent);
                const textAdditivesDrinkPupUp = createHTMLElement('p','textAdditivesDrinkPupUp',sizeDrinkPupUp);
                                    textAdditivesDrinkPupUp.innerHTML = 'Additives';
                const container123 = createHTMLElement('div','container123',additivesDrinkPupUp);
                    const oneVolume = createHTMLElement('div','volumeletter',container123);
                        const letter1 = createHTMLElement('p','letterAdd',oneVolume);
                                    letter1.innerHTML = '1';
                        const volume1 = createHTMLElement('p','addVolume',oneVolume);    
                                    volume1.innerHTML = parametrs.firstAdd;
                                    volume1.dataset.cost = parametrs.firstAddCost;
                    const twoVolume = createHTMLElement('div','volumeletter',container123);
                        const letter2 = createHTMLElement('p','letterAdd',twoVolume);
                                     letter2.innerHTML = '2';
                        const volume2 = createHTMLElement('p','addVolume',twoVolume);    
                                    volume2.innerHTML = parametrs.secondtAdd;
                                    volume2.dataset.cost = parametrs.secondAddCost;
                    const threeVolume = createHTMLElement('div','volumeletter',container123);
                        const letter3 = createHTMLElement('p','letterAdd',threeVolume);
                                    letter3.innerHTML = '3';
                        const volume3 = createHTMLElement('p','addVolume',threeVolume);    
                                    volume3.innerHTML = parametrs.thirdAdd;
                                    volume3.dataset.cost = parametrs.thirdAddCost;
            // COST DRINK                
            const totalCostPupUp = createHTMLElement('div','totalCostPupUp',rightPupUpContent);
                const textTotal = createHTMLElement('p','textTotal',totalCostPupUp);
                    textTotal.innerHTML = 'Total:'
                const sumTotal = createHTMLElement('p','sumTotal',totalCostPupUp);
                    sumTotal.innerHTML = element.childNodes[1].childNodes[2].innerHTML;
            const informationPupUp = createHTMLElement('div','informationPupUp',rightPupUpContent);
                const iIconPupUp = createHTMLElement('img','iIconPupUp',informationPupUp);
                    iIconPupUp.alt = 'Pup-up information'
                    iIconPupUp.src = './icons/menu/pupUpi.svg'
                const iTextPupUp = createHTMLElement('p','iTextPupUp',informationPupUp);
                    iTextPupUp.innerHTML = 'The cost is not final. Download our mobile app to see the final price and place your order. Earn loyalty points and enjoy your favorite coffee with up to 20% discount.'
            // CLOSE PUP-UP BUTTON
            const buttonPupUp = createHTMLElement('div','buttonClosePupUp',rightPupUpContent);
                const closePupUp = createHTMLElement('p','closePupUp',buttonPupUp);
                    closePupUp.innerHTML = 'Close'
 
                    
                    //  Size Pup-up button listeners
var arrSize = containerSML.querySelectorAll('.sizeVolume');
var drinkCost = Number((element.childNodes[1].childNodes[2].innerHTML).slice(1));
var additivesSum = document.createElement('p');
var sizeSum = document.createElement('p');
sizeSum.textContent = drinkCost;
function culcCost(){
    return "$" + (Number(additivesSum.innerHTML) + Number(sizeSum.innerHTML)).toFixed(2)
}
const clickSizePupUp = () => (event) =>{
    let cost = 0;
    let opition = event.target.closest('.sizeVolume');
    arrSize.forEach(element => {
        element.classList.remove('volume_activ_button');
        element.childNodes[0].classList.remove('letter_activ');
        element.childNodes[1].classList.remove('text_activ');
        cost = 0;
        }
    );
    arrSize.forEach(element => {
        if (element == opition){
            element.classList.add('volume_activ_button');
            element.childNodes[0].classList.add('letter_activ');
            element.childNodes[1].classList.add('text_activ');
            cost = Number(element.childNodes[1].dataset.cost);
            sizeSum.textContent = cost*drinkCost
            culcCost()
            console.log(culcCost())
            sumTotal.innerHTML = culcCost()

        }
    });  
}

const hoverOverPupUp = (arr, elementStyle) => (event) =>{  
    const option = event.target.closest(elementStyle);
    arr.forEach(element => {
        option.classList.add('volume_hover_button');
        option.childNodes[0].classList.add('letter_hover');
        option.childNodes[1].classList.add('text_hover'); 
    });

}  
const hoverOutPupUp = (arr, elementStyle) => (event) =>{
    const option = event.target.closest(elementStyle);
    arr.forEach(element => {
        option.classList.remove('volume_hover_button');
        option.childNodes[0].classList.remove('letter_hover');
        option.childNodes[1].classList.remove('text_hover'); 
        
    });
} 
containerSML.addEventListener('click',  clickSizePupUp(true));

containerSML.addEventListener('mouseover',  hoverOverPupUp(arrSize,'.sizeVolume'));   
containerSML.addEventListener('mouseout',  hoverOutPupUp(arrSize,'.sizeVolume'));   

                    //  Additives Pup-up button listeners
const arrAdd = container123.querySelectorAll('.volumeletter');
let sum = 0;
const clickAddPupUp = () => (event) =>{      
        let option =  event.target.closest('.volumeletter')
        if (option){
            option.classList.toggle('volume_activ_button');
            option.childNodes[0].classList.toggle('letter_activ');
            option.childNodes[1].classList.toggle('text_activ');
            let cost = Number(option.childNodes[1].dataset.cost);
            sum = option.classList.contains('volume_activ_button') ? sum + cost : sum - cost;
            additivesSum.textContent = Number(sum.toFixed(2))
            culcCost()
            console.log(culcCost()) 
            sumTotal.innerHTML = culcCost()   
        }
}


container123.addEventListener('click',  clickAddPupUp(true));
container123.addEventListener('mouseover',  hoverOverPupUp(arrAdd,'.volumeletter'));   
container123.addEventListener('mouseout',  hoverOutPupUp(arrAdd,'.volumeletter'));  

                    // Close Pup-up button
buttonPupUp.addEventListener('mouseover', () => {
    buttonPupUp.classList.add('text_hover','volume_activ_button')
})
buttonPupUp.addEventListener('mouseout', () => {
    buttonPupUp.classList.remove('text_hover','volume_activ_button')
})

// close Pup-Up
const hiddenPupUp = () => (event) =>{ 
    const fClosePupUp = () =>{
            pupUp.classList.remove('pasity_one');
            allWindow.classList.remove('pasity_one');
            body.classList.remove('overflow_hidden')
        setTimeout(() => {
            pupUp.classList.remove('show_block');
            allWindow.classList.remove('show_block');
        },200);   
    }
    if (event.target.closest('.buttonClosePupUp')){
        fClosePupUp()
    } else if (!event.target.closest('.pup_up')){
        fClosePupUp()
    }
    
    
}

pupUp.addEventListener('click', hiddenPupUp(true))
allWindow.addEventListener('click', hiddenPupUp(true))

// containerSML.addEventListener('click', function(event){
//     let option = event.target.closest('')
// })





 // end create Pup-Up
}

// Chenger Drink Conteiners
function chengeDrinkContainer(drinks = 'coffee'){
    drinkContent.classList.add('opacity_zero');
    setTimeout(()=> {
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
        drinkContent.classList.remove('opacity_zero');
        clickListenerDrink();   
        listenerOverOut();
        showAnotherBlockMenu()  
    },150)
}
chengeDrinkContainer();


                                                    // Windiw width 768px
function createBurgerMenu(){
    if (window.innerWidth <= 768){
        const burgerButton = createHTMLElement('div','burger_button_open',document.querySelector('.wrapper'));
        const burgerButtonFirtLine = createHTMLElement('span','burger_button_first_line',burgerButton);
        const burgerButtonSecondLine = createHTMLElement('span','burger_button_second_line',burgerButton);
        const addRemoveClassBurger = () => {
            burgerButtonFirtLine.classList.toggle('burger_button_first_line_close');
            burgerButtonSecondLine.classList.toggle('burger_button_second_line_close');
                if (!headerNavigationButtons.classList.contains('burger_menu_activ')){
                    resourseLogo.addEventListener('click', addRemoveClassBurger);
                    headerNavigationButtons.classList.add('burger_menu_activ');
                    setTimeout(() =>{
                        headerNavigationButtons.classList.add('show_burger_menu');
                    },10)
                } else {
                    resourseLogo.removeEventListener('click', addRemoveClassBurger);
                    setTimeout(() =>{
                        headerNavigationButtons.classList.remove('show_burger_menu');  
                    },200);
                    setTimeout(() =>{
                        headerNavigationButtons.classList.remove('burger_menu_activ');
                    },500);

                }
            // body.classList.toggle('overflow_hidden')
        } 
        const closeOpenBurgerMenu = (event) => {
            if (event.screenY >= 900 || event.target.closest('.nav_header') || event.target.closest('.header_menu')){
                addRemoveClassBurger()
            }
        }

        headerNavigationButtons.addEventListener('click', closeOpenBurgerMenu)
        burgerButton.addEventListener('click', addRemoveClassBurger)
    } 
    
};
createBurgerMenu()

function showAnotherBlockMenu(){
    if (window.innerWidth <= 768){
        if (drinkContent.childNodes.length > 4){
            var refreshButtonMenuList = createHTMLElement('div','refresh_button',drinkContent);
            var refreshArrowButtonList = createHTMLElement('img','refresh_button_arrow',refreshButtonMenuList);
                refreshArrowButtonList.alt = "Refresh arrow";
                refreshArrowButtonList.src = './images/menu/refresh.svg';
            for(let i=0; i<drinkContent.childNodes.length; i++){
                if (i>=4 && i<8){
                    drinkContent.childNodes[i].classList.add('hidden_block')
                }
            }
        }
        let flag = true;
        refreshButtonMenuList.addEventListener('click', () => {
            if (flag){
                drinkContent.classList.add('opacity_zero');
                flag = false;
                    const styles = window.getComputedStyle(refreshArrowButtonList);
                        let rotate = parseInt(styles.getPropertyValue('--x'));
                        rotate += 360
                        refreshArrowButtonList.setAttribute("style", `--x: ${rotate}deg`);
                for (let i=0; i<drinkContent.childNodes.length; i++){
                    if (i<8){
                        setTimeout(()=>{drinkContent.childNodes[i].classList.toggle('hidden_block');},150);
                        setTimeout(()=>{drinkContent.classList.remove('opacity_zero');},151);
                    }
                }
                setTimeout(()=>{flag = true;},1000);
    
            }
        })
    }
}


