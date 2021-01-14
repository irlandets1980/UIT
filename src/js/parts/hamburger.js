function hamburger(){
    /////////////////////////////////гамбургер и поведение меню мобильной верстки////////////////////////////////////////////
    const menu = document.querySelector('.header__menu'),
      menuItem = document.querySelectorAll('.header__menu_item'),
      hamburger = document.querySelector('.header__hamburger');
   
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('header__hamburger_active');
      menu.classList.toggle('header__menu_active');
      if (hamburger.classList.contains('header__hamburger_active')) {
        ///////создаем подложку/////////////////
        $("body").append("<div class='popup'></div>"); /////добавляем в разметку подложку
        $(".popup").fadeIn(800); ////показываем подложку
        //////находим ее в разметке///////////////////
        let popup = document.querySelector('.popup');
        /////осветляем ее фон/////////////
        popup.style.backgroundColor = 'rgba(0, 0, 0, 0)';
  
        ///////вешаем на нее слушатель///////////
        popup.addEventListener('click', () => {
          hamburger.classList.toggle('header__hamburger_active');
          menu.classList.toggle('header__menu_active');
          if (hamburger.classList.contains('header__hamburger_active')) {
            $('.popup').fadeIn('slow'); // Медленно показываем всплывающее окно
          } else {
            $('.popup').fadeOut('slow'); // Медленно убираем всплывающее окно
            $(".popup").remove(); // Удаляем разметку высплывающего окна
          }
        });
        /////////////////////////////////////////
      } else {
        $(".popup").fadeOut(800); // Медленно убираем всплывающее окно
        $(".popup").remove(); // Удаляем разметку высплывающего окна
      }
    });
  
    menuItem.forEach(item => {
      item.addEventListener('click', () => {
        hamburger.classList.toggle('header__hamburger_active');
        menu.classList.toggle('header__menu_active');
      });
    }); 
  };

  module.exports = hamburger;
  ///////////////////////////////////////////////////////////////////////////////////////////
