//main js file for p5

var Money = 1000;
var Hand = 0;
var Deck = [];

function setup() {
	createCanvas(980, 800);
	initDeck();
	
}

function draw() {
	background(0,140,75);
	drawTable();
	for(i = 1;i<= Deck.length; i++){
      Deck[i].show();
	}
	
}


function drawTable(){

	//Draw player hand holders & Buttons (hit,stand,bet)
	push();
	noFill();
	stroke(255);
	strokeWeight(4);
	rect(200, 100, 750, 200);
	rect(200, 500, 750, 200);
	rect(10, 730, 150, 50); 
	rect(200, 350, 200, 100); 
	rect(750, 350, 200, 100); 
	
	
	textSize(24);
	fill(255);
	strokeWeight(0);
	text("Bet!", 63, 762);
	text("Hit!", 280, 410);
	text("Stand!", 815, 410);
	pop();
	
	push(); //Scores
	textSize(32);
	fill(218,165,32);
	text("Total Money: "+Money, 380,50);
	text("Hand Value: "+Hand, 475, 475);
	pop();
	
	push();  //Bet Chips
	noFill();
	stroke(255);
	strokeWeight(2);
	ellipse(40,550,50,50); text("5", 37, 555);
	ellipse(120,550,50,50);text("10", 114, 555);
	ellipse(40,620,50,50);text("25", 34, 625);
	ellipse(120,620,50,50);text("50", 114, 625);
	ellipse(40,690,50,50);text("100", 30, 695);
	ellipse(120,690,50,50);text("500", 110, 695);
	pop();
	

	
}


function initDeck() {

	for(var i = 1; i <= 13; i++){
		Deck[i] = new Card(10, 300, i, "Spades");
	}
	for(var i = 1; i <= 13; i++){
		Deck[i+13] = new Card(10, 300, i, "Hearts");
	}
	for(var i = 1; i <= 13; i++){
		Deck[i+26] = new Card(10, 300, i, "Clubs");
	}
	for(var i = 1; i <= 13; i++){
		Deck[i+39] = new Card(10, 300, i, "Diamonds");
	}
	
	Deck[54] = new Card(10,300,0,"DeckTop"); //cover all other decked cards with a fake card face down.
	
}