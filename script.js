"use strict";
const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");

const btnLeft = document.querySelector(".btn__left");
const btnRight = document.querySelector(".btn__right");

let curSlide = 0;
const totalSlides = slides.length;

const goToSlide = function (slide) {
    slides.forEach(
        (s, i) => (s.style.transform = `translateX(${(i - slide) * 100}%)`)
    );
};
goToSlide(curSlide);

const nextSlide = function () {
    if (curSlide === totalSlides - 1) curSlide = 0;
    else curSlide = curSlide + 1;
    goToSlide(curSlide);
};

const prevSlide = function () {
    if (curSlide === 0) curSlide = totalSlides - 1;
    else curSlide = curSlide - 1;
    goToSlide(curSlide);
};

btnRight.addEventListener("click", nextSlide);

btnLeft.addEventListener("click", prevSlide);

document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight") nextSlide();
});

document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") prevSlide();
});
