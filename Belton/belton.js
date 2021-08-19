
const menuclose = document.querySelector('.js-close-menu')
const menuBtns = document.querySelector('.js-icon')
const show = document.querySelector('.js-show')
const Showmenu = document.querySelector('.showmenu')

function showmenu(){
    show.classList.add('open2')
}
function hidemenu(){
    show.classList.remove('open2')
}

menuBtns.addEventListener('click',showmenu)

menuclose.addEventListener('click',hidemenu)

show.addEventListener('click',hidemenu)

Showmenu.addEventListener('click', function(event){
    event.stopPropagation()
})

const buyBtns = document.querySelector('.js-buy')
const modal = document.querySelector('.js-modal')
const modalClose = document.querySelector('.js-modal-close')
const modalContainer = document.querySelector('.modal-container')

function showBuytheme(){
    modal.classList.add('open1')
}

function hideBuytheme(){
    modal.classList.remove('open1')
}

buyBtns.addEventListener('click', showBuytheme)

modalClose.addEventListener('click', hideBuytheme)

modal.addEventListener('click',hideBuytheme)

modalContainer.addEventListener('click', function(event){
    event.stopPropagation()
}
)
