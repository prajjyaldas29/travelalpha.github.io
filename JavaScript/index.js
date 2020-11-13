$(document).ready(function(){

$(document).on('contextmenu',function(){

  return false;
});

$(document).on('mousedown',function(event){

event.preventDefault();
if (event.which == 3) {
    console.log(event.pageY, event.pageX);
     $(document).css({
           top: event.pageY,
          left: event.pageX
     });
       $('#context').fadeIn();
    return false;
   }
     $('#context').fadeOut();
});



$('[data-trigger="dropdown"]').on('mouseenter',function(){

var menu = $(this).parent().find('.submenu');
menu.addClass('active');//or use menu.fadeIn(300);
$('.profile-menu').on('mouseleave',function(){

  menu.removeClass('active');//or use menu.fadeOut(300);
});

});




});
