$(() => {
    $(window).on('load', function hidePreloader() {
        $('.preloader__wrapper').removeClass('preloader-is-loading');

        gsap.timeline({
            defaults: {
                ease: "power3.inOut",
            },
            onComplete: function () {
                $('body').removeClass('fixed');
                $('.preloader__wrapper').fadeOut();
            }
        })
            .to('.preloader__house-icon', 1, {
                x: 0,
            })
            .to('.preloader__title', 1.2, {
                x: 0,
            }, "-=0.1")
            .to('.preloader__wrapper', 1.5, {
                y: '-102%'
            }, "+=0.5");

    });
});

$(() => {
    $('.js-toggle-menu').on('click', function () {
        $('.header-menu').toggleClass('header-menu--active');
        $('.header').toggleClass('header--active');
        $(this).toggleClass('header__burger--active');
        $('body').toggleClass('fixed');

        if ($(window).width() < 576) {
            $('.header.header--search').removeClass('header--search');
            $('.header-search.header-search--active').removeClass('header-search--active');
        }
    });

    $('.js-toggle-search').on('click', function () {
        $('.header-search').toggleClass('header-search--active');

        if ($(window).width() < 576) {
            $('.header').toggleClass('header--search');
        }
    });

    $(document).on('click', function (e) {
        const container = $('.header');
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            $('.header-search').removeClass('header-search--active');
        }
    });

    $('.js-scrollto-news').on('click', function () {
        const offset = $('#news-info').offset().top;
        $('html, body').animate({
            scrollTop: offset
        }, 1000);
    });

    $('.js-scrollto-about').on('click', function () {
        const offset = $('#about').offset().top;
        $('html, body').animate({
            scrollTop: offset
        }, 1000);
    });

    const offerSlider = new Swiper(".js-offer-top-slider", {
        speed: 2000,
        slidesPerView: 1,
        watchSlidesProgress: true,
        navigation: {
            nextEl: ".js-offer-next",
            prevEl: ".js-offer-prev",
        },
        scrollbar: {
            el: '.js-offer-top-scrollbar',
            hide: false,
            snapOnRelease: true,
            draggable: true,
        },
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },

    });

    const offerCard = new Swiper(".js-offer-card-slider", {
        speed: 2000,
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
        scrollbar: {
            el: '.js-info-slider-scrollbar',
            hide: false,
            snapOnRelease: true,
            draggable: true,
        },
        on: {
            afterInit: function () {
                $('.js-info-slider-slide').html(`0${this.activeIndex + 1}`);
                $('.js-info-slider-length').html(`0${this.slides.length}`);
            },
            slideChange: function () {
                $('.js-info-slider-slide').html(`0${this.activeIndex + 1}`)
            }
        }
    });
    const perfomanceSlider = new Swiper('.js-perfomance-top-slider', {
        speed: 1500,
        freeMode: false,
        watchSlidesProgress: true,
        slidesPerView: 1,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        navigation: {
            nextEl: '.js-perfomance-top-prev',
            prevEl: '.js-perfomance-top-next',
        },
        scrollbar: {
            el: '.js-perfomance-scrollbar',
            hide: false,
            snapOnRelease: true,
            draggable: true,
        },
    });

    const perfomanceOthersSlider = new Swiper('.js-perfomance-others-slider', {
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
        scrollbar: {
            el: '.js-perfomance-others-scrollbar',
            hide: false,
            snapOnRelease: true,
            draggable: true,
        },
        navigation: {
            nextEl: ".js-perfomance-others-next",
            prevEl: ".js-perfomance-others-prev",
        },
    });

    gsap.timeline({
        defaults: {
            ease: "power3.inOut",
        },
        scrollTrigger: {
            trigger: $('.info'),
            start: "10% center",
            end: "50% center",
            scrub: true,
        }
    })
        .from('.info__picture--1', 1, {
            yPercent: 20,
        })
        .from('.info__first-content', 1, {
            yPercent: -30
        }, "-=1");

    gsap.timeline({
        defaults: {
            ease: "power3.inOut",
        },
        scrollTrigger: {
            trigger: $('.info'),
            start: "30% center",
            end: "70% center",
            scrub: true,
        }
    })
        .from('.info__picture--2', 1, {
            yPercent: -20,
        })
        .from('.info__card', 1, {
            yPercent: 20
        }, "-=1");

    gsap.utils.toArray('.js-about-animation > section').forEach((el) => {
        gsap.timeline({
            defaults: {
                ease: "power3.inOut",
            },
            scrollTrigger: {
                trigger: el,
                start: "top center",
            }
        })
            .fromTo(el, 1, {
                autoAlpha: 0.13,
                yPercent: 4,
            }, {
                autoAlpha: 1,
                yPercent: 0,
            })
    });
    gsap.utils.toArray('.js-history-animation > section').forEach((el) => {
        gsap.timeline({
            defaults: {
                ease: "power3.inOut",
            },
            scrollTrigger: {
                trigger: el,
                start: "top center",
            }
        })
            .fromTo(el, 1, {
                autoAlpha: 0.63,
                // yPercent: 3,
            }, {
                autoAlpha: 1,
                // yPercent: 0,
            })
    });
    gsap.utils.toArray('.js-history-bottom-animation > section').forEach((el) => {
        gsap.timeline({
            defaults: {
                ease: "power3.inOut",
            },
            scrollTrigger: {
                trigger: el,
                start: "top center",
            }
        })
            .fromTo(el, 1, {
                autoAlpha: 0.33,
                // yPercent: 3,
            }, {
                autoAlpha: 1,
                // yPercent: 0,
            })
    });

    // $(() => {
    //     // products
    //     const productsAnimation = gsap.timeline({
    //         defaults: {
    //             ease: "power3.inOut"
    //         },
    //         scrollTrigger: {
    //             trigger: '.cabinets',
    //             start: "top center",
    //             end: "+=370",
    //             scrub: 4.5
    //         }
    //     });
    //
    //     productsAnimation.to('.products-clouds', {
    //         yPercent: 40,
    //         // delay: 0
    //         duration: 2.5,
    //     }, "-=1");
    //
    //     productsAnimation.fromTo('.cabinets-pictures', {
    //         autoAlpha: 0,
    //         yPercent: 100,
    //     }, {
    //         autoAlpha: 1,
    //         yPercent: 0,
    //         duration: 2.6,
    //     }, "-=2.4");
    // });
});


