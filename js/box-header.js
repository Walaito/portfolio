$(document).ready(function () {
  // Transition effect for navbar 
  $(window).scroll(function () {
    // checks if window is scrolled more than 500px, adds/removes solid class
    if ($(this).scrollTop() > 500) {
      $('.box-header').addClass('solid');
    } else {
      $('.box-header').removeClass('solid');
    }
  });
});