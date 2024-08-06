// Get the button
let mybutton = document.getElementById("scrollToTopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// Attach the scrollToTop function to the button click event
mybutton.addEventListener('click', scrollToTop);

function toggleMenu() {
    const navbar = document.querySelector('.top-bar .navbar ul');
    navbar.style.display = navbar.style.display === 'flex' ? 'none' : 'flex';
}

