function tabs(){
    $('ul.team__tabs').on('click', 'li:not(.team__tab_active)', function () {
        $(this)
          .addClass('team__tab_active').siblings().removeClass('team__tab_active')
          .closest('div.container').find('div.team__content').removeClass('team__content_active').eq($(this).index()).addClass('team__content_active');
      });
}
module.exports = tabs;