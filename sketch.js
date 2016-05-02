//========================
//	City
//========================

//your sun/moon object:
var sun = {
	x:1000,
	y:200,
	size:100,
	hue:"yellow"
}
var buildings = [];

//your building object:
function Building (){
	this.x = random(0,600);
	this.y = 700;
	this.width = 100;
	this.height = random(300,600);
	this.display = function (){
		fill("silver");
		stroke("black");
		rect(this.x,this.y,this.width.this.height);
	}
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	for (var i = 0; i < 4; i ++){
		buildings.push( new Building ());
	}
}

function draw(){
	background("cadetblue");
	fill(sun.hue);
	stroke(sun.hue);
	ellipse(sun.x,sun.y,sun.size,sun.size);
	for (var i = 0; i < buildings.length; i++){
		buildings[i].buildings();
	}

}
