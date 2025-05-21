let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(n) {
    slideIndex = (n + slides.length) % slides.length;
    slides.forEach((slide, idx) => {
        slide.classList.toggle('active', idx === slideIndex);
    });
}

function nextSlide(step = 1) {
    showSlide(slideIndex + step);
}

document.querySelector('.prev').addEventListener('click', () => nextSlide(-1));
document.querySelector('.next').addEventListener('click', () => nextSlide(1));

setInterval(() => nextSlide(1), 5000);

showSlide(slideIndex);
