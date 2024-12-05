// Initialize the carousel
document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, {
        fullWidth: true, // Enables full-width carousel
        indicators: true // Shows the small dots below
    });

    // Ensure carousel initializes properly after page content has fully loaded
    window.addEventListener('load', function () {
        instances.forEach(function (instance) {
            instance.set(); // Recalculate carousel layout if necessary
        });
    });

    // Add click events for arrows
    const carousel = instances[0]; // Assuming only one carousel on the page

    if (carousel) {
        const prevArrow = document.querySelector('.prev-arrow');
        const nextArrow = document.querySelector('.next-arrow');

        if (prevArrow) {
            prevArrow.addEventListener('click', function () {
                carousel.prev();
            });
        }

        if (nextArrow) {
            nextArrow.addEventListener('click', function () {
                carousel.next();
            });
        }
    }
});
