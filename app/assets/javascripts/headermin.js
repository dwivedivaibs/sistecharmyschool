﻿!function (e) {
    "use strict";
    var t, i, n, a, r, o, l, s, u, c, h, d = (t = e(window).width(),
        i = function () {
            e(".header").css("height", "");
            var t = e(".header").height(); e(".header").css("height", t)
        }, n = function () {
            t <= 991 && jQuery(".navbar-nav > li > a, .sub-menu > li > a").unbind().on("click", function (e) {
                jQuery(this).parent().hasClass("open") ? jQuery(this).parent().removeClass("open") : (jQuery(this).parent().parent().find("li").removeClass("open"), jQuery(this).parent().addClass("open"))
            }), jQuery(".full-sidenav .navbar-nav > li > a").next(".sub-menu").slideUp(), jQuery(".full-sidenav .sub-menu > li > a").next(".sub-menu").slideUp(),
                jQuery(".full-sidenav .navbar-nav > li > a, .full-sidenav .sub-menu > li > a").unbind().on("click", function (e) {
                    jQuery(".full-sidenav .navbar-nav > li > a").not(this).next(".sub-menu").slideUp(),
                        jQuery(this).next(".sub-menu").toggle(500)
                }), jQuery(".menu-icon").on("click", function () {
                    jQuery(".menu-close,.full-sidenav").addClass("active")
                }), jQuery(".menu-close").on("click", function () {
                    jQuery(".menu-close,.full-sidenav").removeClass("active")
                })
        }, a = function (t) {
        if (0 == jQuery(t).length) return !1; var i, n = 0, a = 0, r = new Array;
        e(t).each(function () {
            if (i = e(this), e(i).height("auto"), topPostion = i.position().top, a != topPostion) {
                for (currentDiv = 0; currentDiv < r.length; currentDiv++)r[currentDiv].height(n); r.length = 0, a = topPostion, n = i.height(), r.push(i)
            } else r.push(i), n = n < i.height() ? i.height() : n;
            for (currentDiv = 0; currentDiv < r.length; currentDiv++)r[currentDiv].height(n)
        })
        }, r = function () {
            var e = []; jQuery(".dzseth > div, .dzseth .img-cover, .dzseth .seth").each(function (t) {
                e.push(jQuery(this).height())
            }), jQuery(".dzseth > div, .dzseth .img-cover, .dzseth .seth").each(function (t) { var i = Math.max.apply(Math, e); jQuery(this).css("height", i) }), e = [], t < 991 && jQuery(".dzseth > div, .dzseth .img-cover, .dzseth .seth").each(function (e) { jQuery(this).css("height", "") })
        }, o = function () {
            e(".openbtn").on("click", function (t) {
                t.preventDefault(), e("#mySidenav").length > 0 && (document.getElementById("mySidenav").style.left = "0"), e("#mySidenav1").length > 0 && (document.getElementById("mySidenav1").style.right = "0")
            }), e(".closebtn").on("click", function (t) {
                t.preventDefault(), e("#mySidenav").length > 0 && (document.getElementById("mySidenav").style.left = "-300px"), e("#mySidenav1").length > 0 && (document.getElementById("mySidenav1").style.right = "-820px")
            })
        }, l = function () {
            e(".header-nav li").unbind().each(function (t) {
                if (e("ul", this).length) {
                    var i = e("ul:first", this), n = i.offset().left, a = i.width();
                    e("body").height(); n + a <= e("body").width() ? e(this).find(".sub-menu:first").removeClass("left") : e(this).find(".sub-menu:first").addClass("left")
                }
            })
        }, s = function () {
        var e = jQuery(this),
            t = e.find(".modal-dialog");
        e.css("display", "block"),
            t.css("margin-top", Math.max(0, (jQuery(window).height() - t.height()) / 2))
        }, u = function () {
        jQuery(window).on("resize", function () {
            jQuery(".modal:visible").each(s), a(".equal-wraper .equal-col"),
                function () {
                    jQuery(".site-footer").css("display", "block"),
                    jQuery(".site-footer").css("height", "auto");
                var e = jQuery(".site-footer").outerHeight(); jQuery(".footer-fixed > .page-wraper").css("padding-bottom", e),
                    jQuery(".site-footer").css("height", e)
                }()
        })
        }, c = function () {
        e(window).on("scroll", function () {
            e(".split-box").each(function () {
                var t, i, n, a, r, o; t = e(this), i = e(t), n = e(window), a = n.scrollTop(), r = a + n.height(),
                    (o = i.offset().top) + i.height() <= r && o >= a && e(this).addClass("split-active")
            })
        })
        }, (h = new Date).setMonth(h.getMonth() + 1),
        h = h.getDate() + " " + ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][h.getMonth()] + " " + h.getFullYear(), {
            init: function () {
                var t, a, l; jQuery(".box-hover").on("mouseenter", function () {
                    jQuery(".box-hover").removeClass("active"), jQuery(this).addClass("active")
                }), e(".price-slide, .price-slide-2").length > 0 && e("#slider-range,#slider-range-2").slider({
                    range: !0, min: 300, max: 4e3, values: [0, 5e3], slide: function (t, i) { var n = i.values[0], a = i.values[1]; e("#" + this.id).prev().val("$" + n + " - $" + a) }
                }), n(), i(), t = jQuery("#quik-search-btn"), a = jQuery("#quik-search-remove"), t.on("click", function () { jQuery(".dlab-quik-search").fadeIn(500), jQuery(".dlab-quik-search").addClass("On") }), a.on("click", function () { jQuery(".dlab-quik-search").fadeOut(500), jQuery(".dlab-quik-search").removeClass("On") }), jQuery(".mfp-gallery-with-owl").length && jQuery(".mfp-gallery-with-owl").magnificPopup({ delegate: ".mfp-link", type: "image", tLoading: "Loading image #%curr%...", mainClass: "mfp-img-mobile", gallery: { enabled: !0, navigateByImgClick: !0, preload: [0, 1] }, image: { tError: '<a href="%url%">The image #%curr%</a> could not be loaded.', titleSrc: function (e) { return e.el.attr("title") + "<small></small>" } } }), jQuery(".mfp-gallery").length && jQuery(".mfp-gallery").magnificPopup({ delegate: ".mfp-link", type: "image", tLoading: "Loading image #%curr%...", mainClass: "mfp-img-mobile", gallery: { enabled: !0, navigateByImgClick: !0, preload: [0, 1] }, image: { tError: '<a href="%url%">The image #%curr%</a> could not be loaded.', titleSrc: function (e) { return e.el.attr("title") + "<small></small>" } } }), jQuery(".mfp-video").length && jQuery(".mfp-video").magnificPopup({ type: "iframe", iframe: { markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe><div class="mfp-title">Some caption</div></div>' }, callbacks: { markupParse: function (e, t, i) { t.title = i.el.attr("title") } } }), e(".popup-youtube, .popup-vimeo, .popup-gmaps").length && e(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({ disableOn: 700, type: "iframe", mainClass: "mfp-fade", removalDelay: 160, preloader: !1, fixedContentPos: !1 }), jQuery("button.scroltop").on("click", function () { return jQuery("html, body").animate({ scrollTop: 0 }, 1e3), !1 }), jQuery(window).on("scroll", function () { jQuery(window).scrollTop() > 900 ? jQuery("button.scroltop").fadeIn(1e3) : jQuery("button.scroltop").fadeOut(1e3) }), jQuery.support.placeholder = "placeholder" in document.createElement("input"), jQuery.support.placeholder || (jQuery("[placeholder]").on("focus", function () { jQuery(this).val() == jQuery(this).attr("placeholder") && jQuery(this).val("") }).on("blur", function () { "" == jQuery(this).val() && jQuery(this).val(jQuery(this).attr("placeholder")) }).blur(), jQuery("[placeholder]").parents("form").on("submit", function () { jQuery(this).find("[placeholder]").each(function () { jQuery(this).val() == jQuery(this).attr("placeholder") && jQuery(this).val("") }) })), jQuery(".dezPlaceAni").length && (e(".dezPlaceAni input, .dezPlaceAni textarea").on("focus", function () { e(this).parents(".form-group, .news-box").addClass("focused") }), e(".dezPlaceAni input, .dezPlaceAni textarea").on("blur", function () { "" == e(this).val() ? (e(this).removeClass("filled"), e(this).parents(".form-group, .news-box").removeClass("focused")) : e(this).addClass("filled") })), jQuery(document).on("change", ".btn-file :file", function () { var e = jQuery(this), t = e.get(0).files ? e.get(0).files.length : 1, i = e.val().replace(/\\/g, "https://smartclass.dexignzone.com/").replace(/.*\//, ""); e.trigger("fileselect", [t, i]) }), jQuery(".btn-file :file").on("fileselect", function (e, t, i) { input = jQuery(this).parents(".input-group").find(":text"); var n = t > 10 ? t + " files selected" : i; input.length ? input.val(n) : n && alert(n) }), jQuery(window).on("scroll", function () { if (jQuery(".sticky-header").length > 0) { var t = jQuery(".sticky-header"); e(window).scrollTop() > t.offset().top ? (t.addClass("is-fixed"), e(".header-smartClass .container > .logo-header .logo").attr("src", "images/logo.png")) : (t.removeClass("is-fixed"), e(".header-smartClass .container > .logo-header .logo").attr("src", "error-404.html")) } }), r(), jQuery('iframe[src*="youtube.com"]').wrap('<div class="embed-responsive embed-responsive-16by9"></div>'), jQuery('iframe[src*="vimeo.com"]').wrap('<div class="embed-responsive embed-responsive-16by9"></div>'), jQuery("#image-gallery-mix").length && (jQuery(".gallery-filter").find("li").each(function () { e(this).addClass("filter") }), jQuery("#image-gallery-mix").mixItUp()), jQuery(".gallery-filter.masonary").length && jQuery(".gallery-filter.masonary").on("click", "span", function () { var t = e(this).parent().attr("data-filter"); return jQuery(".gallery-filter.masonary span").parent().removeClass("active"), jQuery(this).parent().addClass("active"), jQuery("#image-gallery-isotope").isotope({ filter: t }), !1 }), function (t) { e(".countdown").length && e(".countdown").countdown({ date: t + " 23:5" }, function () { e(".countdown").text("we are live") }) }(h), e(".content-scroll").length && e(".content-scroll").mCustomScrollbar({ setWidth: !1, setHeight: !1, axis: "y" }), o(), e(".item-close").on("click", function () { e(this).closest(".cart-item").hide("500") }), e(".cart-btn").unbind().on("click", function () { e(".cart-list").slideToggle("slow") }), e(".full-height").css("height", e(window).height()), u(), e(".heart").on("click", function () { e(this).toggleClass("heart-blast") }), l = parseInt(e(".onepage").css("height"), 10), e(".scroll").unbind().on("click", function (t) { if (t.preventDefault(), "" !== this.hash) { var i = this.hash, n = e(i).offset().top, a = parseInt(e(".onepage").css("height"), 10); e("body").scrollspy({ target: ".navbar", offset: a + 2 }); var r = n - a; e("html, body").animate({ scrollTop: r }, 800, function () { }) } }), jQuery(".scroll-bar").length > 0 && e(".scroll-bar").unbind().on("click", function (t) { if (t.preventDefault(), "" !== this.hash) { var i = this.hash, n = e(i).offset().top, a = parseInt(e(".onepage").css("height"), 10); e("body").scrollspy({ target: ".navbar", offset: a + 2 }); var r = n - a + 500; e("html, body").animate({ scrollTop: r }, 800, function () { }) } }), e("body").scrollspy({ target: ".navbar", offset: l + 2 }), e(".btn-aware").on("mouseenter", function (t) { var i = e(this).offset(), n = t.pageX - i.left, a = t.pageY - i.top; e(this).find("span").css({ top: a, left: n }) }).on("mouseout", function (t) { var i = e(this).offset(), n = t.pageX - i.left, a = t.pageY - i.top; e(this).find("span").css({ top: a, left: n }) }), c(), jQuery(".modal").on("show.bs.modal", s), e('[data-toggle="tooltip"]').tooltip();
                    
            }, onPageloading: function () {
                t > 1023 && jQuery(".bgeffect").length && skrollr.init({
                    edgeStrategy: "set", easing: { WTF: Math.random, inverted: function (e) { return 1 - e } }
                }), jQuery("select").length && jQuery("select").selectpicker(),
                    jQuery("input[name='demo_vertical2']").length && jQuery("input[name='demo_vertical2']").TouchSpin({
                        verticalbuttons: !0, verticalupclass: "ti-plus", verticaldownclass: "ti-minus"
                    }), a(".equal-wraper .equal-col"), jQuery(".counter").length && jQuery(".counter").counterUp({
                        delay: 10, time: 3e3
                    }), l(), function () {
                        if (jQuery("#masonry, .masonry").length) {
                            var t = e("#masonry, .masonry");
                            if (jQuery(".card-container").length) {
                                var i = void 0 === t.attr("data-column-width") ? "" : t.attr("data-column-width"); "" != i && (i = parseInt(i)), t.imagesLoaded(function () { t.masonry({ columnWidth: i, gutterWidth: 15, isAnimated: !0, itemSelector: ".card-container" }) })
                            }
                        } jQuery(".filters").length && jQuery(".filters").on("click", "li", function (i) { i.preventDefault(); var n = e(this).attr("data-filter"); t.masonryFilter({ filter: function () { return !n || e(this).hasClass(n) } }) })
                    }();
        }, resize: function () { t = e(window).width(), n(), i(), o(), l(), r() }
    }); jQuery(document).ready(function () { d.init(), jQuery(".navicon").on("click", function () { e(this).toggleClass("open") }), e('a[data-toggle="tab"]').on("click", function () { e('a[data-toggle="tab"]').on("click", function () { e(e(this).attr("href")).show().addClass("show active").siblings().hide() }) }) }), jQuery(window).on("load", function (e) { d.onPageloading(), setTimeout(function () { jQuery("#loading-area").remove() }, 0) }), jQuery(window).on("resize", function () { d.resize() })
}(jQuery);