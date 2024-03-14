const chartreName = document.querySelector('.name');

function setLocalStorage() {
    localStorage.setItem('name', chartreName.value);
}
function getLocalStorage() {
    if(localStorage.getItem('name')){
        chartreName.value = localStorage.getItem('name');
    }
}

window.addEventListener('load', getLocalStorage);
window.addEventListener('beforeunload', setLocalStorage);
