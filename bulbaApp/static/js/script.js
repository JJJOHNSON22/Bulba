$(document).ready(function(){
    var item_width = $('#navMenu li').width();
    var item_count = ($( "#navMenu li" ).length);
    var nav_width_og = $('.menu').width();
    var nav_width = $('.menu').width();
     
    if ((item_width*(item_count+1)) > nav_width ){
        $('#more').appendTo('body');
     $('#more').hide();
   }
     
    for(var i = 0; i < item_count; i++) {
     nav_width = $('.menu').width();
   item_width = $('#navMenu li').width();
   item_count = ($( "#navMenu li" ).length); 
      
    if (nav_width<(item_width*item_count)){
   $('#navMenu li').not('#more').last().appendTo($('.overflow'));
     
     $('#more').appendTo($('#navMenu'));
     $('#more').show();
   }
    }
   
    
   $(window).resize(function(){ 
     
   nav_width = $('.menu').width();
   item_width = $('#navMenu li').width();
   item_count = ($( "#navMenu li" ).length);
   
   if (nav_width<(item_width*item_count)){
   $('#navMenu li').not('#more').last().appendTo($('.overflow'));
     
     $('#more').appendTo($('#navMenu'));
     $('#more').show();
   }
     
   if (nav_width>(item_width*item_count)+(item_width-1)){
    $('.overflow li').last().appendTo($('#navMenu'));
     
     $('#more').appendTo($('#navMenu'));
   }
      
   if (nav_width == nav_width_og ){
        $('#more').appendTo('body');
     $('#more').hide();
   }
     
   });
     
     $('#more').click(function(){
      $('.overflow').slideToggle(); 
     });
     });