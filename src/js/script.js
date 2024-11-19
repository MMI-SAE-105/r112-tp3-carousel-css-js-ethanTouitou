// *** CAROUSEL ***
// TODO
const carousel = document.querySelector(".carouselcontainer");
const prevButton = document.querySelector(".carouselbutton--prev");
const nextButton = document.querySelector(".carousel__button--next");


if (carousel) {

    prevButton.addEventListener("click", () => {
        carousel.scrollBy({ left: -260, behavior: "smooth" });
    });


    nextButton.addEventListener("click", () => {
        carousel.scrollBy({ left: 260, behavior: "smooth" });
    });
}
