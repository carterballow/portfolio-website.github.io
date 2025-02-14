document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".slide");
    const nextArrow = document.querySelector(".arrow--next");
    const prevArrow = document.querySelector(".arrow--prev");
    const pagination = document.querySelector(".pagination");
    const wrapper = document.querySelector(".portfolio__wrapper"); // Get the wrapper

    let currentSlideIndex = 0;

    // Initialize Pagination
    slides.forEach((_, index) => {
        const dot = document.createElement("span");
        dot.classList.add("dot");
        if (index === currentSlideIndex) dot.classList.add("active");
        dot.addEventListener("click", () => goToSlide(index));
        pagination.appendChild(dot);
    });

    const updateSlides = () => {
        const translateXValue = -currentSlideIndex * 100; // Calculate translation
        wrapper.style.transform = `translateX(${translateXValue}%)`; // Apply transform

        const dots = pagination.querySelectorAll(".dot");
        dots.forEach((dot, index) => {
            dot.classList.toggle("active", index === currentSlideIndex);
        });
    };

    const goToSlide = (index) => {
        currentSlideIndex = index;
        updateSlides();
    };

    const nextSlide = () => {
        currentSlideIndex = (currentSlideIndex + 1) % slides.length;
        updateSlides();
    };

    const prevSlide = () => {
        currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
        updateSlides();
    };

    nextArrow.addEventListener("click", nextSlide);
    prevArrow.addEventListener("click", prevSlide);

    updateSlides(); // Initial update
});
