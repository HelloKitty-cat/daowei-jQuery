'use strict';

$(function () {

  $.get('http://localhost:3000/item', function (data) {
    $('.htit').append(template('shopInfo', { data: data }));
  });
  $.get('http://localhost:3000/info', function (data) {
    $('.boxtab').append(template('shopItems', { data: data }));
  });
  $.get('http://localhost:3000/comment', function (data) {
    var showData = data.slice(0, 10);
    console.log(showData);
    $('.commentDiv').append(template('comments', { data: showData }));
  });
});