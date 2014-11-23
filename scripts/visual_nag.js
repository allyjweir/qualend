var change = true;

(function(){
	console.log("visual nag initialised")
	$('body').append('<div id = "top" style="position:fixed;height:15px;opacity:1;top:0;left:0;right:0;background:#000;"></div>');
	$('body').append('<div id = "bottom" style="position:fixed;height:15px;opacity:1;bottom:0;left:0;right:0;background:#000;"></div>');
	$('body').append('<div id = "left" style="position:fixed;width:15px;opacity:1;top:0;left:0;bottom:0;background:#000;"></div>');
	$('body').append('<div id = "right" style="position:fixed;width:15px;opacity:1;top:0;bottom:0;right:0;background:#000;"></div>');
	window.setInterval(function(){colourChange(); console.log("change");},1000);
}).call(this)

function colourChange(){
	if (change) {
		$('#top').css('background-color','red');
		$('#bottom').css('background-color','red');
		$('#left').css('background-color','red');
		$('#right').css('background-color','red');
		change = false;
	} else{
		$('#top').css('background-color','black');
		$('#bottom').css('background-color','black');
		$('#left').css('background-color','black');
		$('#right').css('background-color','black');
		change = true;
	}
}