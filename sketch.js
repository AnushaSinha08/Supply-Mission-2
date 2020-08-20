var helicopterIMG, helicopterSprite,groundSprite, packageSprite,packageIMG;
var packageBody,ground;
var box1,box2,box3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	box1 = createSprite(270,610,20,100);
	box2 = createSprite(380,650,200,20);
	box3 = createSprite(470,610,20,100);

	packageSprite=createSprite(width/2, 200, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.1;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);
	

	engine = Engine.create();
	world = engine.world;
	
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);
	


	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
}


function draw() {


  rectMode(CENTER);
  background(0);

  Engine.update(engine);

  box1.shapeColor = color("red");
  box2.shapeColor = color("red");
  box3.shapeColor = color("red");

  packageSprite.x= packageBody.position.x
  packageSprite.y= packageBody.position.y

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {

Matter.Body.setStatic(packageBody,false);

  }
}




