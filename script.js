// Funcionalidad del botón de menú hamburguesa
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});
// Funcionalidad del modal para mostrar imágenes grandes
const images = document.querySelectorAll('.image');
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modal-image');

images.forEach(image => {
    image.addEventListener('click', () => {
        modalImage.src = image.src;
        modal.classList.add('show');
    });
});

modal.addEventListener('click', () => {
    modal.classList.remove('show');
});