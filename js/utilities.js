$(document).ready(function(){

	/*
	* Make Canvas Responsive
	*
	* based on: http://ameijer.nl/2011/08/resizable-html5-canvas/
	* */

	//get the canvas
	var canvas = $('#demo-canvas');
	var ct = canvas.get(0).getContext('2d');
	var container = $(canvas).parent();

	//run function when browser resizes
	//$(window).ready(respondCanvas);

	function respondCanvas() {
		//max width
		canvas.attr('width', $(container).width());

		//max height
		canvas.attr('height', $(container).height());

		//call a function to redraw other content (text, images, etc.)
	}

	//respondCanvas();

});