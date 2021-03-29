const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var ground;

var border1, border2, border3, border4;

var divisions = [];
var divisionsHeight = 300;

var particles = []
var plinkos = []


function setup() {
 createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;




  ground = new Ground(240,787,465,7);
  

  border1 = createSprite(3  ,400, 7,800)
  border1.shapeColor = "red"


  border2 = createSprite(240,795, 480,7)
  border2.shapeColor = "red"


  border3 = createSprite(477,400, 7,800)
  border3.shapeColor = "red"


  border4 = createSprite(240,3, 480,7)
  border4.shapeColor = "red"

  

}

function draw() {

  background(0); 
  
  ground.display();
  
 


  for(var j = 40; j<=width; j=j+50){

    plinkos.push

  }


  drawSprites();
}