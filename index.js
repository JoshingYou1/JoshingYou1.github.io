'use strict';

// -- Scroll to top link --
if ($('#back-to-top').length) {
    let scrollTrigger = 300, 

    backToTop = function () {
        let scrollTop = $(window).scrollTop();
        if (scrollTop > scrollTrigger) {
            $('#back-to-top').addClass('show');
            $('#back-to-top').removeClass('hide');
        } else {
            $('#back-to-top').removeClass('show');
            $('#back-to-top').addClass('hide');
        }
    };
    
    backToTop();
    $(window).on('scroll', function () {
        backToTop();
    });
    $('#back-to-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });
}


// -- Mobile navigation window --
let mobileNav = document.querySelector('.nav-input');

function openNav() {
    mobileNav.classList.add('is-active');
    document.getElementById('menu').style.display = 'block';
}

function closeNav() {
    mobileNav.classList.remove('is-active');
    document.getElementById('nav-input').checked = false;
}


function handleClickLink(event) {
    const block = event.target.dataset.block;
    console.log(block);
    document.getElementById(block).scrollIntoView({ behavior: 'smooth'});
    mobileNav.classList.contains('is-active') ? closeNav() : openNav();
}

document.querySelectorAll('.nav-li').forEach((elem) => {
    elem.addEventListener('click', handleClickLink);
});

mobileNav.addEventListener('click', () => mobileNav.classList.contains('is-active') ? closeNav() : openNav());

// -- Scroll to about section after clicking bounce element --
$('#discover-container').on('click', function() {
    document.getElementById('about').scrollIntoView({behavior: 'smooth'});
});
