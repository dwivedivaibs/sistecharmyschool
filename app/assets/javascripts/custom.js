(function ($) {
    "use strict";
     
    /**
Core script to handle the entire theme and core functions
**/
    var smartClass = function () {
        /* Search Bar ============ */
        var siteUrl = '';

        var screenWidth = $(window).width();

        var homeSearch = function () {
            'use strict';
            /* top search in header on click function */
            var quikSearch = jQuery("#quik-search-btn");
            var quikSearchRemove = jQuery("#quik-search-remove");

            quikSearch.on('click', function () {

                jQuery('.dlab-quik-search').fadeIn(500);
                jQuery('.dlab-quik-search').addClass('On');

            });

            quikSearchRemove.on('click', function () {
                jQuery('.dlab-quik-search').fadeOut(500);
                jQuery('.dlab-quik-search').removeClass('On');

            });
            /* top search in header on click function End*/
        }

        var cartButton = function () {
            $(".item-close").on('click', function () {
                $(this).closest(".cart-item").hide('500');
            });
            $('.cart-btn').unbind().on('click', function () {
                $(".cart-list").slideToggle('slow');
            })

        }

        /* One Page Layout ============ */
        var onePageLayout = function () {
            'use strict';
            var headerHeight = parseInt($('.onepage').css('height'), 10);
            $(".scroll").unbind().on('click', function (event) {
                event.preventDefault();

                if (this.hash !== "") {
                    var hash = this.hash;
                    var seactionPosition = $(hash).offset().top;
                    var headerHeight = parseInt($('.onepage').css('height'), 10);


                    $('body').scrollspy({ target: ".navbar", offset: headerHeight + 2 });

                    var scrollTopPosition = seactionPosition - (headerHeight);

                    $('html, body').animate({
                        scrollTop: scrollTopPosition
                    }, 800, function () {

                    });
                }
            });
            if (jQuery(".scroll-bar").length > 0) {
                $(".scroll-bar").unbind().on('click', function (event) {
                    event.preventDefault();

                    if (this.hash !== "") {
                        var hash = this.hash;
                        var seactionPosition = $(hash).offset().top;
                        var headerHeight = parseInt($('.onepage').css('height'), 10);


                        $('body').scrollspy({ target: ".navbar", offset: headerHeight + 2 });

                        var scrollTopPosition = seactionPosition - (headerHeight) + 500;

                        $('html, body').animate({
                            scrollTop: scrollTopPosition
                        }, 800, function () {

                        });
                    }
                });
            }
            $('body').scrollspy({ target: ".navbar", offset: headerHeight + 2 });
        }

        /* Header Height ============ */
        var handleResizeElement = function () {
            $('.header').css('height', '');
            var headerHeight = $('.header').height();
            $('.header').css('height', headerHeight);
        }

        /* Load File ============ */
        var dzTheme = function () {
            'use strict';


            if (screenWidth <= 991) {
                jQuery('.navbar-nav > li > a, .sub-menu > li > a').unbind().on('click', function (e) {
                    //e.preventDefault();
                    if (jQuery(this).parent().hasClass('open')) {
                        jQuery(this).parent().removeClass('open');
                    }
                    else {
                        jQuery(this).parent().parent().find('li').removeClass('open');
                        jQuery(this).parent().addClass('open');
                    }
                });
            }

            jQuery('.full-sidenav .navbar-nav > li > a').next('.sub-menu').slideUp();
            jQuery('.full-sidenav .sub-menu > li > a').next('.sub-menu').slideUp();

            jQuery('.full-sidenav .navbar-nav > li > a, .full-sidenav .sub-menu > li > a').unbind().on('click', function (e) {
                jQuery('.full-sidenav .navbar-nav > li > a').not(this).next('.sub-menu').slideUp();
                jQuery(this).next('.sub-menu').toggle(500);
            });

            jQuery('.menu-icon').on('click', function () {
                jQuery('.menu-close,.full-sidenav').addClass('active');
            });
            jQuery('.menu-close').on('click', function () {
                jQuery('.menu-close,.full-sidenav').removeClass('active');
            });
        }

      
        /* Scroll To Top ============ */
        var scrollTop = function () {
            'use strict';
            var scrollTop = jQuery("button.scroltop");
            /* page scroll top on click function */
            scrollTop.on('click', function () {
                jQuery("html, body").animate({
                    scrollTop: 0
                }, 1000);
                return false;
            })

            jQuery(window).on("scroll", function () {
                var scroll = jQuery(window).scrollTop();
                if (scroll > 900) {
                    jQuery("button.scroltop").fadeIn(1000);
                } else {
                    jQuery("button.scroltop").fadeOut(1000);
                }
            });

            /* page scroll top on click function end*/
        }

        /* handle Placeholder ============ */
        var handlePlaceholder = function () {
            /* input placeholder for ie9 & ie8 & ie7 */
            jQuery.support.placeholder = ('placeholder' in document.createElement('input'));
            /* input placeholder for ie9 & ie8 & ie7 end*/

            /*fix for IE7 and IE8  */
            if (!jQuery.support.placeholder) {
                jQuery("[placeholder]").on('focus', function () {
                    if (jQuery(this).val() == jQuery(this).attr("placeholder")) jQuery(this).val("");
                }).on('blur', function () {
                    if (jQuery(this).val() == "") jQuery(this).val(jQuery(this).attr("placeholder"));
                }).blur();

                jQuery("[placeholder]").parents("form").on('submit', function () {
                    jQuery(this).find('[placeholder]').each(function () {
                        if (jQuery(this).val() == jQuery(this).attr("placeholder")) {
                            jQuery(this).val("");
                        }
                    });
                });
            }
            /*fix for IE7 and IE8 end */
        }

        /* Equal Height ============ */
        var equalHeight = function (container) {

            if (jQuery(container).length == 0) {
                return false
            }

            var currentTallest = 0,
                currentRowStart = 0,
                rowDivs = new Array(),
                $el, topPosition = 0;

            $(container).each(function () {
                $el = $(this);
                $($el).height('auto')
                topPostion = $el.position().top;

                if (currentRowStart != topPostion) {
                    for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
                        rowDivs[currentDiv].height(currentTallest);
                    }
                    rowDivs.length = 0; // empty the array
                    currentRowStart = topPostion;
                    currentTallest = $el.height();
                    rowDivs.push($el);
                } else {
                    rowDivs.push($el);
                    currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
                }
                for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
                    rowDivs[currentDiv].height(currentTallest);
                }
            });

        }

        /* Footer Align ============ */
        var footerAlign = function () {
            'use strict';
            jQuery('.site-footer').css('display', 'block');
            jQuery('.site-footer').css('height', 'auto');
            var footerHeight = jQuery('.site-footer').outerHeight();
            jQuery('.footer-fixed > .page-wraper').css('padding-bottom', footerHeight);
            jQuery('.site-footer').css('height', footerHeight);
        }

        /* File Input ============ */
        var fileInput = function () {
            'use strict';
            /* Input type file jQuery */
            jQuery(document).on('change', '.btn-file :file', function () {
                var input = jQuery(this);
                var numFiles = input.get(0).files ? input.get(0).files.length : 1;
                var label = input.val().replace(/\\/g, 'https://sainikschooljhansi.com/').replace(/.*\//, '');
                input.trigger('fileselect', [numFiles, label]);
            });

            jQuery('.btn-file :file').on('fileselect', function (event, numFiles, label) {
                input = jQuery(this).parents('.input-group').find(':text');
                var log = numFiles > 10 ? numFiles + ' files selected' : label;

                if (input.length) {
                    input.val(log);
                } else {
                    if (log) alert(log);
                }
            });
            /* Input type file jQuery end*/
        }

        /* Header Fixed ============ */
        var headerFix = function () {
            'use strict';
            /* Main navigation fixed on top  when scroll down function custom */
            jQuery(window).on('scroll', function () {
                if (jQuery('.sticky-header').length > 0) {
                    var menu = jQuery('.sticky-header');
                    if ($(window).scrollTop() > menu.offset().top) {
                        menu.addClass('is-fixed');
                        $('.header-smartClass .container > .logo-header .logo').attr('src', 'images/logo.png');
                    } else {
                        menu.removeClass('is-fixed');
                        $('.header-smartClass .container > .logo-header .logo').attr('src', 'images/logo.png')
                    }
                }
            });
            /* Main navigation fixed on top  when scroll down function custom end*/
        }

        /* Masonry Box ============ */
        var masonryBox = function () {
            'use strict';
            /* masonry by  = bootstrap-select.min.js */
            if (jQuery('#masonry, .masonry').length) {
                var self = $("#masonry, .masonry");
                if (jQuery('.card-container').length) {
                    var columnWidthValue = (self.attr('data-column-width') === undefined) ? '' : self.attr('data-column-width');
                    if (columnWidthValue != '') { columnWidthValue = parseInt(columnWidthValue); }
                    self.imagesLoaded(function () {
                        self.masonry({
                            columnWidth: columnWidthValue,
                            gutterWidth: 15,
                            isAnimated: true,
                            itemSelector: ".card-container"
                        });
                    });
                }
            }
            if (jQuery('.filters').length) {
                jQuery(".filters").on('click', 'li', function (e) {
                    e.preventDefault();
                    var filter = $(this).attr("data-filter");
                    self.masonryFilter({
                        filter: function () {
                            if (!filter) return true;
                            //return $(this).attr("data-filter") == filter;
                            return $(this).hasClass(filter);
                        }
                    });
                });
            }
            /* masonry by  = bootstrap-select.min.js end */
        }



        /* Set Div Height ============ */
        var setDivHeight = function () {
            'use strict';
            var allHeights = [];
            jQuery('.dzseth > div, .dzseth .img-cover, .dzseth .seth').each(function (e) {
                allHeights.push(jQuery(this).height());
            })

            jQuery('.dzseth > div, .dzseth .img-cover, .dzseth .seth').each(function (e) {
                var maxHeight = Math.max.apply(Math, allHeights);
                jQuery(this).css('height', maxHeight);
            })

            allHeights = [];
            /* Removice */
            //var screenWidth = $( window ).width();
            if (screenWidth < 991) {
                jQuery('.dzseth > div, .dzseth .img-cover, .dzseth .seth').each(function (e) {
                    jQuery(this).css('height', '');
                })
            }
        }

        /* Counter Number ============ */
        var counter = function () {
            if (jQuery('.counter').length) {
                jQuery('.counter').counterUp({
                    delay: 10,
                    time: 3000
                });
            }
        }

       /* Gallery Filter ============ */
        var handleFilterMasonary = function () {
            /* gallery filter activation = jquery.mixitup.min.js */
            if (jQuery('#image-gallery-mix').length) {
                jQuery('.gallery-filter').find('li').each(function () {
                    $(this).addClass('filter');
                });
                jQuery('#image-gallery-mix').mixItUp();
            };
            if (jQuery('.gallery-filter.masonary').length) {
                jQuery('.gallery-filter.masonary').on('click', 'span', function () {
                    var selector = $(this).parent().attr('data-filter');
                    jQuery('.gallery-filter.masonary span').parent().removeClass('active');
                    jQuery(this).parent().addClass('active');
                    jQuery('#image-gallery-isotope').isotope({ filter: selector });
                    return false;
                });
            }
            /* gallery filter activation = jquery.mixitup.min.js */
        }

        /* handle Bootstrap Select ============ */
        var handleBootstrapSelect = function () {
            /* Bootstrap Select box function by  = bootstrap-select.min.js */
            if (jQuery('select').length) {
                jQuery('select').selectpicker();
            }
            /* Bootstrap Select box function by  = bootstrap-select.min.js end*/
        }

        /* handle Bootstrap Touch Spin ============ */
        var handleBootstrapTouchSpin = function () {
            if (jQuery("input[name='demo_vertical2']").length) {
                jQuery("input[name='demo_vertical2']").TouchSpin({
                    verticalbuttons: true,
                    verticalupclass: 'ti-plus',
                    verticaldownclass: 'ti-minus'
                });
            }
        }
        /* Resizebanner ============ */
        var handleBannerResize = function () {
            $(".full-height").css("height", $(window).height());
        }

        /* Countdown ============ */
        var handleCountDown = function (WebsiteLaunchDate) {
            /* Time Countr Down Js */
            if ($(".countdown").length) {
                $('.countdown').countdown({ date: WebsiteLaunchDate + ' 23:5' }, function () {
                    $('.countdown').text('we are live');
                });
            }
            /* Time Countr Down Js End */
        }

        /* Content Scroll ============ */
        var handleCustomScroll = function () {
            /* all available option parameters with their default values */
            if ($(".content-scroll").length) {
                $(".content-scroll").mCustomScrollbar({
                    setWidth: false,
                    setHeight: false,
                    axis: "y"
                });
            }
        }

        /* WOW ANIMATION ============ */
        var wow_animation = function () {
            if ($('.wow').length > 0) {
                var wow = new WOW(
                    {
                        boxClass: 'wow',      // animated element css class (default is wow)
                        animateClass: 'animated', // animation css class (default is animated)
                        offset: 50,          // distance to the element when triggering the animation (default is 0)
                        mobile: false       // trigger animations on mobile devices (true is default)
                    });
                wow.init();
            }
        }

        /* Left Menu ============ */
        var handleSideBarMenu = function () {
            $('.openbtn').on('click', function (e) {
                e.preventDefault();
                if ($('#mySidenav').length > 0) {
                    document.getElementById("mySidenav").style.left = "0";
                }

                if ($('#mySidenav1').length > 0) {
                    document.getElementById("mySidenav1").style.right = "0";
                }

            })

            $('.closebtn').on('click', function (e) {
                e.preventDefault();
                if ($('#mySidenav').length > 0) {
                    document.getElementById("mySidenav").style.left = "-300px";
                }

                if ($('#mySidenav1').length > 0) {
                    document.getElementById("mySidenav1").style.right = "-820px";
                }
            })
        }

        /* Left Menu ============ */
        var handleMenuPosition = function () {
            $(".header-nav li").unbind().each(function (e) {
                if ($('ul', this).length) {
                    var elm = $('ul:first', this);
                    var off = elm.offset();
                    var l = off.left;
                    var w = elm.width();
                    var docH = $("body").height();
                    var docW = $("body").width();

                    var isEntirelyVisible = (l + w <= docW);

                    if (!isEntirelyVisible) {
                        $(this).find('.sub-menu:first').addClass('left');
                    } else {
                        $(this).find('.sub-menu:first').removeClass('left');
                    }
                }
            });
        }

      

        /* BGEFFECT ============ */
        var handleBGElements = function () {

            if (screenWidth > 1023) {
                if (jQuery('.bgeffect').length) {
                    var s = skrollr.init({
                        edgeStrategy: 'set',
                        easing: {
                            WTF: Math.random,
                            inverted: function (p) {
                                return 1 - p;
                            }
                        }
                    });
                }
            }
        }

        var boxHover = function () {

            jQuery('.box-hover').on('mouseenter', function () {
                jQuery('.box-hover').removeClass('active');
                jQuery(this).addClass('active');

            })
        }

        var reposition = function () {
            'use strict';
            var modal = jQuery(this),
                dialog = modal.find('.modal-dialog');
            modal.css('display', 'block');

            /* Dividing by two centers the modal exactly, but dividing by three 
             or four works better for larger screens.  */
            dialog.css("margin-top", Math.max(0, (jQuery(window).height() - dialog.height()) / 2));
        }

        var handleResize = function () {

            /* Reposition when the window is resized */
            jQuery(window).on('resize', function () {
                jQuery('.modal:visible').each(reposition);
                equalHeight('.equal-wraper .equal-col');
                footerAlign();
            });
        }

        var handlePlaceholderAnimation = function () {
            if (jQuery('.dezPlaceAni').length) {

                $('.dezPlaceAni input, .dezPlaceAni textarea').on('focus', function () {
                    $(this).parents('.form-group, .news-box').addClass('focused');
                });

                $('.dezPlaceAni input, .dezPlaceAni textarea').on('blur', function () {
                    var inputValue = $(this).val();
                    if (inputValue == "") {
                        $(this).removeClass('filled');
                        $(this).parents('.form-group, .news-box').removeClass('focused');
                    } else {
                        $(this).addClass('filled');
                    }
                })
            }
        }

        var btnAware = function () {

            $('.btn-aware')
                .on('mouseenter', function (e) {
                    var parentOffset = $(this).offset(),
                        relX = e.pageX - parentOffset.left,
                        relY = e.pageY - parentOffset.top;
                    $(this).find('span').css({ top: relY, left: relX })
                })
                .on('mouseout', function (e) {
                    var parentOffset = $(this).offset(),
                        relX = e.pageX - parentOffset.left,
                        relY = e.pageY - parentOffset.top;
                    $(this).find('span').css({ top: relY, left: relX })
                });
        }

        var isScrolledIntoView = function (elem) {
            var $elem = $(elem);
            var $window = $(window);

            var docViewTop = $window.scrollTop();
            var docViewBottom = docViewTop + $window.height();

            var elemTop = $elem.offset().top;
            var elemBottom = elemTop + $elem.height();

            return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
        }

        var splitImageAnimation = function () {

            $(window).on('scroll', function () {
                $('.split-box').each(function () {
                    if (isScrolledIntoView($(this))) {
                        $(this).addClass('split-active');
                    }
                });
            });
        }

        var heartBlast = function () {
            $(".heart").on("click", function () {
                $(this).toggleClass("heart-blast");
            });
        }

     
        /* Website Launch Date */
        var WebsiteLaunchDate = new Date();
        var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        WebsiteLaunchDate.setMonth(WebsiteLaunchDate.getMonth() + 1);
        WebsiteLaunchDate = WebsiteLaunchDate.getDate() + " " + monthNames[WebsiteLaunchDate.getMonth()] + " " + WebsiteLaunchDate.getFullYear();
        /* Website Launch Date END */


        /* Function ============ */
        return {
            init: function () {
                boxHover();
               
                dzTheme();
                handleResizeElement();
                homeSearch();
               
                scrollTop();
                handlePlaceholder();
                handlePlaceholderAnimation();
                fileInput();
                headerFix();
                setDivHeight();
                //handleVideo();
                handleFilterMasonary();
                handleCountDown(WebsiteLaunchDate);
                handleCustomScroll();
                handleSideBarMenu();
                cartButton();
                handleBannerResize();
                handleResize();
                heartBlast();
                onePageLayout();
                btnAware();
                splitImageAnimation();               
              
            },


            onPageloading: function () {
                handleBGElements();
                handleBootstrapSelect();
                handleBootstrapTouchSpin();
                equalHeight('.equal-wraper .equal-col');
                counter();
                handleMenuPosition();
                masonryBox();                
            },

            resize: function () {
                screenWidth = $(window).width();
                dzTheme();
                handleResizeElement();
                handleSideBarMenu();
                handleMenuPosition();
                setDivHeight();
            }
        }

    }();

    $(function () {
        var url = window.location.pathname;
        var activePage = url.substring(url.lastIndexOf('/') + 1);
        $('#nvmenu li a').each(function () {
            var linkPage = this.href.substring(this.href.lastIndexOf('/') + 1);

            if (activePage === linkPage) {
                $(this).parent().addClass('active');
                var parentDropDown = $(this).closest('.smenu');
                if (parentDropDown !== undefined) {
                    parentDropDown.addClass('active');
                }
            }

        });

       

        $('[data-toggle="tooltip"]').tooltip();
    });

    /* Document.ready Start */
    jQuery(document).ready(function () {
        
        new DataTable('.dtt', {
            stateSave: true,
            order: [[1, 'desc']],
            "ordering": false
        });
       
        smartClass.init();

        jQuery('.navicon').on('click', function () {
            $(this).toggleClass('open');
        });

        $('a[data-toggle="tab"]').on('click', function () {
            // todo remove snippet on bootstrap v4
            $('a[data-toggle="tab"]').on('click', function () {
                $($(this).attr('href')).show().addClass('show active').siblings().hide();
            })
        });
    });
    /* Document.ready END */

    /* Window Load START */
    jQuery(window).on("load", function (e) {
        smartClass.onPageloading();
        setTimeout(function () {
            jQuery('#loading-area').remove();
        }, 0);
    });
    /*  Window Load END */
    /* Window Resize START */
    jQuery(window).on('resize', function () {
        'use strict';
        smartClass.resize();
    });
    /*  Window Resize END */

    /* image-carousel no margin function by = owl.carousel.js */
    

})(jQuery);
