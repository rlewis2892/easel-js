function init() {

	// grab the canvas element
	var canvas = document.getElementById("demo-canvas");

	// Define a stage by creating a new Stage instance, passing in our canvas element's ID.
	// This stage will hold all of our display objects and act as the visual container to our project.
	var stage = new createjs.Stage("demo-canvas");

	// get the size of the responsive canvas element
	var stageWidth = canvas.offsetWidth;
	var stageHeight = canvas.offsetHeight;

	// set the width and height attributes on the canvas element
	canvas.setAttribute("width", stageWidth);
	canvas.setAttribute("height", stageHeight);

	// sanity check
	// console.log("canvas width:" + stageWidth + " " + "canvas height:" + stageHeight);

	// Let's create a shape. First, we need a new Shape instance.
	// Then we can use shape's graphics API to give it color and bounds.
	// Position it on the canvas with x and y coordinates, and add it to our stage.
	var circle = new createjs.Shape();
	circle.graphics.beginFill("DeepSkyBlue").drawCircle(0,0,50);

	// draw the circle at coordinates that are 50% of the canvas width, and height (i.e., the "center" :P)
	circle.x = stageWidth * 0.5;
	circle.y = stageHeight * 0.5;
	stage.addChild(circle);

	// Update our stage to display the shape
	stage.update();

}