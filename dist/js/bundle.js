/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/parts/hamburger.js":
/*!***********************************!*\
  !*** ./src/js/parts/hamburger.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

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


/***/ }),

/***/ "./src/js/parts/mailer.js":
/*!********************************!*\
  !*** ./src/js/parts/mailer.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function mailer(){
     /////////////////////////отправка писем с помощью https://github.com/PHPMailer/PHPMailer///////////////////////////////////////
  $('form').submit(function (e) {

    e.preventDefault();
    $.ajax({
      type: "POST",
      url: "mailer/smart.php",
      data: $(this).serialize()
    }).done(function () {
      $(this).find("input").val("");
      $('#consultation').fadeOut();
      $('.overlay, #thanks').fadeIn('slow');
      $('form').trigger('reset')

    });
    return false;

  });
}

module.exports = mailer;

/***/ }),

/***/ "./src/js/parts/modal.js":
/*!*******************************!*\
  !*** ./src/js/parts/modal.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

/***/ }),

/***/ "./src/js/parts/photo_zoom.js":
/*!************************************!*\
  !*** ./src/js/parts/photo_zoom.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

/***/ }),

/***/ "./src/js/parts/scroll.js":
/*!********************************!*\
  !*** ./src/js/parts/scroll.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

/***/ }),

/***/ "./src/js/parts/slider_adaptation.js":
/*!*******************************************!*\
  !*** ./src/js/parts/slider_adaptation.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function slider_adaptation(){
    const slider = tns({
        container: '.carousel__inner',
        items: 4,
        slideBy: 'page',
        autoplay: false,
        arrows: true,
        controls: false,
      
        responsive: {
          1200: {
      
            items: 4
          },
          991: {
      
            items: 3
          },
          767: {
      
            items: 2
          },
          575: {
      
            items: 1
          },
          320: {
      
            items: 1
          }
      
        }
      
      });
}
module.exports = slider_adaptation;

/***/ }),

/***/ "./src/js/parts/tabs.js":
/*!******************************!*\
  !*** ./src/js/parts/tabs.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function tabs(){
    $('ul.team__tabs').on('click', 'li:not(.team__tab_active)', function () {
        $(this)
          .addClass('team__tab_active').siblings().removeClass('team__tab_active')
          .closest('div.container').find('div.team__content').removeClass('team__content_active').eq($(this).index()).addClass('team__content_active');
      });
}
module.exports = tabs;

/***/ }),

/***/ "./src/js/parts/wow.js":
/*!*****************************!*\
  !*** ./src/js/parts/wow.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

function wow(){
  //анмация
  new WOW().init();
}
module.exports = wow;

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

$(document).ready(function () {
  'use strict';
  let slider_adaptation = __webpack_require__(/*! ./parts/slider_adaptation.js */ "./src/js/parts/slider_adaptation.js"),
  hamburger = __webpack_require__(/*! ./parts/hamburger.js */ "./src/js/parts/hamburger.js"),
  scroll = __webpack_require__(/*! ./parts/scroll.js */ "./src/js/parts/scroll.js"),
  mailer = __webpack_require__(/*! ./parts/mailer.js */ "./src/js/parts/mailer.js"),
  modal = __webpack_require__(/*! ./parts/modal.js */ "./src/js/parts/modal.js"),
  tabs = __webpack_require__(/*! ./parts/tabs.js */ "./src/js/parts/tabs.js"),
  wow = __webpack_require__(/*! ./parts/wow.js */ "./src/js/parts/wow.js"),
  photo_zoom = __webpack_require__(/*! ./parts/photo_zoom.js */ "./src/js/parts/photo_zoom.js");
  


  slider_adaptation();
  hamburger();
  scroll();
  mailer();
  modal();
  tabs();
  photo_zoom(".team__user");
  wow();
//npx webpack
});
//npx webpack

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map