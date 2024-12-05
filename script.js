// Initialize the carousel
document.addEventListener('DOMContentLoaded', function () {
    const elems = document.querySelectorAll('.carousel');
    const instances = M.Carousel.init(elems, {
        fullWidth: true, // Enables full-width carousel
        indicators: true // Shows the small dots below
    });

    // Safely handle navigation arrows
    const prevArrow = document.querySelector('.prev-arrow');
    const nextArrow = document.querySelector('.next-arrow');
    const carousel = instances.length > 0 ? instances[0] : null;

    if (carousel) {
        if (prevArrow) {
            prevArrow.addEventListener('click', () => carousel.prev());
        }
        if (nextArrow) {
            nextArrow.addEventListener('click', () => carousel.next());
        }
    }
});

// Ensure proper rendering of carousel on first load
window.onload = function () {
    const elems = document.querySelectorAll('.carousel');
    elems.forEach(elem => {
        const instance = M.Carousel.getInstance(elem);
        if (instance) {
            instance.set(); // Ensure the carousel layout is correctly recalculated
        }
    });
};
