/* show - hide menu */
$(document).ready(function() {
  'use strict';

  $(window).scroll(function() {
    'use strict';

    if ($(window).scrollTop() < 80) {
      $('.navbar').css({
        'margin-top': '-100px',
        'opacity': '0'
      });

      $('.navbar-default').css({
        'background-color': 'rgba(59,59,59,0)'
      });

    } else {

      $('.navbar').css({
        'margin-top': '0px',
        'opacity': '1'
      });

      $('.navbar-default').css({
        'background-color': 'rgba(59,59,59,0.7)',
        'border-color': '#444'
      });

      $('.navbar-brand img').css({
        'height': '35px',
        'padding-top': '0px'
      });

      $('.navbar-nav > li > a').css({
        'padding-top': '15px'
      });

    }
  });
});


// add smooth scrolling
$(document).ready(function() {

  'use strict';

  //smooth scroll
  $('.nav-item, #scroll-to-top').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

// active menu item on click
$(document).ready(function() {

  'use strict';

  $('.navbar-nav li a').click(function() {
    'use strict';
    $('.navbar-nav li a').parent().removeClass("active"); // desactive tous les li
    $(this).parent().addClass("active"); // active le li clické
  });

});


// hilight menu item on scroll

$(document).ready(function() {

  'use strict';

  $(window).scroll(function() {

    $("section").each(function() {
      'use strict';

      var bb = $(this).attr("id"); //recuperation de l'attribut id de la section
      var hei = $(this).outerHeight(); // heigth of section
      var grtTop = $(this).offset().top - 70;

      if ($(window).scrollTop() > grtTop && $(window).scrollTop() < grtTop + hei) {
        $(".navbar-nav li a[href='#" + bb + "']").parent().addClass("active");
      } else {
        $(".navbar-nav li a[href='#" + bb + "']").parent().removeClass("active");
      }
    });
  });
});


// add auto padding header
$(document).ready(function() {

  'use strict';

  setInterval(function() {
    'use strict';

    var windowHeight = $(window).height();
    var containerHeight = $(".container-header").height();
    var padTop = windowHeight - containerHeight;

    $(".container-header").css({
      'padding-top': Math.round(padTop / 2) + 'px',
      'padding-bottom': Math.round(padTop / 2) + 'px'
    });
  }, 10);
});

// Add BX Slider to SCREENS
$(document).ready(function(){
  $('.bxslider').bxSlider({
    slideWidth:292.5,
    auto:true,
    minSlides:1,
    maxSlides:3,
    slideMargin:50
  });
});

// Add Counter

$(document).ready(function(){
  'use strict';

  $('.counter-num').counterUp({
    delay:10,
    time: 2000
  });
});

// Add Animation/ initialize window
$(document).ready(function(){

  'use strict';
  new WOW().init();
});
