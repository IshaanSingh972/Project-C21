var bullet,wall,thickness;
var weight,speed;

function setup() {
  createCanvas(1600,400);
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);
  bullet=createSprite(50, 200, 50, 10);
  bullet.velocityX = speed;
  bullet.shapeColor="white";

  wall=createSprite(1200, 200,thickness, 200);
  wall.shapeColor="grey";
}

function draw() {
  background("black");
  
  if(wall.x-bullet.x<(bullet.width+wall.width)/2){
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/thickness*thickness*thickness;
   
    if(damage<10){
      bullet.shapeColor="green";
    }
    if(damage>10){
      bullet.shapeColor="red";
     }
    }
  drawSprites();
}