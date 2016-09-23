/* Globarl vars */

	//Menu Initial Offset
	menu = document.getElementById("menu-container");
	initialOffset = menu.offsetTop;

	//Menu section detector flag
	menuFlag = true;
/* End of global vars*/

/* Document Functions */

	// Menu Anchors Animation & Behaivor function
	function animateMenu(anchor){
		// Menu animation
		document.getElementById("menu-item-indicator").className = "";
		document.getElementById("menu-line").className = "";
		$("#menu-item-indicator").addClass("item-"+anchor.attr("class"));
		$("#menu-line").addClass("item-"+anchor.attr("class"));

		/* Active anchor behaivor */
		for(var i = 0; i <= $("#menu-bar ul li a").length; i++){
			$("#menu-bar a."+i).removeClass("active");
		}
		anchor.addClass("active");
	}

	// Menu Scrolling function
	function menuScrolling(){
		// Header offset information
		headerOffset = initialOffset + $("header").height();


		if(document.body.scrollTop >= initialOffset){
			$(menu).addClass("floater");
		}
		else{
			$(menu).removeClass("floater");
		}

		if(document.body.scrollTop >= headerOffset){
			$("#menu").addClass("below-header");
		}
		else{
			$("#menu").removeClass("below-header");
		}

	}

	// Menu section detector
	function watchScrolling(){
		//Offset section info
		home = $("#main-container").offset().top;
		services = $("#services").offset().top;
		servicesGallery = $("#services-gallery").offset().top;
		aboutUs = $("#about-us").offset().top;
		contact = $("#contact").offset().top - 400;
		actualOffset = $(window).scrollTop();

		if(menuFlag){
			if(actualOffset >= home && actualOffset < aboutUs){
				animateMenu($(".1"));
			}
			else if(actualOffset >= aboutUs && actualOffset < services){
				animateMenu($(".2"));
			}
			else if(actualOffset >= services && actualOffset < servicesGallery){
				animateMenu($(".3"));
			}
			else if(actualOffset >= servicesGallery  && actualOffset < contact){
				animateMenu($(".4"));
			}
			else if(actualOffset >= contact){
				animateMenu($(".5"));
			}
		}
	}

/* End of document functions */

/* jQuery events delegates */

	// Scrolling behaivor
	$(window).scroll(function(){
		menuScrolling();
		watchScrolling();
	});

	/* Navigation bar anchors animation & behaivor */
	$("#menu-bar ul li a").click(function(e){
		e.preventDefault();

		animateMenu($(this));
		menuFlag = false;
		/* Scrolling */
 		$('html, body').animate(
 			{
            scrollTop: $("#"+$(this).attr("href")).offset().top + 'px'
        	},
        	300,
        	function(){
        		menuFlag = true;
        	}
        );

	});
	
/* End of jQuery event delegates */