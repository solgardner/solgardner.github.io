// Initialize the carousel
document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, {
        fullWidth: true, // Enables full-width carousel
        indicators: true // Shows the small dots below
    });

    // Add click events for arrows
    if (instances.length > 0) {
        const carousel = instances[0]; // Assuming only one carousel on the page

        document.querySelector('.prev-arrow').addEventListener('click', function () {
            carousel.prev();
        });

        document.querySelector('.next-arrow').addEventListener('click', function () {
            carousel.next();
        });
    }
});

// Ensure proper layout after all content (including images) has loaded
window.addEventListener('load', function () {
    var elems = document.querySelectorAll('.carousel');
    if (elems.length > 0) {
        // Re-initialize carousel to address potential layout issues
        M.Carousel.init(elems, {
            fullWidth: true,
            indicators: true
        });
    }
});
