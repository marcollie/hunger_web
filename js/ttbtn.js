$(document).ready(function() {
  setTimeout(showbtn(), 500);
  function showbtn() {
    $(window).scroll(function() {
      if($(window).scrollTop() >= $('#cont1').offset().top) {
        $('.bttbox').css('visibility', 'visible');
      }
    });

    $(window).scroll(function() {
      if($(window).scrollTop() <= $('#cont1').offset().top) {
        $('.bttbox').css('visibility', 'hidden');
      }
    });
  }
});

