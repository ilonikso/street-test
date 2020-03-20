

const navbar = document.querySelector('.navbar-collapse');
const nav = document.querySelector('.navbar');

const toggler = document.querySelector('.navbar-toggler');

toggler.addEventListener('click', function(){
    if(navbar.classList.contains('show')){
        nav.style.backgroundColor = "transparent";
        
    }

    if(!navbar.classList.contains('show')){
        nav.style.backgroundColor = "#156e63";
        
    }
})