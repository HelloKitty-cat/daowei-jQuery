'use strict';

$(function () {

  var comment = []; // 所有评论
  var CurrentComment = []; // 当前显示的评论
  var currentIndex = 0;

  // 移除所有a的样式
  $('.navRight li a').removeClass('active');

  $.get('http://localhost:3000/item', function (data) {
    $('.htit').append(template('shopInfo', { data: data }));
  });
  $.get('http://localhost:3000/info', function (data) {
    $('.boxtab').append(template('shopItems', { data: data }));
  });
  $.get('http://localhost:3000/comment', function (data) {
    comment = data;
    CurrentComment = comment.slice(0, 10);
    $('.commentDiv').append(template('comments', { data: CurrentComment }));
  });

  var $header = $('.headerContent');
  var Height = $('.nav').outerHeight();
  var isFixed = false;
  $(window).scroll(function () {

    if (document.documentElement.scrollTop > Height) {
      if (!isFixed) {
        $header.hide().slideDown('slow').addClass('headerContent header-fixed');
        isFixed = true;
      }
    } else if (document.documentElement.scrollTop <= Height) {
      if (isFixed) {
        $header.removeClass('header-fixed');
        isFixed = false;
      }
    }
  });

  //分页器
  $('.showPage a').click(function () {
    currentIndex = $(this).index();
    $(this).addClass('active').siblings().removeClass('active');
    CurrentComment = comment.slice((currentIndex + 1) * 10 - 10, (currentIndex + 1) * 10);
    $('.commentDiv').empty().append(template('comments', { data: CurrentComment }));
  });

  //上一页
  $('.pageup').click(function () {
    if (currentIndex <= 0) {
      return false;
    }
    currentIndex--;
    $($('.showPage a')[currentIndex]).addClass('active').siblings().removeClass('active');
    CurrentComment = comment.slice((currentIndex + 1) * 10 - 10, (currentIndex + 1) * 10);
    $('.commentDiv').empty().append(template('comments', { data: CurrentComment }));
  });
  // 下一页
  $('.pageDown').click(function () {
    if (currentIndex >= 8) {
      return false;
    }
    currentIndex++;
    $($('.showPage a')[currentIndex]).addClass('active').siblings().removeClass('active');
    CurrentComment = comment.slice((currentIndex + 1) * 10 - 10, (currentIndex + 1) * 10);
    $('.commentDiv').empty().append(template('comments', { data: CurrentComment }));
  });

  $('.navtit ul li').click(function () {
    var index = $(this).index();
    if (index === 0) {
      $("body,html").animate({
        scrollTop: 0
      }, 0);
    }
    if (index === 1) {
      $("body,html").animate({
        scrollTop: 2500
      }, 800);
    }
    if (index === 2) {
      $("body,html").animate({
        scrollTop: 2900
      }, 800);
    }
    $(this).addClass('currentActive').siblings().removeClass('currentActive');
  });
});