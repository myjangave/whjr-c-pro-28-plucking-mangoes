
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var stones;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1025,130,30);
	mango2 = new mango(1115,100,30);
	mango3 = new mango(830,200,30);
	mango4 = new mango(885,140,30);
	mango5 = new mango(1280,204,30);
	mango6 = new mango(1220,184,30);
	mango7 = new mango(950,105,30);
	mango8 = new mango(970,235,30);
	mango9 = new mango(1050,196,30);
	mango10 = new mango(1170,226,30);

	treeObj=new tree(1050,630);
	groundObject=new ground(width/2,600,width,20);
	
    stoneObj = new Stone(235,500,25);
	  hold = new Throw(stoneObj.body,{x:240,y:420});


	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  textSize(40);
  text("Press Space to get a second Chance to Play!!!",100,100)
  drawSprites();
  image(boy ,200,340,200,300);

  detectollision(stoneObj,mango1);
  detectollision(stoneObj,mango2);
  detectollision(stoneObj,mango3);
  detectollision(stoneObj,mango4);
  detectollision(stoneObj,mango5);
  detectollision(stoneObj,mango6);
  detectollision(stoneObj,mango7);
  detectollision(stoneObj,mango8);
  detectollision(stoneObj,mango9);
  detectollision(stoneObj,mango10);

  treeObj.display();
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
  
  stoneObj.display();
  groundObject.display();
  hold.display();
}


function mouseDragged() {
	Matter.Body.setPosition(stoneObj.body,{x:mouseX,y:mouseY});
}

function mouseReleased() {
	hold.fly();
}

function detectollision(lstone,lmango){
	stoneBodyPosition = lstone.body.position;
	mangoBodyPosition = lmango.body.position;
  
	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
	if(distance <= lmango.r + lstone.r){
	  Matter.Body.setStatic(lmango.body, false);
	}
}

function keyPressed() {
	if(touches.length>0||keyCode === 32){
		hold.attach(stoneObj.body);
	}
}
