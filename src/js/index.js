
$(function () {

  $.get('http://localhost:3000/leftNav',function (data) {
    console.log(data)
    $('.contentUl').append(template('content',{data:data}))
    $('.shopList').append(template('items',{data:data}))
  })

  new Swiper('.swiper-container', {
    loop: true, // 循环模式选项
    // 如果需要分页器
    effect: 'fade',
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  })

  const $header = $('.headerContent');
  const Height = $($header).outerHeight()
  let isFixed = false;
  $(window).scroll(function () {

    if (document.documentElement.scrollTop > Height){
      if (!isFixed){
        $header.hide().slideDown('slow').addClass('headerContent header-fixed')
        isFixed = true
        return false;
      }
    }else if (document.documentElement.scrollTop < Height) {
      if (isFixed){
        $header.removeClass('header-fixed').prependTo('#wrap')
        isFixed = false;
      }
    }

  })


});
