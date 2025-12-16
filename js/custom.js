// scroll nav

window.addEventListener("scroll", function () {
  var nav = document.querySelector("nav");
  nav.classList.toggle("nav-scrolled", window.scrollY > 0);
});

(function ($) {
  "use strict";

  // nav slide
  $("header nav ul li.icon").on("click", function () {
    $("header nav ul li.icon span").toggleClass("show");
    $("header nav ul .items").slideToggle();
  });

  // menu resize problem
  $(window).resize(function () {
    var screenSize = $(window).width();
    if (screenSize > 767) {
      $("header nav ul .items").removeAttr("style");
      $("header nav ul li.icon span").removeClass("show");
    }
  });

  // preloader
  $(window).on("load", function () {
    $(".loader").fadeOut(500);
    $(window).scrollTop(0);
  });

  // scroll button

  $(window).on("scroll", function () {
    var scroll = $(window).scrollTop();
    if (scroll > 350) {
      $(".go_top").addClass("back_top");
    } else {
      $(".go_top").removeClass("back_top");
    }
  });
  $(".go_top").on("click", function () {
    $(window).scrollTop(0);
  });

  // counter

  const counters = document.querySelectorAll(".counter");
  const speed = 500;

  counters.forEach((counter) => {
    const updateCount = () => {
      const target = +counter.getAttribute("data-target");
      const count = +counter.innerText;
      const inc = target / speed;
      if (count < target) {
        counter.innerText = Math.ceil(count + inc);
        setTimeout(updateCount, 1);
      } else {
        count.innerText = target;
      }
    };

    updateCount();
  });

  //wow js
  var wow = new WOW({
    boxClass: "wow", // animated element css class (default is wow)
    animateClass: "animated", // animation css class (default is animated)
    offset: 0, // distance to the element when triggering the animation (default is 0)
    mobile: false, // trigger animations on mobile devices (default is true)
    live: false, // act on asynchronously loaded content (default is true)
    callback: function (box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: true, // optional scroll container selector, otherwise use window,
    resetAnimation: true, // reset animation on end (default is true)
  });
  wow.init();

  // section clearance
  $(document).on("click", '.section-clear a[href^="#"]', function (event) {
    event.preventDefault();

    var href = $.attr(this, "href");

    $("html, body").animate(
      {
        scrollTop: $($.attr(this, "href")).offset().top - 70,
      },
      500,
      function () {
        // window.location.hash = href;
      }
    );
  });

  // fancy box customize

  // $("[data-fancybox]").fancybox({
  //   animationEffect: "slide", // slide
  // });
})(jQuery);
