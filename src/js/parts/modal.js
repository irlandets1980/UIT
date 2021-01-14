function modal(){
    ///////////////////////////////МОДАЛЬНЫЕ ОКНА///////////////////////////////////////
  $('[data-modal=consultation]').on('click', function () {
    $('.header__hamburger').fadeOut();
    $('.overlay, #consultation').fadeIn('slow');
    document.body.style.overflow = 'hidden';
  });
  $('[data-modal=mis]').on('click', function () {
    $('.overlay, #mis').fadeIn('slow');
    $('.pageup').fadeOut();
    $('.header__hamburger').fadeOut();
    document.body.style.overflow = 'hidden';

  });
  $('[data-modal=sed]').on('click', function () {
    $('.overlay, #sed').fadeIn('slow');
    $('.pageup').fadeOut();
    $('.header__hamburger').fadeOut();
    document.body.style.overflow = 'hidden';
  });
  $('[data-modal=test]').on('click', function () {
    $('.overlay, #test').fadeIn('slow');
    $('.pageup').fadeOut();
    $('.header__hamburger').fadeOut();
    document.body.style.overflow = 'hidden';
  });
  $('[data-modal=sa]').on('click', function () {
    $('.overlay, #sa').fadeIn('slow');
    $('.pageup').fadeOut();
    $('.header__hamburger').fadeOut();
    document.body.style.overflow = 'hidden';
  });

  $('.modal__close, .button_close').on('click', function () {
    $('.overlay, #mis, #sed, #test, #sa, #consultation').fadeOut('slow');
    $('.pageup').fadeIn();
    $('.header__hamburger').fadeIn();
    document.body.style.overflow = 'auto';
  });
  $('.overlay').on('click', function (event) {
    if (event.target.classList.contains('overlay')) {
      
    $('.overlay, #mis, #sed, #test, #sa, #consultation').fadeOut('slow');
    $('.pageup').fadeIn();
    $('.header__hamburger').fadeIn();
    document.body.style.overflow = 'auto';
    } 

  });
}
module.exports = modal;