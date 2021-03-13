/**=====================
     custom slick slider
==========================**/
// $('.partners').slick({
//     centerMode: true,
//     centerPadding: '135px',
//     slidesToShow: 4,
//     dots: true,
//     responsive: [
//       {
//         breakpoint: 768,
//         settings: {
//           arrows: false,
//           centerMode: true,
//           centerPadding: '40px',
//           slidesToShow: 3
//         }
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           arrows: false,
//           centerMode: true,
//           centerPadding: '40px',
//           slidesToShow: 1
//         }
//       }
//     ]
//   });


var $gallery = $('.partners');
var slideCount = null;

$(document).ready(function () {
  $gallery.slick({
    centerMode: true,
    centerPadding: '135px',
    slidesToShow: 4,
    prevArrow: '<div class="prev-arrow"><i class="fas fa-arrow-left"></i></div>',
    nextArrow: '<div class="next-arrow"><i class="fas fa-arrow-right"></i></div>',
    responsive: [
      {
        breakpoint: 1460,
        settings: {
          centerMode: true,
          centerPadding: '100px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 991,
        settings: {
          centerMode: true,
          centerPadding: '60px',
          slidesToShow: 2
        }
      },
      {
        breakpoint: 767,
        settings: {
          centerMode: true,
          centerPadding: '80px',
          slidesToShow: 1
        }
      }
    ]
  });
});

$gallery.on('init', function (event, slick) {
  slideCount = slick.slideCount;
  setSlideCount();
  setCurrentSlideNumber(slick.currentSlide);
});

$gallery.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
  setCurrentSlideNumber(nextSlide);
});

function setSlideCount() {
  var $el = $('.slide-count-wrap').find('.total');
  $el.text(slideCount);
}

function setCurrentSlideNumber(currentSlide) {
  var $el = $('.slide-count-wrap').find('.current');
  $el.text(currentSlide + 1);
}

