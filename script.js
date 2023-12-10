const humburger = document.querySelector('.menu-icon')
const clos = document.querySelector('.menu-icon-clos')
const nav2 = document.querySelector('.nav2')

humburger.addEventListener('click', ()=>{
    humburger.classList.add('hide')
    clos.classList.add('hide')
    nav2.classList.toggle('visible')
    
})

clos.addEventListener('click', ()=>{
    humburger.classList.remove('hide')
    clos.classList.remove('hide')
    nav2.classList.toggle('visible')
})