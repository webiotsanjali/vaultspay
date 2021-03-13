/*=====================
   4. Menu js
   ==========================*/

// $(window).on('load resize', function () {
//     checkPosition();

//     $(".toggle-nav, .sidebar-toggle").click(function () {
//         $('.nav-menu').css("right", "0px");
//         $('.menu-overlay').addClass('show');
//         $('body').css("overflow", "hidden");
//         $('.theme-setting').addClass("back")
//     });
//     $(".mobile-back").click(function () {
//         $('.nav-menu').css("right", "-410px");
//         $('.menu-overlay').removeClass('show');
//         $('body').css("overflow", "auto");
//         $('.theme-setting').removeClass("back")
//     });function
//     $(".back-btn").click(function () {
//         $('.order-cart-right').css("right", "-310px");
//     });
//     function checkPosition() {
//         if (window.matchMedia('(max-width: 1200px)').matches) {
//             jQuery('.mega-menu .menu-title').append('<span class="according-menu">+</span>');
//             jQuery('.mega-menu .menu-title').click(function () {
//                 jQuery(this).removeClass('active');
//                 jQuery(this).next().slideUp('normal');
//                 if (jQuery(this).next().is(':hidden') == true) {
//                     jQuery(this).addClass('active');
//                     jQuery(this).find('span').replaceWith('<span class="according-menu">-</span>');
//                     jQuery(this).next().slideDown('normal');
//                 } 
//             });
//             jQuery(this).hide();
//         }
//         else {
//             jQuery(this).find('span').replaceWith('<span class="according-menu">+</span>');
//         }
//     }
// });

$( document ).ready(function() {
    $(".toggle-nav, .sidebar-toggle").click(function () {
        $('.nav-menu').css("right", "0px");
        $('.menu-overlay').addClass('show');
        $('body').css("overflow", "hidden");
        $('.theme-setting').addClass("back")
    });
    $(".mobile-back").click(function () {
        $('.nav-menu').css("right", "-410px");
        $('.menu-overlay').removeClass('show');
        $('body').css("overflow", "auto");
        $('.theme-setting').removeClass("back")
    });
    $(".back-btn").click(function () {
        $('.order-cart-right').css("right", "-310px");
    });
    $(window).on('resize', function () {
        windowSize = $(window).width();
        if (windowSize <= 1199) {
            jQuery('.mega-menu .menu-title').click(function () {
                jQuery(this).removeClass('active');
                jQuery(this).next().slideUp('normal');
                if (jQuery(this).next().is(':hidden') == true) {
                    jQuery(this).addClass('active');
                    jQuery(this).next().slideDown('normal');
                } else {
                     jQuery(this).removeClass('active');
                    jQuery(this).next().slideUp('normal');
                }
                jQuery(this).hide();
            });
           
        }
        else if (windowSize > 1199) {
            jQuery('.menu-content').show();
        }
    }).resize();
});
