function pageMove(num) {
  $('#keyimg').css('transition','all ease 1s');
  if(num <= 3) {
    $('#keyimg').css('transform', 'rotate(-360deg)')
  } else if(num >= 4) {
    $('#keyimg').css('transform', 'rotate(360deg)')
  }
  setTimeout(function() {
    var offset = $('#cont' + num).offset();
   $('html, body').animate({scrollTop : offset.top}, 400); 
   $('#keyimg').css('transform', 'rotate(0deg)');
  },1000);
}

function pgreload() {
  location.reload();
}

function totop() {
  var topOffset = $('.head').offset();
  $('html, body').animate({scrollTop : topOffset.top}, 400);
}