$(window).load(function(){
    $("#body-content").mCustomScrollbar({
		theme:"light-3"
    }); 
});






$(document).ready(function() {

	$("#header_gal li").on("click",  function(e){
				e.stopPropagation();
	
				$("div#body-content").addClass("content-blur");
				$(".popup-wrap").css({'display' : 'block'});
				$(".popup-slider").css({'display' : 'block'});		

				$('.popup-slider').position({
			    	my: 'center center', // точка попапа, которая будет спозиционирована
			    	at: 'center center', // место на элементе относительно которого будет позиционирование
			    	of: '.popup-wrap' // элемент относительно которого будет позиционирование
				});
			 	
				$("div.popup-slider").animate({				
						opacity: '1'
				});
					
	});

	$("body").on("click", function(event){		
			if($('div#body-content').hasClass("content-blur")){

				$("div#body-content").removeClass("content-blur");
				$(".popup-wrap").css({'display' : 'none'});
				$("div.popup-slider").css({'display' : 'none'});
				
				$("div.popup-slider").animate({				
					opacity: '0',			
					duration:"fast"
				});

			}		
		});	





/* Light croll on gallery */


$("#go_gallery").click(function(e){
	e.preventDefault();
	$('#body-content').mCustomScrollbar("scrollTo", '#gal_point');
});


$(".soc-btn .cart").hover(
	function(){
		$(".drop-cost").addClass('active');
	},
	function(){
		$(".drop-cost").removeClass('active');
	}
);

$(".header .drop-cost").hover(
	function(){
		$(".header .drop-cost").addClass('active');
	},
	function(){
		$(".header .drop-cost").removeClass('active');
	}
);


/* Light croll to top */

$("#sparrow-f").click(function(e){
	e.preventDefault();
	$('#body-content').mCustomScrollbar("scrollTo", '#h-logo');
});

/* Light croll to contact */


$("#go_kontakt").click(function(e){
	e.preventDefault();
	$('#body-content').mCustomScrollbar("scrollTo", '.copyright');
});


// =====================================	
//	 Inizialize Header Owl carousel 
// =====================================	
	
	var owl = $("#owl-carousel");

	owl.owlCarousel({
		margin: 25,
		items : 3,
		loop:true,
		nav:false,
		autoHeight : true,	
		rewindSpeed : 3000,
		scrollPerPage : false,
		pagination : false,
		paginationNumbers: false,
		paginationSpeed : 900,
		slideSpeed : 600		
		
	});


	// Go to the next item
	$('.next').click(function() {
	    owl.trigger('next.owl.carousel');
	})
	// Go to the previous item
	$('.prev').click(function() {
	    // With optional speed parameter
	    // Parameters has to be in square bracket '[]'
	    owl.trigger('prev.owl.carousel', [300]);
	});






});

