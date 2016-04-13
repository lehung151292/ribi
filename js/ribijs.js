$(window).scroll(function(){
	var scroll = $(window).scrollTop();
		if (scroll >= 150) {
			$(".navbar").addClass("ribi-navbar");
		}
		else{
			$(".navbar").removeClass("ribi-navbar");
		}
}
);