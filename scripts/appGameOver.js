var playerObject = playerObject || {} ;

var selectedCat = localStorage.getItem('selectedCat');
// var goodCatPoints = localStorage.getItem('goodCatPoints');
var weightedCatPoints = localStorage.getItem('weightedCatPoints');
var goodCatPoints = parseInt(localStorage.getItem('goodCatPoints'), 10)

if (selectedCat === "Kirby") {
	$("#cat-image").append('<img src="images/thumb_cat-sweet-kitty-animals-57416 copy_1024.jpg" alt="" title="" />');     
} else if (selectedCat === "Bennett"){
	$("#cat-image").append('<img src="images/thumb_pexels-photo copy_1024.jpg" alt="" title=""/>');     
} else {
	$("#cat-image").append('<img src="images/thumb_cat-feline-cat-face-cat-s-eyes-73819 copy_1024.jpg" alt="" title=""/>');     
}

$("#cat-name").append(selectedCat);
// $("p").append(goodCatPoints);

// if (goodCatPoints <= 0 ) {
// 	$("#game-over-text").html('How is that even possible? You are in the red for bad cat points with ' + goodCatPoints +'.');     
// } else if (goodCatPoints <= 20 ) {
// 	$("#game-over-text").html('Hmmm.  Well, you were rather naughty today.  Bady Kitty!');     
// } else if (goodCatPoints >= 40 ){
// 	$("#game-over-text").html('Hey!  Looks like you were a really good cat today with a total of ' + goodCatPoints + ' good cat points!');     
// } else {
// 	$("#game-over-text").html('Not bad!  With ' + goodCatPoints + ' I would say you did an ok job of being a good cat');     
// }

// if (selectedCat === "Kirby" && goodCatPoints <= 0 ) {
// 	$("#game-over-text").html('Well, the expectations were really low for you to begin with and you did not disappoint. But still ... negative Good Cat Points? Come on now. Anyway, you ended the day with ' + goodCatPoints +' Good Cat Points.');     
// } else if (goodCatPoints <= 20 ) {
// 	$("#game-over-text").html('Hmmm.  Well, you were rather naughty today.  Bady Kitty!');     
// } else if (goodCatPoints >= 40 ){
// 	$("#game-over-text").html('Hey!  Looks like you were a really good cat today with a total of ' + goodCatPoints + ' good cat points!');     
// } else {
// 	$("#game-over-text").html('Not bad!  With ' + goodCatPoints + ' I would say you did an ok job of being a good cat');     
// }

if (selectedCat === "Kirby" ) {
	if (goodCatPoints <=0 ) {
	$("#game-over-text").html("Well, the expectations were really low for you to begin with and you did not disappoint. But still ... negative Good Cat Points? Come on now. Anyway, you ended the day with " + goodCatPoints + " Good Cat Points."); 
	} else if (goodCatPoints<=20) {
	$("#game-over-text").html("Not too bad. If it were any other cat, you'd be considered a mostly rotten cat. This is typical for you and you ended the day with " + goodCatPoints + " Good Cat Points."); 
	}  else if (goodCatPoints <= 40) {
	$("#game-over-text").html("Hey, nice job! You were a really good cat today with a total of " + goodCatPoints + " Good Cat Points. You've got alot to be proud of with all those positive decisions that you made today."); 
	}  else {
	$("#game-over-text").html(goodCatPoints + " Good Cat Points! Were you abducted by aliens and replaced by a robot?  That's out of this world! Just remember that part of your charm is your naughty nature."); 
	}

} else if (selectedCat === "Bennett") {
	if (goodCatPoints <=0 ) {
	$("#game-over-text").html("This is really surprising given your day was not spent in the kitchen where the most of your naughtiness occurs. You scored a very disappointing " + goodCatPoints + " Good Cat Points. There's always tomorrow."); 
	} else if (goodCatPoints<=20) {
	$("#game-over-text").html("Considering you began your day with a reputation cache of 25 Good Cat Points, this is a little surprising.  It's not terrible but you can definitely improve on the " + goodCatPoints + " Good Cat Points you earned today."); 
	}  else if (goodCatPoints <= 40) {
	$("#game-over-text").html("Nice job scoring " + goodCatPoints + " Good Cat Points. It's a middling score for you but you have alot to be proud of after today."); 
	}  else {
	$("#game-over-text").html("Outstanding! You were a model house cat today. Everyone should be more like you and show such improvement over your reputation cache of 25 Good Cat Points. You went above and beyond and earned " + goodCatPoints + " Good Cat Points today."); 
	}

} else {
	if (goodCatPoints <=0 ) {
	$("#game-over-text").html("It's not clear if this is even mathematically possible! You have always been a pillar of good behavior so what went wrong? How can you fall so far from your average of 40 Good Cat Points to " + goodCatPoints + ". It's almost like you stole a car and then robbed a casino..."); 
	} else if (goodCatPoints<=20) {
	$("#game-over-text").html("For you, this is pretty bad.  You must have engaged in alot of naughtiness to fall this far. How disappointing. Try to improve on your score of " + goodCatPoints + " Good Cat Points."); 
	}  else if (goodCatPoints <= 40) {
	$("#game-over-text").html("Well, it's not great given your sterling reputation but who doesn't want to let their hair down every once in a while? You ended the day with " + goodCatPoints + " Good Cat Points."); 
	}  else {
	$("#game-over-text").html("Outstanding! You've improved on your daily model house cat performances and been an even better boy today. Congratulations on your daily total of " + goodCatPoints + " Good Cat Points!"); 
	}

}

