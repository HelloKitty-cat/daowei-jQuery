
$(function () {

  let comment = [];  // 所有评论
  let CurrentComment = []  // 当前显示的评论
  let currentIndex = 0;

  // 移除所有a的样式
  $('.navRight li a').removeClass('active')

  $.get('http://localhost:3000/item',data => {
    $('.htit').append(template('shopInfo',{data}))
  })
  $.get('http://localhost:3000/info',data => {
    $('.boxtab').append(template('shopItems',{data}))
  })
  $.get('http://localhost:3000/comment',data => {
    comment = data;
    CurrentComment = comment.slice(0,10);
    $('.commentDiv').append(template('comments',{data:CurrentComment}))
  })


  const $header = $('.headerContent');
  const Height = $('.nav').outerHeight()
  let isFixed = false;
  $(window).scroll(function () {

    if (document.documentElement.scrollTop > Height){
      if (!isFixed){
        $header.hide().slideDown('slow').addClass('headerContent header-fixed')
        isFixed = true
      }
    }else if (document.documentElement.scrollTop <= Height) {
      if (isFixed){
        $header.removeClass('header-fixed')
        isFixed = false;
      }
    }
  })

  //分页器
  $('.showPage a').click(function () {
    currentIndex = $(this).index()
    $(this).addClass('active').siblings().removeClass('active')
    CurrentComment = comment.slice((currentIndex+1)*10-10,(currentIndex+1)*10)
    $('.commentDiv').empty().append(template('comments',{data: CurrentComment}))
  })

  //上一页
  $('.pageup').click(function () {
    if (currentIndex<=0){
      return false;
    }
    currentIndex--;
    $($('.showPage a')[currentIndex]).addClass('active').siblings().removeClass('active')
    CurrentComment = comment.slice((currentIndex+1)*10-10,(currentIndex+1)*10)
    $('.commentDiv').empty().append(template('comments',{data: CurrentComment}))
  })
  // 下一页
  $('.pageDown').click(function () {
    if (currentIndex>=8){
      return false;
    }
    currentIndex++;
    $($('.showPage a')[currentIndex]).addClass('active').siblings().removeClass('active')
    CurrentComment = comment.slice((currentIndex+1)*10-10,(currentIndex+1)*10)
    $('.commentDiv').empty().append(template('comments',{data: CurrentComment}))
  })



  $('.navtit ul li').click(function () {
    const index = $(this).index()
    if (index === 0){
      $("body,html").animate({
        scrollTop:0
      },0);
    }
    if (index === 1){
      $("body,html").animate({
        scrollTop:2500
      },800);
    }
    if (index === 2){
      $("body,html").animate({
        scrollTop:2900
      },800);
    }
    $(this).addClass('currentActive').siblings().removeClass('currentActive')
  })


});
