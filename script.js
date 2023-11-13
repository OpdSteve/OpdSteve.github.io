document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('#menu a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetSection = document.getElementById(this.getAttribute('href').substring(1));

            document.querySelectorAll('[id]').forEach(section => {
                section.classList.toggle('active', section === targetSection);
            });
        });
    });
});