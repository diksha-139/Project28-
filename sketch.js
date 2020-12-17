
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground;
var boy,stone,mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11,mango12,mango13,tree;
var elastic1;


function preload()
{
	boy=loadImage("boy.png");
	tree =loadImage("tree.png");
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,690,1200,10);

	

	mango1 = new Mango(700,400,20);
	mango2 = new Mango(750,400,30);
	mango3 = new Mango(800,350,25);
	mango4 = new Mango(850,400,20);
	mango5 = new Mango(900,350,30);
	mango6 = new Mango(950,400,30);
	mango7 = new Mango(1000,350,20);
	mango8 = new Mango(1050,350,25);
	mango9 = new Mango(820,300,20);
	mango10 = new Mango(1050,300,24);
	mango11= new Mango(1100,400,23);
	mango12 = new Mango(980,350,20);
	mango13 = new Mango(1000,300,30);
	stone = new Stone(100,550,50);

	elastic1 = new Elastic(stone.body,{x:100,y:550});

	Engine.run(engine);
  
}


function draw() {
	background(200);
	textSize(24);
	text("Get another chance to play by pressing 'Space'",10,130);
  rectMode(CENTER);
  
  ground.display();
 
  push();
  imageMode(CENTER);
	image(boy,120,640,100,200);
	image (tree,900,450,600,500);
	pop ();



mango1.display();
mango2.display();
mango3.display();
mango4.display();
mango5.display();
mango6.display();
mango7.display();
mango8.display();
mango9.display();
mango10.display();
mango11.display();
mango12.display();
mango13.display();
stone.display();
elastic1.display();
collisionDetect(stone,mango1);
collisionDetect(stone,mango2);
collisionDetect(stone,mango3);
collisionDetect(stone,mango4);
collisionDetect(stone,mango5);
collisionDetect(stone,mango6);
collisionDetect(stone,mango7);
collisionDetect(stone,mango8);
collisionDetect(stone,mango9);
collisionDetect(stone,mango10);
collisionDetect(stone,mango11);
collisionDetect(stone,mango12);
collisionDetect(stone,mango13);

}

function mouseDragged(){
	
	Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
	}

function mouseReleased(){

		elastic1.fly();
	}

function keyPressed(){
if(keyCode === 32){
	Matter.Body.setPosition(stone.body,{x:100,y:600});
	elastic1.attach(stone.body);
}
}

function collisionDetect(lstone,lmango){
stonePos=lstone.body.position;
mangoPos=lmango.body.position;

var distance= dist(stonePos.x,stonePos.y,mangoPos.x,mangoPos.y);

if(distance <= lstone.r+lmango.r){
	Matter.Body.setStatic(lmango.body,false);
}

}


