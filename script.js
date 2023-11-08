// script.js

document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('#menu a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetSection = document.querySelector(this.getAttribute('href'));

            document.querySelectorAll('section').forEach(section => {
                section.classList.remove('active');
            });

            targetSection.classList.add('active');
        });
    });
});
