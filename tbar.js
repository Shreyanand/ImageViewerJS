$(document).ready(function() {
	$("#toolbar_effects").hide();
	$("#Fullscreen2").hide();
	$("#range_bars").hide();
	$("#brbar").hide();
    
	$("#Edit").click(function() {
    $("#toolbar").fadeOut(1,function(){$("#toolbar_effects").fadeIn(250);});
	$("#toolbar_effects").fadeIn(250);
});
	$("#Imageviewer2").click(function() {
    $("#toolbar_effects").fadeOut(250,function(){$("#toolbar").fadeIn(250);});
	});
	
	$("#Fullscreen").click(function() {
         $("#toolbar").fadeOut();
		 $("#Fullscreen2").show();
		 
    });
	$("#Fullscreen2").click(function() {
         $("#toolbar").fadeIn();
		 $("#Fullscreen2").hide();
		 $("body").css( "padding-top","70px"); 
    });
	$("#rgb").click(function() {
		
		$("#range_bars").toggle();
		});
	$("#brightness").click(function() {
		
		$("#brbar").toggle();
		});
});
	
	





