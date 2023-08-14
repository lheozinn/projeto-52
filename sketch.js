var p1, p1Img, p2, p2Img, quadra2, quadra2Img, pomo, pomoImg;
var pontosp1, pontosp2;
function preload(){
  
  p1Img = loadImage("p1.png");
  p2Img = loadImage("p2.png");
  quadraImg = loadImage("quadra2.jpg");
  pomoImg = loadImage("pomo.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  p1 = createSprite(100, 100);
  p1.addImage(p1Img);
  p1.scale = 0.3
  

  p2 = createSprite(width - 100, 100);
  p2.addImage(p2Img);
  p2.scale = 0.4;


  pomo = createSprite(width /2, height -100);
  pomo.addImage(pomoImg);
  pomo.scale = 0.175;

  //createEdgeSprites();
  

}

function draw() {
  background(quadraImg);

  // pomo.bounce(topEdge);

  pomo.velocityX = - 19
  pomo.velocityY = - 19
    


if(keyDown("w")){
  p1.y = p1.y -  10;
}
if(keyDown("s")){
  p1.y = p1.y +  10;
}
if(keyDown("a")){
  p1.x = p1.x - 10;
}
if(keyDown("d")){
  p1.x = p1.x + 10;
}


if(keyDown("up")){
  p2.y = p2.y -  10;
}
if(keyDown("down")){
  p2.y = p2.y +  10;
}
if(keyDown("left")){
  p2.x = p2.x - 10;
}
if(keyDown("right")){
  p2.x = p2.x + 10;
}

if(p1.isTouching(pomo) ){
pontosp1+=150;
}
if(p2.isTouching(pomo) ){
  pontosp2+=150;
  }
if(pontosp1 >= 750 || pontosp2 >= 750 ){
  if(pontosp1 >= 750){
    text("GRIFINÓRIA, VENCE SONSERINA")
  }
  if(pontosp2 >= 750){
    text("SONSERINA, VENCE GRIFINÓRIA")
  }
}
  
  drawSprites();
}
