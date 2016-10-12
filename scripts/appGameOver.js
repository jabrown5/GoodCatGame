var playerObject = playerObject || {} ;

var selectedCat = localStorage.getItem('selectedCat');
// var goodCatPoints = localStorage.getItem('goodCatPoints');
var weightedCatPoints = localStorage.getItem('weightedCatPoints');
var goodCatPoints = parseInt(localStorage.getItem('goodCatPoints'), 10)

if (localStorage.getItem('selectedCat') === "Kirby") {
	$("#cat-image").append('<img src="images/thumb_cat-sweet-kitty-animals-57416 copy_1024.jpg" alt="" title="" />');     
} else if (localStorage.getItem('selectedCat') === "Bennett"){
	$("#cat-image").append('<img src="images/thumb_pexels-photo copy_1024.jpg" alt="" title=""/>');     
} else {
	$("#cat-image").append('<img src="images/thumb_cat-feline-cat-face-cat-s-eyes-73819 copy_1024.jpg" alt="" title=""/>');     
}

$("#cat-name").append(selectedCat);
// $("p").append(goodCatPoints);

if (goodCatPoints <= 0 ) {
	$("#game-over-text").html('How is that even possible? You are in the red for bad cat points with ' + goodCatPoints +'.');     
} else if (goodCatPoints <= 20 ) {
	$("#game-over-text").html('Hmmm.  Well, you were rather naughty today.  Bady Kitty!');     
} else if (goodCatPoints >= 40 ){
	$("#game-over-text").html('Hey!  Looks like you were a really good cat today with a total of ' + goodCatPoints + ' good cat points!');     
} else {
	$("#game-over-text").html('Not bad!  I would say you did an ok job of being a good cat');     
}
