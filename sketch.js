var wall, bullet;
var speed, weight, thickness;

function setup() {
  createCanvas(1600,400);

  thickness = Math.round(random(22,83));
  speed = Math.round(random(223,321));
  weight = Math.round(random(30,52));

  bullet = createSprite(400,200,20,50);
  bullet.shapeColor = color(80,80,80);
  bullet.velocityX = speed;

  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = color(80,80,80);
}

function draw() {
  background(255,255,255);  

  if(bullet.x + bullet.width >= wall.x){
    var deform = 0.5 * weight * speed * speed / (thickness * thickness * thickness);

    bullet.velocityX = 0;

    if(deform < 10){
     bullet.shapeColor = color(0,255,0);
     textSize(50);
     fill("green");
     text("The Effectiveness of this Wall is Good",200,200);
   }
    if(deform > 180){
      bullet.shapeColor = color(255,0,0);
      textSize(50);
      fill("red");
      text("The Effectiveness of this Wall is Bad",200,200);
   }
  }
  drawSprites();
}