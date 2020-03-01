var frec,mrec;

function setup() {
  createCanvas(1200,800);
  frec = createSprite(400,100,10,80);
  frec.shapeColor="red";
  frec.velocityY=5;
  mrec = createSprite(400,800,30,10);
  mrec.shapeColor="red";
  mrec.velocityY=-5;
}
function draw(){
    background(20,10,50);
    if (mrec.x-frec.x<frec.width/2+mrec.width/2 
        && frec.x-mrec.x<frec.width/2+mrec.width/2){
            mrec.velocityX=mrec.velocityX*(-1);
            frec.velocityX=frec.velocityX*(-1);  
        }
if (mrec.y-frec.y<frec.height/2+mrec.height/2 
    && frec.y-mrec.y<frec.height/2+mrec.height/2){
        mrec.velocityY=mrec.velocityY*(-1);
        frec.velocityY=frec.velocityY*(-1);  
    }
    drawSprites();
}