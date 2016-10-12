// HELP FROM:  https://github.com/davidjbradshaw/image-map-resizer
$('map').imageMapResize();

var playerObject = playerObject || {} ;

var selectedCat = localStorage.getItem('selectedCat');
var goodCatPoints = localStorage.getItem('goodCatPoints');
var weightedCatPoints = localStorage.getItem('weightedCatPoints');

$("#player-info").append(selectedCat);
$("#score").append(goodCatPoints);

function Actions(action, actionOptions, score) {
	this.action = action;
	this.actionOptions = actionOptions;
	this.score = score;
};

var actionLitter = new Actions("You have to use the litter box. Do you...", ["Dig a neat hole, do your business, and tidy up.","Dig like a maniac, kicking litter everywhere.","Poop just outside the door of the litterbox."],[2,0,-2]);
var actionSleep = new Actions("You're a bit tired and are considering a nap.  Do you...",["Attack that other cat laying in your spot on the couch!","Block the entry to the other room while you snooze.","Look for a nice, quiet spot away from everyone and nap!"],[-3,0,3]);
var actionPuke = new Actions("You're laying on the couch and start to feel the rumblings of a hairball. Do you...",["Make a beeline for the hardwood.","Jump onto the floor and throw up on the rug.","Throw up on the couch."],[5,0,-5]);
var actionCables = new Actions("The cables behind the TV look interesting. Do you...",["Take a sniff and be on your way.","Curl up and lay down. They're nice and warm.","Pick the most imporant looking cable and start chewing."],[2,1,-2]);
var actionLamp = new Actions("The lamp looks interesting. Do you..",["Attempt to wear the shade as a hat.","Give it a sniff and quick 'rub' so everyone knows it's yours.","It's really not that interesting. Just stay put."],[-1,2,4]);

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

function displayActionOptions(actionOptionArray) {
	$("#btn-1").text(actionOptionArray[0])
	$("#btn-2").text(actionOptionArray[1])
	$("#btn-3").text(actionOptionArray[2])
};

// Closing the action box on click and updating the player score
// only update pts once you've selected an action and moved on
function closeActionBox() {
	$(".close").on("click", function() {
		$("#score").text(goodCatPoints);
	});
};

// SCORE KEEPING HELP FROM: https://www.experts-exchange.com/questions/23392123/Javascript-score-keeper.html
function actionButtonClick(actionScore) {
	var currentScore = $("#score").html();
	//var currentScore = playerObject.goodCatPoints;

	$("#btn-1").on("click", function() {
		// UPDATE UPDATE UPDATE: refactor the score keeping into one separate function
		goodCatPoints = parseInt(currentScore, 10) + (parseInt(actionScore[0], 10)*parseInt(weightedCatPoints));
		console.log(goodCatPoints);
		//return goodCatPoints;
		closeActionBox();
	});
	$("#btn-2").on("click", function() {
		goodCatPoints = parseInt(currentScore, 10) + (parseInt(actionScore[1], 10)*parseInt(weightedCatPoints));
		console.log(goodCatPoints);
		//return goodCatPoints;
		closeActionBox();

	});
	$("#btn-3").on("click", function() {
		goodCatPoints = parseInt(currentScore, 10) + (parseInt(actionScore[2], 10)*parseInt(weightedCatPoints));
		console.log(goodCatPoints);
		//return goodCatPoints;
		closeActionBox();

	});
		playerObject.turnUpdate();
		playerObject.goodCatPoints = currentScore;

		localStorage.setItem('goodCatPoints',currentScore);


};

