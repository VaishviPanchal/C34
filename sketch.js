const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var ground;
var engine;
var myWorld;
var box1,box2,box3,box4,box5;
var stone;
var rope;

function setup() {
  createCanvas(1000,800);
  createSprite(400, 200, 50, 50);
  engine = Engine.create();
  myWorld= engine.world

  var option = {
    isStatic:true,
  }
  ground=Bodies.rectangle(500,750,1000,5,option)
  World.add(myWorld,ground)

  var options={
    density:1,
  }
  stone=Bodies.circle(500,500,20,options)
  World.add(myWorld,stone)

  var ropeOption = {
    pointA:{x:500,y:200},
    bodyB:stone,
    stiffness:0.7,
    length:400
  }
  rope = Matter.Constraint.create(ropeOption)
  World.add(myWorld,rope)
  //console.log(rope)

  box1 = new Box(700,700)
  box2 = new Box(700,600)
  box3 = new Box(700,500)
  box4 = new Box(700,400)
  box5 = new Box(700,300)
}
function draw() {
  Engine.update(engine)
  background(255,255,255);  
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,1000,5)
  ellipseMode(RADIUS)
  ellipse(stone.position.x,stone.position.y,20,20)
  line(rope.pointA.x,rope.pointA.y,rope.bodyB.position.x,rope.bodyB.position.y)
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
}
function mouseDragged(){
  Matter.Body.setPosition(stone,{x:mouseX,y:mouseY})
}
