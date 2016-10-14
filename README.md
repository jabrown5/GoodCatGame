# GoodCatGame
Project #1 - The Good Cat Game

A readme.md file with explanations of the technologies used, the approach taken, installation instructions, unsolved problems, etc.

Summary:
The player has three unique cats to choose from.  Each has a personal history of being good or bad and those with a personal history of being good are given more leeway with their behaviors.  Conversely, if they are good, it's harder to earn a higher number of points for being good since you're expected to be good.  Historically, if you're a bad cat you start the game with a lower baseline of Good Cat Points.  It's much easier, however, for you to accrue positive points since no one expects you to be good. Your score is weighted more heavily if you have a bad cat history.

Play:
The player has eight turns to earn or lose points.  There are eight items the cat can interact with on the game board: the TV, carpet, a couch, a lamp, the window, the litter box, the opportunity to sleep, and remote controls.  After selecting an item with which to interact, the player has three possible actions from which to choose.  After selecting an action, the player clicks "move on" to continue.

Scoring: 
Each item to interact with has three possible actions, each of which is scored based on how naughty the behavior is. These scores are also weighted based on the selected cat's personal history of being good or bad.  The naughtier the cat, the greater the higher the weighting. 

Winning:
After completing 8 turns, the player is directed to a "game over" screen where a summary of the selected cat's behavior is outlined and "Good Cat Points" are listed. Really, no one wins or loses, the game is just for fun and you can imagine any cat you know and how s/he might behave under the circumstances.

Game Construction:
This game was built using HTML, CSS, and jQuery (2.2.4). A jQuery image resizing tool used for this project was written by David J. Bradshaw - dave@bradshaw.net (License: MIT). Other resources that aided in the construction of this game are listed in comments in the HTML, CSS, and JS files.

Installation:
This game was designed for play on a laptop or larger screen and can be found online.

Unsolved Problems:
Several functions could use refactoring.