/*
 * Create a list that holds all of your cards
 */


/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

const deck = document.querySelector(".deck");
var openCards = new Array();
let card_array = ["fa fa-diamond", "fa fa-paper-plane-o", "fa fa-anchor", "fa fa-bolt", "fa fa-cube", "fa fa-anchor", "fa fa-leaf", "fa fa-bicycle", "fa fa-diamond",
				 "fa fa-bomb", "fa fa-leaf", "fa fa-bomb", "fa fa-bolt", "fa fa-bicycle", "fa fa-paper-plane-o", "fa fa-cube"]


// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

/*Function to rename elements based on the shuffled array*/
function addCardHTML(card_array) {
	
	/*let deck = document.querySelector(".deck");*/
	
	const liElements = deck.getElementsByTagName("li");
	const iElements = deck.getElementsByTagName("i");

	for(let i = 0; i < liElements.length; i++){
		liElements[i].className = "card";
		iElements[i].className = card_array[i];
	}

}

shuffle(card_array);
addCardHTML(card_array);

/*
addCardHTML(card_array);
/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
/*Event listener for opening a card*/


function flipCard(e){
	if (e.target.className != "card match" && e.target.className != "card open show"){
		e.target.className = "card open show";
		/*console.log(e.target.childNodes[1].className);*/
		openCards.push(e.target);
		setTimeout(function(){
		matchCards()},50);
	}
		
}

function matchCards(){
	if (openCards.length == 2)
		{
			let oneCard = openCards.pop();
			let secondCard = openCards.pop();

			if (oneCard.childNodes[1].className == secondCard.childNodes[1].className)
				{
					oneCard.className = "card match";
					secondCard.className = "card match";
				}
			else
				{
					oneCard.className = "card";
					secondCard.className = "card";
				}
		}
	
}


deck.addEventListener("click",function(e)
{
	flipCard(e);
/*	e.target.className = "card open show";
	console.log(e.target.childNodes[1].className);

	openCards.push(e.target);
	
	if (openCards.length == 2)
		{
			let oneCard = openCards.pop();
			

			let secondCard = openCards.pop();

			if (oneCard.childNodes[1].className == secondCard.childNodes[1].className)
				{
					oneCard.className = "card match";
					secondCard.className = "card match";
				}
			else
				{
					oneCard.className = "card";
					secondCard.className = "card";
				}
		}
	
	console.log(deck.innerHTML);
*/
})