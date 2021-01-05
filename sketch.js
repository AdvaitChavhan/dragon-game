var man,manImage
var ground, groundImage;
var scene;
var dragon;

var score;


function preload(){
  manImage=loadImage("swordman.png");
  sceneImage=loadImage("download.jpg");
  dragon1=loadImage("dragon.png");
}

function setup() {
  createCanvas(1200,600);
  
  man = createSprite(50,550,20,50);
 man.addImage("sword",manImage);
  man.scale=0.5;
  ground = createSprite(600,550,1200,20);
//  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  
  scene=createSprite(0,0,600,600);
 scene.addImage(sceneImage);
  scene.scale=8;

  ground.visible=false;
  
  
  score = 0;
}

function draw() {
  background(0);
 scene.depth=0; 
 scene.velocityX=-4;
  if (scene.x<0){
    scene.x=scene.width/2;
  }
  spawndragons();
  man.collide(ground);
  drawSprites();
}
function spawndragons(){
  if (frameCount % 120 === 0){
    var dragon = createSprite(1200,450,10,40);
    dragon.velocityX = -6;
    
     //generate random dragons
     var rand = Math.round(random(1,3));
     switch(rand) {
       case 1: dragon.addImage(dragon1);
               break;
       case 2: dragon.addImage(dragon1);
               break;
       case 3: dragon.addImage(dragon1);
               break;
      
       default: break;
     }
    
     //assign scale and lifetime to the dragon           
     dragon.scale = 0.8;
     dragon.lifetime = 300;
    
    //add each dragon to the group
   //  dragonsGroup.add(dragon);
  }
 }
 
