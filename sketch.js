const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var hour;
var BGimg;
var flag = 1;

function preload(){
  polygon_img = loadImage( "polygon.png")
  day_img = loadImage("images/dayimg.png")
  night_img = loadImage("images/nightscary.png")
  tame();
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);
 
  //level one
  block1 = new Block(300,275,30,40);
  block2 = new Block(335,275,30,40);
  block3 = new Block(370,275,30,40);
  block4 = new Block(405,275,30,40);
  block5 = new Block(440,275,30,40);
  block6 = new Block(475,275,30,40);
 // block7 = new Block(505,275,30,40);
  block8 = new Block(315,235,30,40);
  block9 = new Block(350,235,30,40);
  block10 = new Block(385,235,30,40);
  block11= new Block(420,235,30,40);
  block12 = new Block(455,235,30,40);
  //block13 = new Block(490,235,30,40);
  block14 = new Block(330,195,30,40);
  block15 = new Block(365,195,30,40);
  block16 = new Block(400,195,30,40);
  block17 = new Block(435,195,30,40);
 // block18 = new Block(470,195,30,40);
  block19 = new Block(345,155,30,40);
  block20 = new Block(380,155,30,40);
  block21 = new Block(415,155,30,40);
  //block22 = new Block(445,155,30,40);
  BLOCK1 = new Block (615,175,30,40);
  BLOCK2 = new Block (650,175,30,40);
  BLOCK3 = new Block (685,175,30,40);
  BLOCK4 = new Block (720,175,30,40);
  BLOCK5 = new Block (755,175,30,40);
  //BLOCK6 = new Block (790,175,30,40);
  BLOCK7 = new Block (630,135,30,40);
  BLOCK8 = new Block (665,135,30,40);
  BLOCK9 = new Block (700,135,30,40);
  BLOCK10 = new Block (735,135,30,40);
  //BLOCKxtra = new Block(750,135,30,40);
  BLOCK11 = new Block (645,95,30,40);
  BLOCK12 = new Block (680,95,30,40);
  BLOCK13 = new Block (715,95,30,40);
 // BLOCK14 = new Block (750,95,30,40);
  BLOCK15 = new Block (695,55,30,40);
 // BLOCK16 = new Block (725,55,30,40);
  BLOCK17 = new Block (660,55,30,40);
  //ball holder with slings
  ball = Bodies.circle(50,200,20);
  World.add(world,ball);
  //background(hour); 

  slingShot = new Slingshot(this.ball,{x:100,y:200});

}
function draw() {
  if(flag === 1){
    background(day_img)
  }
  else
  background(night_img);
 
  //Engine.update(engine);
  ground.display();
  stand1.display();
  stand2.display();
  strokeWeight(2);
  stroke(15);
  //fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  //block7.display();
  //fill("black");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  //block13.display();
 // fill("green");
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  //block18.display();
  //fill("red");
  block19.display();
  block20.display();
  block21.display();
  //block22.display();
  //fill("skyblue")
  BLOCK1.display();
  BLOCK2.display();
  BLOCK3.display();
  BLOCK4.display();
  BLOCK5.display();
  //BLOCK6.display();
  fill("black");
  BLOCK7.display();
 // BLOCKxtra.display();
  BLOCK8.display();
  BLOCK9.display();
  BLOCK10.display();
  fill("green");
  BLOCK11.display();
  BLOCK12.display();
  BLOCK13.display();
 // BLOCK14.display();
  fill("red");
  BLOCK15.display();
  //BLOCK16.display();
  BLOCK17.display();

  //ball.display();
  imageMode(CENTER)
  image(polygon_img ,ball.position.x,ball.position.y,40,40);

  slingShot.display();
}
function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingShot.fly();
}

function keyPressed(){
  if(keyCode === 32){
   ball.x = 100;
    ball.y = 200;
    slingShot.attach(ball);
  }
}
async function tame(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/kolkata")
  var Rest = await response.json();
 // console.log(Rest);
  var idk  = Rest.datetime;
   hour = idk.slice(11,13);
  console.log(hour);
  if(hour>6 && hour<19){
   
    flag = 1
  }
  else{

  
 flag = 2
  }
}


