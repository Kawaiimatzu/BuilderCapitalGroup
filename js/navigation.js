document.addEventListener("DOMContentLoaded", () => {

    const header = document.getElementById("site-header");

    if (!header) {
        return;
    }


    function updateHeader() {

        if (window.scrollY > 40) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }

    }


    updateHeader();


    window.addEventListener(
        "scroll",
        updateHeader,
        { passive: true }
    );

});