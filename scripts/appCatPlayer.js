// HELP FROM:  https://github.com/davidjbradshaw/image-map-resizer
// This code allows for the image to be resized but for the coordinates for each clickable item to remain.
// For different screen sizes & possible media queries
$('map').imageMapResize();

var playerObject = playerObject || {} ;

// Grabbing the cat selections from Intro screen that was stored in "memory" or localStorage on the browser
var selectedCat = localStorage.getItem('selectedCat');
var goodCatPoints = localStorage.getItem('goodCatPoints');
var weightedCatPoints = localStorage.getItem('weightedCatPoints');

// Appending the selected cat & that cat's "good cat points" onto the game board
$("#player-info").append(selectedCat);
$("#score").append(goodCatPoints);

// Constructor for all the cat actions
function Actions(action, actionOptions, score) {
	this.action = action;
	this.actionOptions = actionOptions;
	this.score = score;
};

// All of the cat actions, corresponding options, & scoring is below.
var actionLitter = new Actions("You have to use the litter box. Do you...", ["Dig a neat hole, do your business, and tidy up.","Dig like a maniac, kicking litter everywhere.","Poop just outside the door of the litterbox."],[2,0,-2]);
var actionSleep = new Actions("You're a bit tired and are considering a nap.  Do you...",["Attack that other cat laying in your spot on the couch!","Block the entry to the other room while you snooze.","Look for a nice, quiet spot away from everyone and nap!"],[-3,0,3]);
var actionPuke = new Actions("You're laying on the couch and start to feel the rumblings of a hairball. Do you...",["Make a beeline for the hardwood.","Jump onto the floor and throw up on the rug.","Throw up on the couch."],[5,0,-5]);
var actionCables = new Actions("The cables behind the TV look interesting. Do you...",["Take a sniff and be on your way.","Curl up and lay down. They're nice and warm.","Pick the most imporant looking cable and start chewing."],[2,1,-2]);
var actionLamp = new Actions("The lamp looks interesting. Do you..",["Attempt to wear the shade as a hat.","Give it a sniff and quick 'rub' so everyone knows it's yours.","It's really not that interesting. Just stay put."],[-1,2,4]);
var actionCouch = new Actions("You haven't 'done your nails' in a while and the couch is just sitting there. Do you..",["Ridiculous! There are better ways to do your nails.","Really get into it and claw with abandon.","Use the rug to do your nails instead."],[3,-4,-1]);
var actionWindow = new Actions("Looking out the window is always relaxing. Do you..",["Press your nose against the glass and maybe sneeze or lick the window.","Dangle from the drapes. It's much more fun.","Sit like a good cat on the windowsill and enjoy the view."],[0,-2,3]);
var actionRemotes = new Actions("What are these remotes doing on your dais? Do you..",["Slap that crap right onto the floor where it belongs!!","Nudge them a bit but it's not really a priority.","Who cares? We are all sharing this space."],[-1,1,3]);

// Each clickable area & corresponding action is below.
$("#sleep-btn").on("click", function() {
	$("#action-text").text(actionSleep.action);
	displayActionOptions(actionSleep.actionOptions);
	actionButtonClick(actionSleep.score);
});
$("#litter-btn").on("click", function() {
	$("#action-text").text(actionLitter.action);
	displayActionOptions(actionLitter.actionOptions);
	actionButtonClick(actionLitter.score);
});
$("#carpet").on("click", function() {
	$("#action-text").text(actionPuke.action);
	displayActionOptions(actionPuke.actionOptions);
	actionButtonClick(actionPuke.score);
});
$("#tv").on("click", function() {
	$("#action-text").text(actionCables.action);
	displayActionOptions(actionCables.actionOptions);
	actionButtonClick(actionCables.score);
});
$("#lamp").on("click", function() {
	$("#action-text").text(actionLamp.action);
	displayActionOptions(actionLamp.actionOptions);
	actionButtonClick(actionLamp.score);
});
$("#couch").on("click", function() {
	$("#action-text").text(actionCouch.action);
	displayActionOptions(actionCouch.actionOptions);
	actionButtonClick(actionCouch.score);
});
$("#window").on("click", function() {
	$("#action-text").text(actionWindow.action);
	displayActionOptions(actionWindow.actionOptions);
	actionButtonClick(actionWindow.score);
});
$("#remotes").on("click", function() {
	$("#action-text").text(actionRemotes.action);
	displayActionOptions(actionRemotes.actionOptions);
	actionButtonClick(actionRemotes.score);
});

// Populating the action text on the buttons w/in the modal
function displayActionOptions(actionOptionArray) {
	$("#btn-1").text(actionOptionArray[0])
	$("#btn-2").text(actionOptionArray[1])
	$("#btn-3").text(actionOptionArray[2])
};

// SCORE KEEPING HELP FROM: https://www.experts-exchange.com/questions/23392123/Javascript-score-keeper.html
function actionButtonClick(actionScore) {
	var currentScore = $("#score").html();

	$("#btn-1").on("click", function() {
		// UPDATE UPDATE UPDATE: refactor the score keeping into one separate function
		goodCatPoints = parseInt(currentScore, 10) + (parseInt(actionScore[0], 10)*parseInt(weightedCatPoints));
		localStorage.setItem('goodCatPoints',goodCatPoints);
		closeActionBox();
	});
	$("#btn-2").on("click", function() {
		goodCatPoints = parseInt(currentScore, 10) + (parseInt(actionScore[1], 10)*parseInt(weightedCatPoints));
		localStorage.setItem('goodCatPoints',goodCatPoints);
		closeActionBox();
	});
	$("#btn-3").on("click", function() {
		goodCatPoints = parseInt(currentScore, 10) + (parseInt(actionScore[2], 10)*parseInt(weightedCatPoints));
		localStorage.setItem('goodCatPoints',goodCatPoints);
		closeActionBox();
	});
		playerObject.turnUpdate();
};

// Closing the action box on click and updating the player score
// only update pts once you've selected an action and moved on
function closeActionBox() {
	$(".close").on("click", function() {
		$("#score").text(goodCatPoints);
	});
};