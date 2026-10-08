/* =========================================
   NEIGHBORHOODS CAROUSEL
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    const track = document.getElementById("neighborhoods-track");
    const previousButton = document.getElementById("neighborhood-prev");
    const nextButton = document.getElementById("neighborhood-next");

    if (!track || !previousButton || !nextButton) {
        return;
    }


    previousButton.addEventListener("click", () => {

        track.scrollBy({
            left: -320,
            behavior: "smooth"
        });

    });


    nextButton.addEventListener("click", () => {

        track.scrollBy({
            left: 320,
            behavior: "smooth"
        });

    });

});