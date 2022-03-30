ScrollReveal({ reset: true });
ScrollReveal().reveal('.wrapper', {delay: 700});
ScrollReveal().reveal('.right-bar', { delay: 2000 });

var button = document.querySelector('.btn-secondary');

button.addEventListener('click', function() {
    ScrollReveal().reveal('.temp', {delay: 1700});
    ScrollReveal().reveal('.name', { delay: 1500 });
    ScrollReveal().reveal('.desc', {delay: 1800});
    ScrollReveal().reveal('.cloudy', {delay: 1500});
    ScrollReveal().reveal('.wind', {delay: 1600});
    ScrollReveal().reveal('.feels-like', {delay: 1700});
    ScrollReveal().reveal('.humidity', {delay: 1800});
    ScrollReveal({ reset: true });
})
