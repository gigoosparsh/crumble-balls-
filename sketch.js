
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bin,ball;



function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	
  bin = new Dustbin(600,500,20,200);
  bin1 = new Dustbin(300,200,30,100);

  ground = new Ground(400,650,800,20);
  ball = new paper(50,400,40);
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  bin.display();
  ground.display();
 ball.display();
 bin1.display();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(ball.body,ball.body.position,{x:130,y:-145});

  
	}
}

