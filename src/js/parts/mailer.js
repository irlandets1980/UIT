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