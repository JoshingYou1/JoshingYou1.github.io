'use strict';

// window.onload = handleClickLink;

// function scrollToAbout() {
//     let aboutSection = document.getElementsByClassName('about');
//     document.getElementsByClassName('about-li').onclick = function() {
//         aboutSection.scrollIntoView({behavior: 'smooth'});
//     }
// }

let nav = document.querySelector('.nav-input');

function openNav() {
    nav.classList.add('is-active');
    document.getElementById('menu').style.display = 'block';
}

function closeNav() {
    nav.classList.remove('is-active');
    // document.getElementById('menu').style.display = 'none';
    document.getElementById('nav-input').checked = false;
    // document.getElementById('menu').style.transform = 'translate(100%, 0%)';
}


function handleClickLink(event) {
    const block = event.target.dataset.block;
    document.getElementById(block).scrollIntoView({ behavior: 'smooth'});
    nav.classList.contains('is-active') ? closeNav() : openNav();
}
  
document.querySelectorAll('.nav-li').forEach((link) => {
    link.addEventListener('click', handleClickLink);
});

nav.addEventListener('click', () => nav.classList.contains('is-active') ? closeNav() : openNav());