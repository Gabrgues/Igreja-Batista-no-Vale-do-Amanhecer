// script.js
const boxes = document.querySelectorAll('.box');
const avisos = document.querySelector('.avisos');

boxes.forEach(box => {
    box.addEventListener('click', () => {
        box.classList.toggle('expandido');
        avisos.style.display = 'block';
    });
});
