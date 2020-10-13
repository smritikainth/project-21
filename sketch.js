var bullet,wall,thickness
var speed,weight


function setup() {
  createCanvas(1600,400);
  wall=createSprite(1200, 200, thickness,height/2);
  bullet= createSprite(50,200,50,20);

  thickness=random(22,83);
  speed=random(223,321);
  bullet.velocityX=speed

  weight=random(30,52);
1
}

function draw() {
  background(255,255,255);  
  drawSprites();

  wall.shapeColor=color(80,80,80);

if (wall.x=bullet < bullet.width+wall.width/2)
 {  
  bullet.velocityX=0;
  var deformation=0.5*weight*speed*speed/22509;
  if (deformation>180)
  {
    bullet.shapeColor=color("white")
  }
  if (deformation<180 && deformation>100)
{
  bullet.shapeColor=color("purple")
}
if (deformation<100)
{
  bullet.shapeColor=color("green")
}}
}