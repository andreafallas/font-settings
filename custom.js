$(document).ready(function() {

	$("#sans").prop("checked", true);
	
	$("#helloBtn").click(function() {
		alert("Hello");
	});

	$("#serif").click(function() {
		$(".text-content").css("font-family", "Georgia, Times, serif");
	});

	$("#sans").click(function() {
		$(".text-content").css("font-family", "lato, sans-serif;");
	});

	$("#bigger").click(function(e) {
		var currSize = parseInt($(".text-content").css("font-size"));
		currSize ++;
		$(".text-content").css("font-size", currSize + "px");
		e.preventDefault();
	});

	$("#smaller").click(function(e) {
		var currSize = parseInt($(".text-content").css("font-size"));
		currSize --;
		$(".text-content").css("font-size", currSize + "px");
		e.preventDefault();
	});

	$("#reload").click(function(e) {
		var num = Math.floor((Math.random()*10)+1);
		$( ".text-content" ).load( "text-" + num + ".html" );
		e.preventDefault();
	});

});