// Delegate .transition() calls to .animate() if the browser can't do CSS transitions.
if ( !Modernizr.testProp( 'transition' ) ) {
 $.fn.transition = $.fn.animate;
}

//Functions
var $submenu            = $('.submenu'),
    $miniCart           = $('.mini-cart'),
    $homeSlider         = $('#home-slider'),
    $forCarousel        = $('.for-carousel'),
    $catalogTopOpt      = $('.catalog-top-option');

function navHoverOver() {
  $submenu.fadeIn(300);
  $catalogTopOpt.addClass('submenu-open');
}

function navHoverOut() {
  $submenu.fadeOut(300);
  $catalogTopOpt.removeClass('submenu-open');
}

function miniCartHoverOver() {
  $miniCart.fadeIn(300);
}

function miniCartHoverOut() {
  $miniCart.fadeOut(300);
}

function mainSlider(el) {
  var parent = [
    $(el).data('prev'),
    $(el).data('next'),
    $(el).data('auto'),
    $(el).data('pagination'),
    $(el).data('visible')
  ]

  $(el).carouFredSel({
    pagination           : parent[3],
    prev                 : parent[0],
    next                 : parent[1],
    auto                 : parent[2],
    items                : {
      visible            : parent[4],
    },
    scroll               : {
      duration           : 800,
      pauseOnHover       : true
    }
  }, { transition        : true }
  )
}
//===========================


$(function(){
  //Plugin start
  //Placeholder
  $('input, textarea').placeholder();
  //===========================

  //matchHeight
  $('.matchHeighted > *').matchHeight();
  //===========================

  //Scrollbar
  $('.scrollable-list').mCustomScrollbar();
  //===========================

  //Hoverintent array init
  var initHoverIntent   = [
    navHover            = {
      sensitivity   : 2,
      interval      : 100,
      timeout       : 200,
      over          : navHoverOver,
      out           : navHoverOut
    },
    miniCartHover       = {
      sensitivity   : 2,
      interval      : 100,
      timeout       : 200,
      over          : miniCartHoverOver,
      out           : miniCartHoverOut
    }
  ]

  //HoverIntent calls
  $('.nav-catalog').hoverIntent(navHover);
  $('.mini-cart-top-info').hoverIntent(miniCartHover);
  //===========================

  //Home slider
  if($homeSlider.length){
    $homeSlider.find('ul').carouFredSel({
      pagination           : $homeSlider.find('.bullet-navigation'),
      prev                 : $homeSlider.find('.prev'),
      next                 : $homeSlider.find('.next'),
      width                : '100%',
      auto: {
        timeoutDuration: 5000
      },
      items: {
        visible: 3,
        start: 0,
      },
      scroll : {
        items            : 1,
        duration         : 760,
        easing           : 'swing',
        fx               : 'directscroll',
        pauseOnHover     : true
      }
    })
  }
  //===========================
  //Plugin end

  //Custom start
  //Carousel content
  if($forCarousel.length) {
    $forCarousel.each(function(el){
      mainSlider(this);
    });
  }
  //===========================
  //Custom end
});
