//Cards. 

function Card(x, y, val, suit){
	
	this.x = x;   //pos on canvas
	this.y = y;   //pos on canvas
	this.w = 150;  //width
	this.h = 200; //height
	this.val = val; //1 is ace, 11 jack, 12 queen, 13 king
	this.suit = suit;
	this.dealt = false; //if dealt during game, make true as to not redeal..
		
	this.img = loadImage("https://zaxn1234.github.io/portfolio/projects/BlackJack/img/"+this.val+this.suit+".png");
	
	this.show = function() {
		push();
			stroke(0,0,255);
			strokeWeight(4);
		fill(255);
		image(this.img,this.x, this.y, this.w, this.h);
		text(this.img,10,10);
		pop();
	}
	
}