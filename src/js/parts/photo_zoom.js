/////////////////////////УВЕЛИЧЕНИЕ ФОТО ПО КЛИКУ/////////////////////////////////
function photo_zoom(picture) {
  $(picture).click(function () { // Событие клика на маленькое изображение
    let src = $(this).attr('src'); // Достаем \ путь к фото
    let src_full = src.replace(".jpg", "_full.jpg"); //у "большой" картинки должна быть добавка к имети- _full

    $("body").append("<div class='popup'>" + //Добавляем подложку
      "<img src=" + src_full + " class='popup__img' />" + // фото
      "<div class='popup__close'>&times;</div>" + //крестик закрытия
      "</div>");
    /////////////////размещаем крестик закрытия в правом верхнем углу фото////////////
    $('.popup__img').load(function() {
      let popupImgCoordinate = document.querySelector('.popup__img').getBoundingClientRect();
      $(".popup__close").css({
        left: popupImgCoordinate.right - 40,
        top: popupImgCoordinate.top + 20,
      });
    });
    $(".popup").fadeIn(800, function () {
    
      
    });
    ///////////////закрываем фото по клику на подложку////////////
    $(".popup").click(function (event) {
      if (event.target.className === 'popup' || event.target.className === 'popup__close') {
        $(".popup").fadeOut(800); //событие клика на подложку или крестик
        setTimeout(function () {
          $(".popup").remove(); // Удаляем подложку
        }, 800);
      }
    });
  });
}
module.exports = photo_zoom;