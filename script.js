// Initialize the carousel
document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.carousel');
    M.Carousel.init(elems, {
        fullWidth: true, // Enables full-width carousel
        indicators: true // Shows the small dots below
    });
});
