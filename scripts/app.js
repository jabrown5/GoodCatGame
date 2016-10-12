// globally define an object that will hold ALL info about our game
var playerObject = playerObject || {
	cat: localStorage.getItem('selectedCat') ,
	turns: 8,
	goodCatPoints: parseInt(localStorage.getItem('goodCatPoints'), 10),
	scoreUpdate: function(){
		// Build a function to keep score here instead of in appCatPlayer.js
	},
	scoreUpdate: function() {

		// $("#score").html(this.goodCatPoints);
	},
	turnUpdate: function() {
		this.turns = this.turns - 1 ;
		$("#turn-info").html(this.turns);
		console.log(this.turns);
		this.gameOver();
	},
	gameOver: function() {
		if (this.turns===0) {
			// HELP FROM: https://stackoverflow.com/questions/17150171/page-redirect-after-x-seconds-wait-using-javascript
			$(document).ready(function () {
			    window.setTimeout(function () {
			        location.href = "game-over.html";
			    }, 4000);
			});
		};
	}	
};

$("#kirby").on("click", function() {
	// hold the selected cat "Kirby" & pre-existing "good cat pts" in memory
	// Help from:  https://www.smashingmagazine.com/2010/10/local-storage-and-how-to-use-it/
	localStorage.setItem('selectedCat','Kirby');
	localStorage.setItem('goodCatPoints',10);
	localStorage.setItem('weightedCatPoints',3);
	// link to the game board
	window.location.replace("game-board.html");
});
$("#bennett").on("click", function() {
	// hold the selected cat "Bennett" & pre-existing "good cat pts" in memory
	localStorage.setItem('selectedCat','Bennett');
	localStorage.setItem('goodCatPoints', 25);
	localStorage.setItem('weightedCatPoints',2);
	// link to the game board
	window.location.replace("game-board.html");
});
$("#lewis").on("click", function() {
	// hold the selected cat "Lewis" & pre-existing "good cat pts" in memory
	localStorage.setItem('selectedCat','Lewis');
	localStorage.setItem('goodCatPoints', 40);
	localStorage.setItem('weightedCatPoints',1);
	// link to the game board
	window.location.replace("game-board.html");
});


