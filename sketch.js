const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var dustbinObject;
var ballObject;



function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
    world = engine.world;

	ballObject = new Ball(20, 340, 70);
	dustbinObject = new Dustbin(260, 340, 30, 50);
}

function draw(){
	background("white");
	rectMode(CENTER);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
	console.log(box2.body.angle);
	if(keyDown("space")) {
		ballObject.velocityX = 3;
	}
	ballObject.display();
	dustbinObject.display();

}