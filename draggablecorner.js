dragobj = $('.s');
resobj =  $('.box');

$(document).mouseup(function(){
     $(document).unbind('mousemove');
  });
 
dragobj.mousedown(function(e){
    minwidth = 200;
    minheight = 200;
    moff = {
             x:resobj.offset().left - e.pageX,
             y:resobj.offset().top - e.pageY
           };
         $(document).bind({ 'mousemove': function(event) { 
             off = resobj.offset(); 
             deltaX = off.left - event.pageX;
             deltaY = off.top - event.pageY;
             if(resobj.width() > minwidth-1){
                 resobj.css('width', resobj.width()+deltaX-moff.x);
             }else{
                 resobj.css('width',minwidth);
             }
             if(resobj.height() > minheight-1){
                 resobj.css('height', resobj.height()+deltaY-moff.y);
             }else{
                 resobj.css('height',minheight);
             }
             }
         });
     });