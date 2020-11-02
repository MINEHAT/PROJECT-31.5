const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let ground;

let particles_arr = [];
let plinkos_arr = [];
let divisions_arr = [];

var divisionHeight;

function setup() {

  createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;

  divisionHeight = 300;
  ground = new Ground(173,798,630,20);
// 173,798

  //createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  

  var x = mouseX;
  var y = mouseY;



  fill("red")
  text(x + "," + y,x,y);

  

  ground.display();

  for(var k = 0; k<=width; k = k + 80) {
    divisions_arr.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight));
  }

  console.log(divisions_arr)

  drawSprites();
}