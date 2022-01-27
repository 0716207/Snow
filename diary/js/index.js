// JavaScript Document

$(document).ready(function(){	
	// switch pages
	$(".teru_box").eq(0).addClass("teru_ch_bg");
	$(".content").eq(0).show();

	$(".teru_box").click(function(){
		var _index = $(this).index();
		$(this).addClass("teru_ch_bg").siblings().removeClass("teru_ch_bg");
		$(".content").eq(_index).fadeIn(1500).siblings().fadeOut(500);		
	});	
	
	//Check to see if the window is top if not then display button
	$(window).scroll(function(){
		if ($(this).scrollTop() > 500) {
			$('.totop').fadeIn();
		} else {
			$('.totop').fadeOut();
		}
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

/*totop*/
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});


