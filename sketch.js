//for storing into the matter 
  const Engine = Matter.Engine;
  const World = Matter.World;
  const Bodies = Matter.Bodies;
//const Body = Matter.Body;

//for storing the ball, dustbin, ground
  var engine, world;
  var dustbin, ball, ground,place;

//function preload()
//{
//}

function setup() {
//the canvas size
	createCanvas(800, 700);

//for storing the engine and the world
	engine = Engine.create();
	world = engine.world;

//for creating the ground
  var ground_options ={
    isStatic: true
  }

  ground = Bodies.rectangle(400,600,450,1, ground_options); 
  World.add(world, ground);

  placeSprite = createSprite(200,600,700,1);

  


  //for creating the ball
  var ball_options ={
    restitution: 1.0
  }
  
  ball = Bodies.circle(250,200,30, ball_options);
  World.add(world,ball);



//for creating the dustbin
  dustbinSprite = createSprite(600,620,250,20);
  dustbinSprite.shapeColor = ("red");

dustbinSprite = createSprite(720,535,20,190);
dustbinSprite.shapeColor = ("red");

  dustbinSprite = createSprite(465,535,20,190);
  dustbinSprite.shapeColor = ("red");
  

//for the ground
//console.log(ground);
  
}


function draw() {
  background(0);
  Engine.update(engine);
  rectMode(CENTER);

  rect(ground.position.x, ground.position.y, 400,20);


  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y,20,20);
  


 
}



