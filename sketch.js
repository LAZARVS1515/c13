var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var obsatcleImg,obs1img,obs2img,obs3img,obs4img,obs5img,obs6img
var cloud,cloudImg
function preload() {
    trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
    trex_collided = loadImage("trex_collided.png");
    groundImage = loadImage("ground2.png")
    cloudImg = loadImage("cloud.png")
    obs1img = loadImage("obstacle1.png")
    obs2img = loadImage("obstacle2.png")
    obs3img = loadImage("obstacle3.png")
    obs4img = loadImage("obstacle4.png")
    obs5img = loadImage("obstacle5.png")
    obs6img = loadImage("obstacle6.png")
  }

function setup() {
createCanvas(600, 200);

//create a trex sprite
trex = createSprite(50,160,20,50);
trex.addAnimation("running", trex_running);
trex.scale = 0.5;
  
//create a ground sprite
ground = createSprite(200,180,400,20);
ground.addImage("ground",groundImage);
ground.x = ground.width /2;
ground.velocityX = -4;
  
//invis
invisibleGround = createSprite(200,189,400,10);
invisibleGround.visible = false;

}

function draw() {
background("white");

obiswpn();
cloudswpn();
//jump when the space button is pressed
if (keyDown("space")&&trex.y>=150) {
  trex.velocityY = -10;
}

trex.velocityY = trex.velocityY + 0.8

if (ground.x < 0) {
  ground.x = ground.width / 2;
}

trex.collide(invisibleGround);
drawSprites();

}
function cloudswpn(){
 if(frameCount%120==0){
  cloud = createSprite(600,50,20,20)
  cloud.addImage("wasd",cloudImg);
  cloud.y = Math.round(random(10,80))
  cloud.scale = 0.2;
  cloud.velocityX = -4;
  cloud.depth = trex.depth;
  trex.depth = trex.depth+1;
  cloud.lifetime = 150
}
}
function obiswpn(){
  if(frameCount%(60)==0){
   obstacle = createSprite(600,180,20,20);
obstacle.velocityX = -4 
obstacle.scale = 0.1
obstacle.lifetime = 150
var gugugaga = Math.round(random(1,6))
switch(gugugaga){
  case 1 : obstacle.addImage(obs1img);
  break;

  case 2 : obstacle.addImage(obs2img);
  break;

  case 3 : obstacle.addImage(obs3img);
  break;

  case 4 : obstacle.addImage(obs4img);
  break;

  case 5 : obstacle.addImage(obs5img);
  break;
  
  case 6 : obstacle.addImage(obs6img);
  break;
  default:break;  

}
}
}