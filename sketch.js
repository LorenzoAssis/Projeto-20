
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var block1, block2, block3;
var plane;

function preload(){
}

function setup() {
	createCanvas(800,700);
	engine = Engine.create();
	world = engine.world;


	Engine.run(engine);

  var plane_options = {
    isStatic:true
  }

 var block1_options = {
   restitution:0.5,
   friction: 0.02,
   frictionAir: 0.4
  }

  var block2_options = {
    restitution:0.9,
    friction: 0.01,
    frictionAir: 0
  }

  var block3_options = {
    restitution:0.01,
    friction: 2,
    frictionAir: 0.3
  }


  block1 = Bodies.circle(150,10,35,block1_options);
  World.add(world,block1);

  block2 = Bodies.rectangle(400,50,80,80,block2_options);
  World.add(world,block2);

  block3 = Bodies.rectangle(650,50,100,40,block3_options);
  World.add(world,block3);

  plane = Bodies.rectangle(400,694,900,10,plane_options);
  World.add(world,plane);


  
}


function draw() {

  rectMode(CENTER);
  background("cyan");
  Engine.update(engine);

  fill("orange");
  ellipse(block1.position.x,block1.position.y,70,70);
  rect(block2.position.x,block2.position.y,80,80);
  rect(block3.position.x,block3.position.y,100,40);

  fill("green")
  rect(plane.position.x, plane.position.y,900,10)

  drawSprites()
}



