// $(() => {
//     $(window).on('load', function hidePreloader() {
//         $('.preloader__wrp').fadeOut();
//     });
// });

$(() => {
    $('.js-toggle-menu').on('click', function () {
        $('.header-menu').toggleClass('header-menu--active');
        $('.header').toggleClass('header--active');
        $(this).toggleClass('header__burger--active');
        $('body').toggleClass('fixed');
    });

    $('.js-scrollto-news').on('click', function () {
        const offset = $('#news-info').offset().top;
        $('html, body').animate({
            scrollTop: offset
        }, 700);
    })

    const offerCard = new Swiper(".js-offer-card-slider", {
        speed: 1500,
        freeMode: false,
        watchSlidesProgress: true,
        slidesPerView: 1,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        navigation: {
            nextEl: ".js-offer-card-next",
            prevEl: ".js-offer-card-prev",
        },
    });
    const boardSlider = new Swiper(".js-board-slider", {
        speed: 1500,
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            576: {
                slidesPerView: 1,
                spaceBetween: 40,
            },
            976: {
                slidesPerView: 2,
                spaceBetween: 40,
            },
            1575: {
                slidesPerView: 3,
                spaceBetween: 40,
            },
        },
        navigation: {
            nextEl: ".js-board-next",
            prevEl: ".js-board-prev",
        },
    });

    const infoSlider = new Swiper(".js-info-slider", {
        speed: 1500,
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            576: {
                slidesPerView: 1,
                spaceBetween: 32,
            },
            1200: {
                slidesPerView: 1,
                spaceBetween: 40,
            },
            1560: {
                slidesPerView: 2,
                spaceBetween: 40,
            },
        },
        navigation: {
            nextEl: ".js-info-next",
            prevEl: ".js-info-prev",
        },
    });
});

var offerBottom = new Swiper(".js-offer-top-slider", {
    speed: 1500,
    slidesPerView: 1,
    watchSlidesProgress: true,
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: false,
        draggable: true,
    },
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },

});
var offerTop = new Swiper(".js-offer-bottom-slider", {
    speed: 1500,
    freeMode: false,
    watchSlidesProgress: true,
    slidesPerView: 1,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    navigation: {
        nextEl: ".js-offer-next",
        prevEl: ".js-offer-prev",
    },
});

offerTop.controller.control = offerBottom;
offerBottom.controller.control = offerTop;