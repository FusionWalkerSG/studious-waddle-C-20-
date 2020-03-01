var frec,mrec;

function setup() {
  createCanvas(1200,800);
  frec = createSprite(600,400,10,80);
  frec.shapeColor="red";
  mrec = createSprite(200,200,30,10);
  mrec.shapeColor="red";
}

function draw() {
  background(255,255,255);
  console.log(mrec.x-frec.x);
  if (mrec.x-frec.x<frec.width/2+mrec.width/2 
    && frec.x-mrec.x<frec.width/2+mrec.width/2
    && mrec.y-frec.y<frec.height/2+mrec.height/2 
    && frec.y-mrec.y<frec.height/2+mrec.height/2){
    frec.shapeColor="blue";
    mrec.shapeColor="blue";
  }
  else {
    frec.shapeColor="red";
    mrec.shapeColor="red";
  }
  mrec.x=World.mouseX;  
  mrec.y=World.mouseY;  
  drawSprites();
}