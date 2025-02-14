const portfolioSwiper = new Swiper(".portfolio__container", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    
    // Disable mousewheel control
    mousewheel: {
        enabled: false,
    },
    
    // Enable keyboard navigation
    keyboard: {
        enabled: true,
        onlyInViewport: true,
    },
    
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    
    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    // Disable touch/drag interactions
    allowTouchMove: false,
    simulateTouch: false,
});
