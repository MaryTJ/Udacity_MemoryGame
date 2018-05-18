# Memory Game Project

## Table of Contents

* [Overview](#overview)
* [Dependencies](#dependencies)
* [Functionality](#functionality)
* [Credits](#credits)
* [Author](#author)

## Overview

This is a memory game project built using HTML, CSS and Javascript. It is part of Udacity FrontEnd Web Development Course. The user plays by clicking on a card to flip and will have to find the matching cards. Game statistics are shown at the end of the game.

## Dependencies

This project uses the following:

	* Bootstrap
	* Font-awesome
	* GoogleAPI Font(Coda)

## Functionality

The game consists of a score panel and deck of cards. The score panel shows the number of moves by the user, star rating of the user, time elapsed since starting the game and restart icon. The deck has cards that need to be matched after flipping over.
The cards are shuffled whenever the game starts. The user starts by clicking on a card and flipping it. Once another card is flipped, both of the cards are compared. If the cards match they remain flipped, if not they go back to their original state. While the user is playing the game a timer is keeping track of the time elapsed(Format - hrs:mins:secs). A counter is also running to keep track of the number of moves made by the user. Depending on the number of moves, star rating is decreased. Initially, the star rating is 3 (as shown by all black stars). When the user makes 20 moves, it decreases to 2 (as shown by 1 red star). When the user hits 35 moves, the star rating decreases to 1 (as shown by 1 black and 2 red stars).
When the user finishes the game by matching all cards a popup box is diplayed showing a congratulatory message, number of moves and time taken by the user. It also asks if the user wants to play game again. If the user clicks "yes", the game restarts. If the user clicks "no", the dialog box disappears showing the last state of game.
At any point in time the user can click on restart icon to restart the game.

## Credits

These websites were frequently used while developing the game

	* https://www.w3schools.com/howto/howto_css_modals.asp
	* https://www.ostraining.com/blog/coding/stopwatch/
	* https://www.w3schools.com/jsref/met_win_cleartimeout.asp
	* http://stackoverflow.com/a/2450976

## Author

This game is developed by Marium Talha for the Udacity FrontEnd Web development Course.