$(document).ready(function(event) {
	console.log("document ready");
	// HELP FROM:  https://github.com/davidjbradshaw/image-map-resizer
	$('map').imageMapResize();

var playerObject = playerObject || {} ;

var selectedCat = localStorage.getItem('selectedCat');
var goodCatPoints = localStorage.getItem('goodCatPoints');
var weightedCatPoints = localStorage.getItem('weightedCatPoints');

$("#player").append(selectedCat);
$("#score").append(goodCatPoints);

// console.log(selectedCat, goodCatPoints, weightedCatPoints);

// function CatPlayer (chosenCat, goodCatPointsStart, weightedCatPoints ) {
// 	this.chosenCat = chosenCat;
// 	this.goodCatPointsStart = goodCatPointsStart;
// 	this.weightedCatPoints = weightedCatPoints;
// };

// var kirbyPlayer = new CatPlayer("Kirby", 10, 3);
// var bennettPlayer = new CatPlayer("Bennett", 25, 2);
// var lewisPlayer = new CatPlayer("Lewis", 40, 1);

function Actions(action, actionOptions, score) {
	this.action = action;
	this.actionOptions = actionOptions;
	this.score = score;
}

var actionLitter = new Actions("You have to use the litter box. Do you...", ["Dig a neat hole, do your business, and tidy up.","Dig like a maniac, kicking litter everywhere.","Poop just outside the door of the litterbox."],[2,0,-2]);
var actionSleep = new Actions("You're a bit tired and are considering a nap.  Do you...",["Attack that other cat laying in your spot on the couch!","Block the entry to the other room while you snooze.","Look for a nice, quiet spot away from everyone and nap!"],[-3,0,3]);
var actionPuke = new Actions("You're laying on the couch and start to feel the rumblings of a hairball. Do you...",["Make a beeline for the hardwood.","Jump onto the floor and throw up on the rug.","Throw up on the couch."],[5,0,-5]);
var actionCables = new Actions("The cables behind the TV look interesting. Do you...",["Take a sniff and be on your way.","Curl up and lay down. They're nice and warm.","Pick the most imporant looking cable and start chewing."],[2,1,-2]);
var actionLamp = new Actions("The lamp looks interesting. Do you..",["Attempt to wear the shade as a hat.","Give it a sniff and quick 'rub' so everyone knows it's yours.","It's really not that interesting. Just stay put."],[-1,2,4]);

$("#sleep-btn").on("click", function() {
	console.log("click works");
	$("#action-text").text(actionSleep.action);
	displayActionOptions(actionSleep.actionOptions);
});
$("#litter-btn").on("click", function() {
	console.log("click works");
	$("#action-text").text(actionLitter.action);
	displayActionOptions(actionLitter.actionOptions);
});
$("#carpet").on("click", function() {
	console.log("click works");
	$("#action-text").text(actionPuke.action);
	displayActionOptions(actionPuke.actionOptions);
});
$("#tv").on("click", function() {
	console.log("click works");
	$("#action-text").text(actionCables.action);
	displayActionOptions(actionCables.actionOptions);
});
$("#lamp").on("click", function() {
	console.log("click works");
	$("#action-text").text(actionLamp.action);
	displayActionOptions(actionLamp.actionOptions);
});

function displayActionOptions(actionOptionArray) {
	$("#btn-1").text(actionOptionArray[0])
	$("#btn-2").text(actionOptionArray[1])
	$("#btn-3").text(actionOptionArray[2])
};




});