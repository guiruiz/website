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
			hideProfile();
		}else{
			console.log("show");
			showProfile();
		}
	});
});