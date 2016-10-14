# "The Good Cat Game"

### Deliverables

* __HTML__
	*index.html
	*game-board.html
	*game-over.html

* __CSS__
	*normalize.css
	*skeleton.css
	*main.css
	*game-board-main.css
	*game-over-main.css

* __Scripts__
	*appImageResizer.js
	*app.js
	*appCatPlayer.js
	*appGameOver.js

* __Images__
	* background photo (CC0 license)
	* cat photos (CC0 license)

### __Technical Requirements__
This game was designed for play on a laptop or larger screen and can be initiated by visiting the link: https://jabrown5.github.io/Project1/index.html

### __Game Construction__
This game was built using HTML, CSS (populated using SASS), and jQuery (2.2.4). A jQuery image resizing tool used for this project was written by David J. Bradshaw - dave@bradshaw.net (License: MIT). Skeleton HTML and CSS provided the foundation for the game pages which was then modified and styled for purposes of this game. Other resources that aided in the construction of this game are listed in comments in the HTML, CSS, and JS files.

### __Summary__
The player has three unique cats to choose from.  Each has a personal history of being good or bad and those with a personal history of being good are given more leeway with their bad behaviors but don't earn as many points for good behavior.  Based on their personal histories, each cat begins the day with a certain number of "Good Cat Points" to add to or subtract from based on their behaviors. 

#### __Play__
The player has eight turns to earn or lose points.  There are eight items in the room that the cat can interact with on the game board: the TV, carpet, a couch, remote controls, a lamp, the window, the litter box, and is given the opportunity to nap. After selecting an item with which to interact, the player has three possible actions from which to choose. After selecting an action, the player clicks "move on" to continue.

#### __Scoring__
Each item to interact with has three possible actions, each of which is scored based on how naughty the behavior is. These scores are then weighted based on the selected cat's personal history of being good or bad. For example, the naughtier the cat, the greater the weight value for both good and bad behavior. 

#### __Winning__
After completing 8 turns, the player is directed to a "game over" screen where a summary of the selected cat's behavior is outlined and "Good Cat Points" are listed. Really, no one wins or loses, the game is just for fun and you can imagine any cat you know and how s/he might behave under the circumstances.

### __Unsolved Problems / Future Work__
- [ ] Several functions could use refactoring.
- [ ] Sound effects
- [ ] Responsiveness