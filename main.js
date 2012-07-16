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
loadjquery();

resize = function (){

	$('document').mouseup(function(){
			$('document').unbind('mousemove');
		});
		
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
}

jq_ready = function() {
$('.titlebarText').css({'margin-left': '20px'});
$('.titlebarLabel').append('<div class="reschatw lfloat" style="width: 18px;height: 18px;background-image: url(https://s-static.ak.fbcdn.net/rsrc.php/v2/y1/r/HbofewrOY-l.png);position: absolute;margin-top: 0px;top: 1px;left: 1px;background-position-y: 152px;"></div>');  
resize();
}