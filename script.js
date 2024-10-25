let currentSlide = 0;
const slidesContainer = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slide').length;

function showSlide(index) {
    // Calculate the new position of the slides container
    const slideWidth = document.querySelector('.slide').clientWidth;
    const newTransformValue = -index * slideWidth;

    // Apply the sliding transition
    slidesContainer.style.transform = `translateX(${newTransformValue}px)`;

    currentSlide = index;
    updateNavButtons();
}

function updateNavButtons() {
    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach((button, i) => {
        button.style.backgroundColor = i === currentSlide ? 'rgba(255, 255, 255, 0.8)' : 'rgba(255, 255, 255, 0.5)';
    });
}

// Auto slide functionality (Optional)
setInterval(() => {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}, 3000);

// Initialize the first slide
showSlide(currentSlide);

// Adjust sliding on window resize
window.addEventListener('resize', () => {
    showSlide(currentSlide); // Recalculate the width in case of window resizing
});

