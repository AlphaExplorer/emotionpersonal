(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#sideNav'
  });

})(jQuery); // End of use strict

$(document).on("click", ".fa-smile", function(){
    // Appending the gif to the App_response div
    $(".sidebar-icon").empty();
    $(".sidebar-icon").append('<div class="emotion-icons"><a href="Emotions"><i class="fas fa-smile"></i></a></div>');
    $(".Emotion").empty();
    $(".Emotion").append('<a class="nav-link js-scroll-trigger" href="#Emotions">Happy</a>')
});

$(document).on("click", ".fa-sad-tear", function(){
  // Appending the gif to the App_response div
  $(".sidebar-icon").empty();
  $(".sidebar-icon").append('<div class="emotion-icons"><a href="Emotions"><i class="fas fa-sad-tear"></i></a></div>');
  $(".Emotion").empty();
  $(".Emotion").append('<a class="nav-link js-scroll-trigger" href="#Emotions">Sad</a>')
});

$(document).on("click", ".fa-angry", function(){
  // Appending the gif to the App_response div
  $(".sidebar-icon").empty();
  $(".sidebar-icon").append('<div class="emotion-icons"><a href="Emotions"><i class="fas fa-angry"></i></a></div>');
  $(".Emotion").empty();
  $(".Emotion").append('<a class="nav-link js-scroll-trigger" href="#Emotions">Angry</a>')
});

$(document).on("click", ".fa-meh-blank", function(){
  // Appending the gif to the App_response div
  $(".sidebar-icon").empty();
  $(".sidebar-icon").append('<div class="emotion-icons"><a href="Emotions"><i class="fas fa-meh-blank"></i></a></div>');
  $(".Emotion").empty();
  $(".Emotion").append('<a class="nav-link js-scroll-trigger" href="#Emotions">Calm</a>')
});

