
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roofObject, roofObj, bob3, bob1, bob2, bob4, bob5, rope1, rope2,rope3, rope4, rope5;

function setup() {
	createCanvas(1200, 750);


	engine = Engine.create();
	world = engine.world;

	

	bobDiameter = 100;
	//startBobPositionX = width/2; 
	//startBobPositionY = height/4 + 500;

	bob1 = new Bob(width/2, 500, 100);
	bob2 = new Bob(width/2 + bobDiameter, 500, 100);
	bob3 = new Bob(width/2 + bobDiameter + bobDiameter, 500, 100);
	bob4 = new Bob(width/2 - bobDiameter, 500, 100);
	bob5 = new Bob(width/2 - bobDiameter - bobDiameter, 500, 100);

	//Create the Bodies Here.
	//roofObj = new Roof(500, 200, 500, 20);
	roofObject = new Roof(width/2, 150, 500, 20);

	rope1 = new Rope(bob5.body, roofObject.body, -bobDiameter*2,0);
	rope2 = new Rope(bob4.body, roofObject.body, -bobDiameter, 0);
	rope3 = new Rope(bob3.body, roofObject.body, bobDiameter*2, 0);
	rope4 = new Rope(bob2.body, roofObject.body, bobDiameter, 0);
	rope5 = new Rope(bob1.body, roofObject.body, 0, 0);

	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(220);
  Engine.update(engine);

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

  //roofObj.display();
  roofObject.display();
  
 
}

function keyPressed()
{
	if (keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(bob3.body, bob3.body.position, {x:600, y:500});
	}
}

