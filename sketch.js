var sea, ship
function preload(){
  seaImg = loadImage("sea.png");
  shipImg = loadAnimation('ship-1.png', 'ship-2.png')
}

function setup(){
  createCanvas(400,400);
 sea = createSprite(200, 200, 400, 400);
 sea.scale=0.3
  sea.addImage(seaImg);
  sea.velocityX = -4
 ship = createSprite(200, 200, 30, 30)
 ship.scale=0.3
ship.addAnimation('S',shipImg)

}

function draw() {
  background("blue");
 drawSprites();
 if(sea.x < 0){  
  sea.x = sea.width/2;
}
}