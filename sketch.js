
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var tree, treeIMG;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8;
var point1, point2, point3, point4, point5, point6, point7, point8;
var rock, rockPoint;
var person;
var ground, groundDisplay, sky, lwall, rwall;



function preload()
{
	treeIMG=loadImage("treeBG.png")
}

function setup() {
	createCanvas(1000, 600);

	

	engine = Engine.create();
	world = engine.world;

	

	

	mango1 = new Mango(550, 350, 5, 5)
	mango2 = new Mango(750, 120, 5, 5)
	mango3 = new Mango(850, 300, 5, 5)
	mango4 = new Mango(700, 300, 5, 5)
	mango5 = new Mango(550, 120, 5, 5)
	mango6 = new Mango(640, 180, 5, 5)
	//mango7 = new Mango(100, 100, 5, 5)
	//mango8 = new Mango(710, 300, 5, 5)

	point1 = new PointLink(mango1.ball, {x:550, y:350});
	point2 = new PointLink(mango2.ball, {x:750, y:120});
	point3 = new PointLink(mango3.ball, {x:850, y:300});
	point4 = new PointLink(mango4.ball, {x:700, y:300});
	point5 = new PointLink(mango5.ball, {x:550, y:120});
	point6 = new PointLink(mango6.ball, {x:640, y:180});
	//point7 = new MangoPointLink(mango5.ball, {x:710, y:100});
	//point8 = new MangoPointLink(mango8.ball, {x:710, y:300});
	
ground = new Edges(500, 580, 1000, 10)
groundDisplay = new Edges(500, 600, 1000, 10)


rock = new Rock(150, 450)
rockPoint = new Slingshot(rock.body, {x:150, y:450})


	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  
  background(treeIMG);
  


mango1.display()
mango2.display()
mango3.display()
mango4.display()
mango5.display()
mango6.display()
//mango7.display()
//mango8.display()

point1.display()
point2.display()
point3.display()
point4.display()
point5.display()
point6.display()
//point7.display()
//point8.display()


//ground.display()
groundDisplay.display()

rock.display()
rockPoint.display()


  drawSprites();
 
}

/*

function mouseDragged(){

	Matter.Body.setPosition(bird.body, {x: mouseX, y: mouseY})
	
	
	}
	
	
	function mouseReleased(){
	
	
	slingshot.fly()
	
	
	}

	*/




	
function mouseDragged(){

	Matter.Body.setPosition(rock.body, {x: mouseX, y: mouseY})
	
	
	}
	
	
	function mouseReleased(){
	
	
	rockPoint.fly()
	
	
	}

