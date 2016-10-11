$(document).ready(function(event) {
	console.log("document ready");

var playerObject = playerObject || {} ;

function CatPlayer (chosenCat, goodCatPoints ) {
	this.chosenCat = chosenCat;
	this.goodCatPoints = goodCatPoints;
}

// var kirbyPlayer = new CatPlayer("Kirby",10);
// var bennettPlayer = new CatPlayer("Bennett", 25);
// var lewisPlayer = new CatPlayer("Lewis", 40);

function Actions(action, actionOptions, score) {
	this.action = action;
	this.actionOptions = actionOptions;
	this.score = score;
}

var actionLitter = new Actions("You have to use the litter box. Do you...", ["Dig a neat hole, do your business, and tidy up nicely.","Dig like a maniac, kicking litter everywhere.","Poop just outside the door of the litterbox."],[2,0,-2]);
var actionSleep = new Actions("You're a bit tired and are considering a nap.  Do you...",["Attack that other cat laying in your spot on the couch!","Sit and block the pathway to the other room while you snooze.","Look for a nice, quiet spot away from the other cats for some rest."],[-3,0,3]);
var actionPuke = new Actions("You're laying on the couch and start to feel the rumblings of a hairball. Do you...",["Make a beeline for the hardwood.","Jump onto the floor and throw up on the rug.","Throw up on the couch."],[5,0,-5]);
var actionCables = new Actions("The cables behind the TV look interesting. Do you...",["Take a sniff and be on your way.","Curl up and lay down. They're nice and warm.","Pick the most imporant looking cable and start chewing."],[2,1,-2]);
var actionLamp = new Actions("The lamp looks interesting. Do you..",["Attempt to wear the lamp shade as a hat.","Give it a sniff and a quick 'rub' so everyone knows it's yours","It's really not that interesting. Just stay put."],[-1,2,4]);

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
$("#puke-btn").on("click", function() {
	console.log("click works");
	$("#action-text").text(actionPuke.action);
	displayActionOptions(actionPuke.actionOptions);
});
$("#cables-btn").on("click", function() {
	console.log("click works");
	$("#action-text").text(actionCables.action);
	displayActionOptions(actionCables.actionOptions);
});
$("#lamp-btn").on("click", function() {
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