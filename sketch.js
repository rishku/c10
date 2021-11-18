
var trex ,trex_running, edges;
var ground, groundImg;
function preload(){
  
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImg = loadImage("ground2.png")

}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
 trex = createSprite(50,100,20,50);
 trex.addAnimation("running", trex_running);
 trex.scale = 0.5;

 ground = createSprite(200,180,400,10);
 ground.addImage("ground",groundImg)
 ground.x= ground.width/2;
 
  edges = createEdgeSprites();
}

function draw(){
  background("grey");
  ground.velocityX = -2
if(ground.x<0){
  ground.x = ground.width/2;
}

  if(keyDown("space")){
    trex.velocityY = -10
  }

  trex.velocityY = trex.velocityY + 0.5;
  trex.collide(ground)

  drawSprites()

}
