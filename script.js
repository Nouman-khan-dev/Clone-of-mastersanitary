let overlay = document.querySelector('.overlay')
let menu = document.querySelector('.menu-container')
let burger = document.querySelector('.hamburger')
let close = document.querySelector('.cross-icon')

burger.addEventListener('click',()=>{
    overlay.classList.add('active')
    menu.classList.add('active')
    close.classList.add('active')
})

close.addEventListener('click',()=>{
    overlay.classList.remove('active')
    menu.classList.remove('active')
    close.classList.remove('active')
})



