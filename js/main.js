jQuery(document).ready(function($) {

    'use strict';

    $(window).on("scroll", function() {
        if ($(window).scrollTop() > 100) {
            $(".header").addClass("active");
        } else {
            //remove the background property so it comes transparent again (defined in css)
            $(".header").removeClass("active");
        }
    });


    /************** Mixitup (Filter Projects) *********************/
    $('.projects-holder').mixitup({
        effects: ['fade', 'grayscale'],
        easing: 'snap',
        transitionSpeed: 400
    });

});

function preloaderFadeOutInit() {
    $('.preloader').fadeOut('slow');
    $('body').attr('id', '');
}
// Window load function
jQuery(window).on('load', function() {
    (function($) {
        preloaderFadeOutInit();
    })(jQuery);
});