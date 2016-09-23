/* JS Code for Mobile AT */


//Menu Open & Close
	openMenu = false;

	function openM(){
		$("#mobile-menu").slideDown("fast");
		$("#mobile-menu-button").addClass("opened");
		openMenu = true;
	}

	function closeM(){
		$("#mobile-menu").slideUp("fast");
		$("#mobile-menu-button").removeClass("opened");
		openMenu = false;
	}

// Autoscrolling

	function scrollOnMobile(anchor){
		destiny = anchor.attr("href");
		os = $("#"+destiny).offset().top;
		window.scroll(0,os);
        closeM();
	}

// Delegates

	$("#mobile-menu-button").click(function(e){
		e.preventDefault();
		if(!openMenu){
			openM();
		}
		else{
			closeM();
		}
	});

	$("#mobile-menu li").click(function(){
		scrollOnMobile($(this).find("a"));
	});

	$("#mobile-menu li a").click(function(e){
		e.preventDefault();
		scrollOnMobile($(this));
	});

