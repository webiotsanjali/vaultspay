/**=====================
     custom slick slider
==========================**/
$('.home-slider').slick({
    infinite: true,
    speed: 1000,
    arrows: true,
    // autoplay: true,
    prevArrow: '<div class="prev-arrow"><i class="fas fa-chevron-left"></i></div>',
    nextArrow: '<div class="next-arrow"><i class="fas fa-chevron-right"></i></div>',
}).slickAnimation();

$('.testimonial-slider').slick({
  infinite: true,
  slidesToShow: 4,
  speed: 1000,
  arrows: false,
  autoplay: true,
  responsive: [
    {
      breakpoint: 1790,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 881,
      settings: {
        slidesToShow: 1
      }
    }
  ]
}).slickAnimation();


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

