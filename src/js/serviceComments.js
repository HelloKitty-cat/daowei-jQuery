
$(function () {

  $.get('http://localhost:3000/item',data => {
    $('.htit').append(template('shopInfo',{data}))
  })
  $.get('http://localhost:3000/info',data => {
    $('.boxtab').append(template('shopItems',{data}))
  })
  $.get('http://localhost:3000/comment',data => {
    let showData = data.slice(0,10);
    console.log(showData);
    $('.commentDiv').append(template('comments',{data:showData}))
  })
});
