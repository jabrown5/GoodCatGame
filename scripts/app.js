
// globally define an object that will hold ALL info about our game
var playerObject = playerObject || {} ;
playerObject.score = 0;
// playerObject.selectedCat = /* choose cat on index.html */ ;


// window.onload = function(event) {
// 	console.log("window onload");
// 	console.log(event);
// 	console.log(playerObject);
// };

//use this one if you're using jquery b/c you want to make sure jquery is loaded first before moving on to other functions in app.js
$(document).ready(function(event) {
	console.log("document ready");
	console.log(event);
	console.log(playerObject);

	$("#kirby").on("click", function() {
		// hold the selected cat "Kirby" in memory
		var kirbyPlayer = new CatPlayer("Kirby",10);

		// link to the game board
		window.location.replace("game-board.html");

	});
	$("#bennett").on("click", function() {
		// hold the selected cat "Bennett" in memory
		var bennettPlayer = new CatPlayer("Bennett", 25);

		window.location.replace("game-board.html");


	});
	$("#lewis").on("click", function() {
		// hold the selected cat "Lewis" in memory
		var lewisPlayer = new CatPlayer("Lewis", 40);

		window.location.replace("game-board.html");
	});


});

