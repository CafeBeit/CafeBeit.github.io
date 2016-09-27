$(function() {
  'use strict';

  $('.nav-action').click(function(e) {
    e.preventDefault();
    e.stopPropagation();
    var $target = $(e.target);
    var id = $target.data('section');

    $target.siblings().removeClass('active');
    $target.addClass('active');

    $('.content-section').addClass('hidden');
    $(id).removeClass('hidden');
  })


});
