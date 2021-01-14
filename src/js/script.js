$(document).ready(function () {
  'use strict';
  let slider_adaptation = require('./parts/slider_adaptation.js'),
  hamburger = require('./parts/hamburger.js'),
  scroll = require('./parts/scroll.js'),
  mailer = require('./parts/mailer.js'),
  modal = require('./parts/modal.js'),
  tabs = require('./parts/tabs.js'),
  wow = require('./parts/wow.js'),
  photo_zoom = require('./parts/photo_zoom.js');
  


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