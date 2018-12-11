'use strict';

$(function () {

  $.get('http://localhost:3000/service', function (data) {
    $('.ulactivety').append(template('service', { data: data }));
  });

  var $header = $('.headerContent');
  var height = $('.nav').outerHeight();
  var isFixed = false;
  $(window).scroll(function () {
    if (document.documentElement.scrollTop > height) {
      if (!isFixed) {
        $header.hide().slideDown('slow').addClass('headerContent header-fixed');
        isFixed = true;
      }
    } else if (document.documentElement.scrollTop <= height) {
      if (isFixed) {
        $header.removeClass('header-fixed');
        isFixed = false;
      }
    }
  });
});