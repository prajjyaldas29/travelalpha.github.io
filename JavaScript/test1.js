$(document).ready(function(){

  $('[data-trigger="Mynav"]').on('mouseenter'function(){
  var menu = $(this).parent().find('.nav-item');
    menu.addClass('active');//or use menu.fadeIn(300);
    $('.navbar-nav').on('mouseleave',function(){

      menu.removeClass('active');


  });
});
