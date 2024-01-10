// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require activestorage
//= require turbolinks
//= require jquery
//= require jquery_ujs
//= require bootstrap.min
//= require_tree .


$(document).ready(function(){
	jQuery('.owl-slider').owlCarousel({
        loop: true,
        autoplay: true,
        responsive: true,
        margin: 0,
        nav: false,
        dots: false,
        autoplaySpeed: 1500,
        navSpeed: 1500,
        paginationSpeed: 1500,
        slideSpeed: 1500,
        navText: ['<i class="la la-arrow-left"></i>', '<i class="la la-arrow-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 1
            },
            1024: {
                items: 1
            },
            1200: {
                items: 1
            }
        }
    })

    /* image-carousel no margin function by = owl.carousel.js */
    jQuery('.courses-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        responsive: true,
        margin: 0,
        nav: false,
        dots: false,
        autoplaySpeed: 1500,
        navSpeed: 1500,
        paginationSpeed: 1500,
        slideSpeed: 1500,
        navText: ['<i class="la la-arrow-left"></i>', '<i class="la la-arrow-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            700: {
                items: 3
            },
            1024: {
                items: 4
            },
            1200: {
                items: 4
            }
        }
    })

    /* image-carousel no margin function by = owl.carousel.js */
    jQuery('.courses-carousel-2').owlCarousel({
        loop: true,
        autoplay: true,
        responsive: true,
        margin: 30,
        nav: false,
        dots: false,
        autoplaySpeed: 1500,
        navSpeed: 1500,
        paginationSpeed: 1500,
        slideSpeed: 1500,
        navText: ['<i class="la la-arrow-left"></i>', '<i class="la la-arrow-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 1
            },
            1024: {
                items: 3
            },
            1200: {
                items: 3
            }
        }
    })

    /* image-carousel no margin function by = owl.carousel.js */
    jQuery('.client-carousel-3').owlCarousel({
        loop: true,
        autoplay: true,
        responsive: true,
        margin: 10,
        nav: false,
        dots: false,
        autoplaySpeed: 1500,
        navSpeed: 1500,
        paginationSpeed: 1500,
        slideSpeed: 1500,
        navText: ['<i class="la la-arrow-left"></i>', '<i class="la la-arrow-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 1
            },
            1024: {
                items: 2
            },
            1200: {
                items: 2
            }
        }
    })

    /*  Blog post Carousel function by = owl.carousel.js */
    jQuery('.blog-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        margin: 30,
        nav: true,
        dots: false,
        autoplaySpeed: 1000,
        navSpeed: 1000,
        paginationSpeed: 1000,
        slideSpeed: 1000,
        navText: ['<i class="flaticon-left-arrow"></i>', '<i class="flaticon-right-arrow"></i>'],
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            991: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    })

    /*  Blog post Carousel function by = owl.carousel.js */
    jQuery('.gallery-carousel').owlCarousel({
        loop: false,
        autoplay: true,
        margin: 30,
        nav: true,
        autoplaySpeed: 1000,
        navSpeed: 1000,
        paginationSpeed: 1000,
        slideSpeed: 1000,
        dots: false,
        navText: ['', ''],
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            991: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    })

    /*  Blog post Carousel function by = owl.carousel.js */
    jQuery('.team-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        margin: 30,
        nav: true,
        autoplaySpeed: 1000,
        navSpeed: 1000,
        paginationSpeed: 1000,
        slideSpeed: 1000,
        dots: false,
        navText: ['', ''],
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            991: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    })

    /*  Blog post Carousel function by = owl.carousel.js */
    jQuery('.client-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        margin: 0,
        nav: true,
        autoplaySpeed: 1500,
        navSpeed: 1500,
        paginationSpeed: 1500,
        slideSpeed: 1500,
        dots: false,
        navText: ['', ''],
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 1
            },
            991: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })

    /*  Blog post Carousel function by = owl.carousel.js */
    jQuery('.client-carousel-2').owlCarousel({
        loop: true,
        autoplay: true,
        margin: 30,
        nav: true,
        autoplaySpeed: 1500,
        navSpeed: 1500,
        paginationSpeed: 1500,
        slideSpeed: 1500,
        dots: false,
        navText: ['<i class="la la-arrow-left"></i>', '<i class="la la-arrow-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 1
            },
            991: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    })
    /*  Blog post Carousel function by = owl.carousel.js */
    jQuery('.client-logo-bx').owlCarousel({
        loop: true,
        autoplay: true,
        responsive: true,
        margin: 30,
        nav: true,
        dots: false,
        autoplaySpeed: 1500,
        navSpeed: 1500,
        paginationSpeed: 1500,
        slideSpeed: 1500,
        navText: ['<i class="la la-arrow-left"></i>', '<i class="la la-arrow-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 4
            },
            991: {
                items: 4
            },
            1000: {
                items: 4
            }
        }
    })
})
