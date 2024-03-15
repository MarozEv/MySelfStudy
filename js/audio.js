const play = document.querySelector('.play');
const nextAudio = document.querySelector('.play-next');
const prevueAudio = document.querySelector('.play-prev');
const playList = document.querySelector('.play-list');

import audioPlayList from './playList.js'



let isPlay = false;
let audioPlayNow = 0;

const audio = new Audio();
audio.currentTime = 0;
audio.src = audioPlayList[audioPlayNow].src;

function audioPlayStop(){
        play.classList.toggle('pause');    
    if (!isPlay){
        isPlay = true;
        audio.play();
    } else {
        isPlay = false;
        audio.pause();
    }
}  
function playNext(){
    audioPlayNow++;
    if (audioPlayNow >= 4) audioPlayNow = 0;    
    isPlay = true
    audio.src = audioPlayList[audioPlayNow].src;
    audio.play();
    play.classList.add('pause');
    activAudiio(audioPlayNow);
}
function playPrev(){
    audioPlayNow--;
    if (audioPlayNow < 0) audioPlayNow = 3;
    isPlay = true
    audio.src = audioPlayList[audioPlayNow].src;
    audio.play();
    play.classList.add('pause');
    activAudiio(audioPlayNow);
}





function cteateElement(tegElement, claaElemenr, parentElement, contentElement){
    const element = document.createElement(tegElement);
    element.classList.add(claaElemenr);
    parentElement.append(element);
    element.innerHTML = contentElement;
    return element
}
function cteatePlayList(){
    audioPlayList.forEach(element => {
        cteateElement('li', 'play-item', playList, element.title);
    });

}
cteatePlayList()
function activAudiio(numberAudio){
    const itemAudi = document.querySelectorAll('.play-item');
    itemAudi.forEach(element => {
        element.classList.remove('item-active');
    });
    itemAudi[numberAudio].classList.add('item-active');
}
activAudiio(audioPlayNow)




nextAudio.addEventListener('click', playNext);
prevueAudio.addEventListener('click', playPrev);
play.addEventListener('click',audioPlayStop);