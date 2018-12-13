
$(function () {

  $.get('http://localhost:3000/service',data => {
    $('.ulactivety').append(template('service',{data}))
  })


  const $header = $('.headerContent')
  const height = $('.nav').outerHeight()
  let isFixed = false;
  $(window).scroll(function () {
    if (document.documentElement.scrollTop > height){
      if (!isFixed) {
        $header.hide().slideDown('slow').addClass('headerContent header-fixed')
        isFixed = true;
      }
    } else if (document.documentElement.scrollTop <= height){
      if (isFixed){
        $header.removeClass('header-fixed')
        isFixed = false;
      }
    }
  })

  $('.navRight li a').removeClass('active')
  $('.navRight li:nth-child(3) a').addClass('active')

});
