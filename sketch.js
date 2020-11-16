
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4
var pos;
var ground1,rope1,rope2,rope3,rope4,rope5;


function preload()
{
	image = loadImage("sprites/BG.jpg");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 = new Bob(300,350,50);
	bob2 = new Bob(350,350,50);
	bob3 = new Bob(400,350,50);
	bob4 = new Bob(450,350,50);
	bob5 = new Bob(500,350,50);
	
	ground1 = new Ground(400,100,500,40);
	rope1 = new Rope(bob1.body,ground1.body,-50*2,0);
	rope2= new Rope(bob2.body,ground1.body,-25*2,0);
  	rope3= new Rope(bob3.body,ground1.body,-0*2,0);
  	rope4= new Rope(bob4.body,ground1.body,25*2,0);
  	rope5= new Rope(bob5.body,ground1.body,50*2,0);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
 
  background(image);

  
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();


  ground1.display();
  drawSprites();
 
}

function keyPressed() { 
	if (keyCode === UP_ARROW) 
	{ Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-200,y:-200}); } 
}




