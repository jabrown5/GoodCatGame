// globally defined an object that will hold ALL info about our game
var playerObject = playerObject || {
	cat: localStorage.getItem('selectedCat') ,
	turns: 8,
	goodCatPoints: parseInt(localStorage.getItem('goodCatPoints'), 10),
	scoreUpdate: function() {
		// Build a function to keep score here instead of in appCatPlayer.js
		// $("#score").html(this.goodCatPoints);
		// this.goodCatPoints = currentScore;
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

// User selects their "player cat" here
$("#kirby").on("click", function() {
	// Help from:  https://www.smashingmagazine.com/2010/10/local-storage-and-how-to-use-it/
	// hold the selected cat "Kirby" & pre-existing "good cat pts" in memory so it can be grabbed for use on the "game-board" screen.
	localStorage.setItem('selectedCat','Kirby');
	localStorage.setItem('goodCatPoints',10);
	localStorage.setItem('weightedCatPoints',3);
	// link to the game board
	window.location.replace("game-board.html");
});
$("#bennett").on("click", function() {
	localStorage.setItem('selectedCat','Bennett');
	localStorage.setItem('goodCatPoints', 25);
	localStorage.setItem('weightedCatPoints',2);
	window.location.replace("game-board.html");
});
$("#lewis").on("click", function() {
	localStorage.setItem('selectedCat','Lewis');
	localStorage.setItem('goodCatPoints', 40);
	localStorage.setItem('weightedCatPoints',1);
	window.location.replace("game-board.html");
});
