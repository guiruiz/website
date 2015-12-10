$(document).ready(function(){
	function hideProfile(){
		$('.profile').hide();
		$('header').css('position', 'fixed');
		$('header').css('width', '100%');
		$('.about').css('padding-top', '319px');
	}

	function showProfile(){
		$('.profile').removeAttr('style');
		$('header').removeAttr('style');
		$('.about').removeAttr('style');
	}

	$(window).scroll(function(){
		if($(this).scrollTop() > 232){
			console.log("hide");
			//hideProfile();
		}else{
			console.log("show");
			//showProfile();
		}
	});

	$('#arrow-down').click(function(){
		$('html, body').animate({scrollTop: $("#about").offset().top }, 500);
	});

	$('#arrow-down').hover(function(){
		$('#arrow-down').stop().animate({ top: 20 }, {duration: 300});
	}, function(){
		$('#arrow-down').stop().animate({ top: 10 }, {duration: 300});
	});
});
