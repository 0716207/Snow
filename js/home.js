// JavaScript Document

// switch pages
$(document).ready(function(){	
		$(".box").eq(0).addClass("ch_bg");
		$(".content").eq(0).show();

	$(".box").click(function(){
		var _index = $(this).index();
		$(this).addClass("ch_bg").siblings().removeClass("ch_bg");
		$(".content").eq(_index).fadeIn(1500).siblings().fadeOut(500);	
	});	
	
	
});

// fade to another page
window.transitionToPage = function(href) {
    document.querySelector('body').style.opacity = 0
    setTimeout(function() { 
        window.location.href = href
    }, 500)
}

document.addEventListener('DOMContentLoaded', function(event) {
    document.querySelector('body').style.opacity = 1
})