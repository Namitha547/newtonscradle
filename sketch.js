
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1=new Paper(270,500,70);
	bob2=new Paper(340,500,70);
	bob3=new Paper(410,500,70);
	bob4=new Paper(480,500,70);
	bob5=new Paper(550,500,70);
	rope1=new Rope(bob1.body,ground.body,bobDiameter*2,0);
	ground=new Ground(400,250,400,20);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  ground.display();
  drawSprites();
 
}



