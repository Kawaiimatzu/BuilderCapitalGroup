document.addEventListener("DOMContentLoaded", () => {

    const slides = document.querySelectorAll(
        ".testimonial-slide"
    );

    const numbers = document.querySelectorAll(
        ".testimonial-number"
    );

    const previousButton = document.getElementById(
        "testimonial-prev"
    );

    const nextButton = document.getElementById(
        "testimonial-next"
    );


    /* =========================================
       CHECK REQUIRED ELEMENTS
    ========================================== */

    if (
        !slides.length ||
        !numbers.length ||
        !previousButton ||
        !nextButton
    ) {
        return;
    }


    /* =========================================
       CURRENT SLIDE
    ========================================== */

    let currentIndex = 0;


    /* =========================================
       SHOW TESTIMONIAL
    ========================================== */

    function showTestimonial(index) {

        if (index < 0) {
            index = slides.length - 1;
        }

        if (index >= slides.length) {
            index = 0;
        }

        currentIndex = index;


        /* Hide / show slides */

        slides.forEach((slide, slideIndex) => {

            slide.classList.toggle(
                "active",
                slideIndex === currentIndex
            );

        });


        /* Update numbers */

        numbers.forEach((number, numberIndex) => {

            number.classList.toggle(
                "active",
                numberIndex === currentIndex
            );

        });

    }


    /* =========================================
       PREVIOUS BUTTON
    ========================================== */

    previousButton.addEventListener(
        "click",
        () => {

            showTestimonial(
                currentIndex - 1
            );

        }
    );


    /* =========================================
       NEXT BUTTON
    ========================================== */

    nextButton.addEventListener(
        "click",
        () => {

            showTestimonial(
                currentIndex + 1
            );

        }
    );


    /* =========================================
       NUMBER BUTTONS
    ========================================== */

    numbers.forEach((number) => {

        number.addEventListener(
            "click",
            () => {

                const index = Number(
                    number.dataset.testimonial
                );

                showTestimonial(index);

            }
        );

    });


    /* =========================================
       INITIAL SLIDE
    ========================================== */

    showTestimonial(0);

});