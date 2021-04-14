

var hammer1, plane1,rubber1,stone1,iron,sand1,sand2;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);



 hammer=new Hammer(200,50,100,100);
 plane=new Plane(500,20,1000,700);
 rubber=new Rubber(299,50,50,50);
 stone=new Stone(400,20,20,20);
 iron=new Iron(200,200,50,50);
 sand=new Sand(200,50,20,20)
 sand2=new Sand(240,50,20,20)


    engine = Engine.create();
	world = engine.world;

 


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

  hammer.display();
  plane.display();
  rubber.display()
  stone.display();
  iron.display();
  sand.display();
 
}



