document.addEventListener("turbolinks:load", function() {

  $('#signup').click(function() {
    $('.greenbox').css('transform', 'translateX(80%)');
    $('.signin').addClass('nodisplay');
    $('.signup').removeClass('nodisplay');
  });

  $('#signin').click(function() {
    $('.greenbox').css('transform', 'translateX(0%)');
    $('.signup').addClass('nodisplay');
    $('.signin').removeClass('nodisplay');
  });

})