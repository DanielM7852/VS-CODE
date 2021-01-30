var fixedRect, movingRect;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 50);
  movingRect = createSprite(200,200,30,50);
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "blue";
}

function draw() {
  background(255,255,255);  
 
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2 && 
    fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2 || movingRect.y - fixedRect.y < movingRect.widht/2 + fixedRect.width/2){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "orange";
  }else{
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "blue";
  }

  
  drawSprites();
}