const burger = document.querySelector('.header-burger')
const menu = document.querySelector('.main-menu')

burger.addEventListener('click', () => {
    menu.classList.toggle("open")
})