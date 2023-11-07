// script.js

// Obtener el botón y la sección de habilidades
const toggleButton = document.getElementById("toggle-skills");
const skillsSection = document.getElementById("skills");

// Escuchar el clic en el botón
toggleButton.addEventListener("click", () => {
    // Alternar la clase 'hidden' en la sección de habilidades
    skillsSection.classList.toggle("hidden");
});