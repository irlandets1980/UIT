function scroll(){
    ////////////////////////////////////// плавный скролл с кнопки вверх/////////////////////////////////////////////
  //если пролистали вниз появляется кнопка
  $(window).scroll(function () {
    if ($(this).scrollTop() > 1000) {
      $('.pageup').fadeIn();
    } else {
      $('.pageup').fadeOut();
    }
  })

  var header = $('.header__hamburger'),
    scrollPrev = 0;
  $(window).scroll(function () {
    var scrolled = $(window).scrollTop();
    if (scrolled > 100) {
      $('.header__hamburger').fadeOut();
    } else {
      $('.header__hamburger').fadeIn();
    }
    scrollPrev = scrolled;
  });

  //сам скрипт плавности
  $("a[href^='#up']").click(function () {
    const _href = $(this).attr("href");
    $("html, body").animate({
      scrollTop: $(_href).offset().top + "px"
    });
    return false;
  });

}

module.exports = scroll;