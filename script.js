// Initialize the carousel
document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, {
        fullWidth: true, // Enables full-width carousel
        indicators: true // Shows the small dots below
    });

    // Add click events for arrows
    const carousel = instances[0]; // Assuming only one carousel on the page

    document.querySelector('.prev-arrow').addEventListener('click', function () {
        carousel.prev();
    });

    document.querySelector('.next-arrow').addEventListener('click', function () {
        carousel.next();
    });
});
