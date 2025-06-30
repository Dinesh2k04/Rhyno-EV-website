const toggleButton = document.querySelector('.toggle-button');
const navbarLinks = document.querySelector('.navbar-links');
const closeButton = document.querySelector('.close-button');
const expandableItem = document.querySelector('.expandable');
const expandableMenu = document.querySelector('.expandable-menu');

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
});

closeButton.addEventListener('click', () => {
    navbarLinks.classList.remove('active');
    toggleButton.classList.remove('active'); 
});

document.addEventListener('click', () => {
    expandableMenu.classList.remove('expanded'); 
});

document.addEventListener('DOMContentLoaded', function () {
    var dropdownLink = document.getElementById('dropdownLink');
    var dropdownContent = document.getElementById('dropdownContent');

    dropdownLink.addEventListener('click', function (event) {
        event.preventDefault(); 
        dropdownContent.classList.toggle('show');
    });
});
$(document).ready(function(){
    $('.se03-select-image').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        arrows: true,
    });
});


