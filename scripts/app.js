// globally define an object that will hold ALL info about our game
var playerObject = playerObject || {} ;
// playerObject.cat = "" ;
// playerObject.score = 0;
// playerObject.turn = 0;
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
		// hold the selected cat "Kirby" & pre-existing "good cat pts" in memory
		// Help from:  https://www.smashingmagazine.com/2010/10/local-storage-and-how-to-use-it/
		localStorage.setItem('selectedCat','Kirby');
		localStorage.setItem('goodCatPoints',10);
		localStorage.setItem('weightedCatPoints',3);
		// link to the game board
		window.location.replace("game-board.html");
		// playerObject.cat = "Kirby";
		//return playerObject.cat;

	});
	$("#bennett").on("click", function() {
		// hold the selected cat "Bennett" & pre-existing "good cat pts" in memory
		localStorage.setItem('selectedCat','Bennett');
		localStorage.setItem('goodCatPoints', 25);
		localStorage.setItem('weightedCatPoints',2);
		// link to the game board
		window.location.replace("game-board.html");
		// playerObject.cat = "Bennett";

	});
	$("#lewis").on("click", function() {
		// hold the selected cat "Lewis" & pre-existing "good cat pts" in memory
		localStorage.setItem('selectedCat','Lewis');
		localStorage.setItem('goodCatPoints', 40);
		localStorage.setItem('weightedCatPoints',1);
		// link to the game board
		window.location.replace("game-board.html");
		// playerObject.cat = "Lewis";

	});


});

