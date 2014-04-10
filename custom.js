$(document).ready(function() {

	// Test button
	$("#helloBtn").click(function() {
		alert("Hello");
	});

	// Text content variables
	var idmin = 1;
	var idmax = 10;

	// Load text content
	var id = idmin;
	$(".text-content").load("content/text-" + id +".html");

	// Set settings
	$("#sans").prop("checked", true);

	// Settings buttons
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
		id++;
		if (id > idmax) {id = 1};
		$( ".text-content" ).load( "./content/text-" + id + ".html" );
		e.preventDefault();
	});

});