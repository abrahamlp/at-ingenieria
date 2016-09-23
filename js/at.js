$(document).ready(function(){	

	$.getScript("js/at-common.js");

	//if (screen.width >= 1100) {
		$.getScript("js/at-desktop.js");
	//}
	//else{
		$.getScript("js/at-mobile.js");
	//}


});