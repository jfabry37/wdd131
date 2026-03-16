const year = document.querySelector('#currentYear');
const today = new Date();
year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;
const short = document.getElementById("lastModified").innerHTML = document.lastModified;

const menuButton = document.querySelector('.menu');
const navigation = document.querySelector('.navigation');
menuButton.addEventListener('click', () =>{
    menuButton.classList.toggle('open')
    navigation.classList.toggle('open');
})

window.addEventListener('resize', () => {
    if (window.innerWidth >= 640){
        menuButton.classList.remove('open');
        navigation.classList.remove('open');
    }
})