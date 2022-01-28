// JavaScript Document

$(document).ready(function(){	
	// switch pages
  	//teru
	$(".teru_box").eq(0).addClass("teru_ch_bg");
	$(".content").eq(0).show();

	$(".teru_box").click(function(){
		var _index = $(this).index();
		$(this).addClass("teru_ch_bg").siblings().removeClass("teru_ch_bg");
		$(".content").eq(_index).fadeIn(1500).siblings().fadeOut(500);		
	});	
  	// fukka
	$(".fukka_box").eq(0).addClass("fukka_ch_bg");
	$(".content").eq(0).show();

	$(".fukka_box").click(function(){
		var _index = $(this).index();
		$(this).addClass("fukka_ch_bg").siblings().removeClass("fukka_ch_bg");
		$(".content").eq(_index).fadeIn(1500).siblings().fadeOut(500);		
	});	
	// raul
	$(".raul_box").eq(0).addClass("raul_ch_bg");
	$(".content").eq(0).show();

	$(".raul_box").click(function(){
		var _index = $(this).index();
		$(this).addClass("raul_ch_bg").siblings().removeClass("raul_ch_bg");
		$(".content").eq(_index).fadeIn(1500).siblings().fadeOut(500);		
	});	
	// shoppi
	$(".shoppi_box").eq(0).addClass("shoppi_ch_bg");
	$(".content").eq(0).show();

	$(".shoppi_box").click(function(){
		var _index = $(this).index();
		$(this).addClass("shoppi_ch_bg").siblings().removeClass("shoppi_ch_bg");
		$(".content").eq(_index).fadeIn(1500).siblings().fadeOut(500);		
	});	
	// koji
	$(".koji_box").eq(0).addClass("koji_ch_bg");
	$(".content").eq(0).show();

	$(".koji_box").click(function(){
		var _index = $(this).index();
		$(this).addClass("koji_ch_bg").siblings().removeClass("koji_ch_bg");
		$(".content").eq(_index).fadeIn(1500).siblings().fadeOut(500);		
	});	
	// abe
	$(".abe_box").eq(0).addClass("abe_ch_bg");
	$(".content").eq(0).show();

	$(".abe_box").click(function(){
		var _index = $(this).index();
		$(this).addClass("abe_ch_bg").siblings().removeClass("abe_ch_bg");
		$(".content").eq(_index).fadeIn(1500).siblings().fadeOut(500);		
	});	
	// meme
	$(".meme_box").eq(0).addClass("meme_ch_bg");
	$(".content").eq(0).show();

	$(".meme_box").click(function(){
		var _index = $(this).index();
		$(this).addClass("meme_ch_bg").siblings().removeClass("meme_ch_bg");
		$(".content").eq(_index).fadeIn(1500).siblings().fadeOut(500);		
	});	
	// date
	$(".date_box").eq(0).addClass("date_ch_bg");
	$(".content").eq(0).show();

	$(".date_box").click(function(){
		var _index = $(this).index();
		$(this).addClass("date_ch_bg").siblings().removeClass("date_ch_bg");
		$(".content").eq(_index).fadeIn(1500).siblings().fadeOut(500);		
	});
	// sakuma
	$(".sakuma_box").eq(0).addClass("sakuma_ch_bg");
	$(".content").eq(0).show();

	$(".sakuma_box").click(function(){
		var _index = $(this).index();
		$(this).addClass("sakuma_ch_bg").siblings().removeClass("sakuma_ch_bg");
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


