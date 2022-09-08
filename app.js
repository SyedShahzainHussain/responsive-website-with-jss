const mobile = document.querySelector('.navbar-btn');
const nav_header = document.querySelector('.header')




const toggleNavbar = ()=>{
    nav_header.classList.toggle('active');
}

mobile.addEventListener('click',()=>{
    toggleNavbar()
})