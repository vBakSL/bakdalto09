const images = document.querySelector('.carousel-images'); 
const indicators = document.querySelectorAll('.indicator');
let currentIndex = 0;

function updateCarousel(index) {
    images.style.transform = 'translateX(-${index *100}%)';
    indicators.forEach(ind => ind.classList.remove('active'));
    indicators[index].classList.add('active');
}

document.getElementById('prev').addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? indicators.length - 1 : currentIndex - 1;
    updateCarousel(currentIndex);
});

document.getElementById('next').addEventListener('click', () => {
    currentIndex = (currentIndex === indicators.length - 1) ? 0 : currentIndex + 1;
    updateCarousel(currentIndex);
});

indicators.forEach(indicator => {
    indicator.addEventListener('click', () => {
        currentIndex = parseInt(indicator.getAttribute('data-index'));
        updateCarousel(currentIndex);
    });
});
 