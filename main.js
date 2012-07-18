jq_wait = function(){
     if (typeof $() == 'undefined')
     { 
		 console.log('wait for js');
         window.setTimeout(jq_wait, 100);
     }
     else 
     { 
		console.log('jq is loaded');
        jq_ready(); 
     }
}
loadjquery = function(){
	vars = document.createElement('script'); 
	vars.setAttribute('src', 'https://ajax.googleapis.com/ajax/libs/jquery/1/jquery.js'); 
	document.getElementsByTagName('head')[0].appendChild(vars);
	console.log('append js');
	jq_wait();
}
jq_ready = function(){
	console.log('manipulationg dom');
    $('.titlebarText').css({'margin-left': '20px'});  
}

var resmouse = 0;
var dragobj, resobj;
loadjquery();

resize = function (){
dragobj = $('.reschatw');
resobj =  $('#fbDockChatTabs .fbMercuryChatTab.opened');
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
/*
	$('.reschatw').mousedown(function(){
		if(resmouse == 0){
			resmouse = $('.fbMercuryChatTab').offset(); 
		}
		$('document').bind({ 'mousemove': function(e) {
			resmouse = $('.fbMercuryChatTab').offset(); 
			neww = $('#fbDockChatTabs .fbMercuryChatTab.opened').css('weight')+
			(resmouse.left - e.pageX);
			newh = $('#fbDockChatTabs .fbMercuryChatTab.opened').css('height')+
			(resmouse.top - e.pageY);
			console.log(neww);
			$('#fbDockChatTabs .fbMercuryChatTab.opened').css('weight', neww+'px');
			$('#fbDockChatTabs .fbMercuryChatTab.opened').css('height', newh+'px');
		}});
	});
*/
}

jq_ready = function() {
	$('.titlebarText').css({'margin-left': '20px'});
	$('.titlebarLabel').append('<div class="reschatw" style="float: left; width: 18px;height: 18px;background-image: url(https://s-static.ak.fbcdn.net/rsrc.php/v2/y1/r/HbofewrOY-l.png);position: absolute;margin-top: 0px;top: 1px;left: 1px;background-position-y: 152px;"></div>');  
	dragobj = $('.reschatw');
	resobj =  $('#fbDockChatTabs .fbMercuryChatTab.opened');
	resize();
}