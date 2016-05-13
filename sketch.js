//========================
//	City
//========================

//your sun/moon object:
var stars;

var sun = {
	x:1000,
	y:200,
	size:100,
	hue:"yellow"
};
var buildings = [];

//unique object
function preload(){
	stars = loadImage("stars.png");

//your building object:
function Building (){
	this.x = random(0,800);
	this.y = random(200,800);
	this.width = 100;
	this.height = random(600,1000);
	this.display = function (){
		fill("silver");
		stroke("black");
		rect(this.x,this.y,this.width,this.height);
	}
}


function setup() {
	createCanvas(windowWidth, windowHeight);
	for (var i = 0; i < 10; i ++){
		buildings.push( new Building ());
	}
}

function draw(){
	background("cadetblue");
	for (var i = 0; i < 50; i ++){
		image(stars);
	}
	fill(sun.hue);
	stroke(sun.hue);
	ellipse(sun.x,sun.y,sun.size,sun.size);
	for (var i = 0; i < buildings.length; i++){
		buildings[i].display();

	}

}
