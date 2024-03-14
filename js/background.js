const body = document.querySelector('body')
const nextImageButtons = document.querySelectorAll('.slider-icon')

async function getLinkToImage() {
    const url = 'https://api.unsplash.com/photos/random?orientation=landscape&query=morning&client_id=Tgb3fAg2MBfjTBlDlRl7tZ4IdtWnf2-SeCp58kYln4A';
    const res = await fetch(url);
    const data = await res.json();
    let bg = new Image();
    bg.src = data.urls.regular;
    bg.onload = () => {
        body.style.backgroundSize = `cover`;
        body.style.backgroundImage = `url(${data.urls.regular})`
    }
}
getLinkToImage().then()
nextImageButtons.forEach(element => {
    element.addEventListener('click',getLinkToImage)  
});
