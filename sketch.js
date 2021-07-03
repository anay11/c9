var box;
function setup() {
  createCanvas(400,400);
  var box = createSprite(200,200,30,30);
}

function draw() 
{
  background(30);
  if(keyDown(UP_ARROW)){
    box.position.y = box.position.y - 1;
  }
  if(keyDown(DOWN_ARROW)){
    box.position.y = box.position.y + 1;
  }
 
  drawSprites();
}




