(function ($) {
  $(window).scroll(function () {
    $(".arrow").css("opacity", 1 - $(window).scrollTop() / 250); //250 is fade pixels
  });
})(jQuery);
//# sourceMappingURL=app.js.map
