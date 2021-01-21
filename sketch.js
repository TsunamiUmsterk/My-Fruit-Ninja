//Game States
var PLAY = 1;
var END = 0;
var gameState = 1;


var sword, swordImage;

var fruitGroup, enemyGroup;

var score;

var gameOverImage;

var fruit, fruit1, fruit2, fruit3, fruit4;
var monster, monsterImage;

function preload(){
  swordImage = loadImage("sword.png");
  gameOverImage = loadImage("gameover.png");
  monsterImage = loadAnimation("alien1.png","alien2.png");
  fruit1 = loadImage("fruit1.png");
  fruit2 = loadImage("fruit2.png");
  fruit3 = loadImage("fruit3.png");
  fruit4 = loadImage("fruit4.png");
  
  knifeSwooshSound = loadSound("knifeSwooshSound.mp3");
  gameOverSound = loadSound("gameover.mp3");
}

function setup(){
  createCanvas(600,600);
  
  //creating sword
    sword = createSprite(40,200,20,20);
  sword.addImage(swordImage);
  sword.scale = 0.7;
  
  //Score variables and Groups
  score = 0;
  fruitGroup = createGroup();
  enemyGroup = createGroup();

}

function draw(){
  background("aqua")

 // gameState = 1;
  
  text("Score:"+ score,300,40)
  //Call fruits and Enemy function
  
  
 
  
  //Increase score if sword touching fruit
  if(fruitGroup.isTouching(sword)){
    fruitGroup.destroyEach();
    score = score + 1
    
  }
  
  if(enemyGroup.isTouching(sword)){
    gameState = 0;
    
    gameOverSound.play();
    }
  
  if(gameState === 1) {
    fruits();
    Enemy();
    
     // Move sword with mouse
  sword.y = World.mouseY;
  sword.x = World.mouseX;
  } else {
    sword.addImage(gameOverImage);
    sword.x = 300;
    sword.y = 300;
     
      enemyGroup.setVelocityXEach(0);
      fruitGroup.setVelocityXEach(0);
      enemyGroup.destroyEach();
      fruitGroup.destroyEach();
  }
  
  
  drawSprites();
}

function fruits(){
  if(World.frameCount%80 === 0){
    fruit=createSprite (600,200,20,20);
    fruit.scale = 0.2;
      //fruit.debug=true;
    r=Math.round(random(1,4));
    if (r == 1) {
      fruit.addImage(fruit1);
    } else if (r == 2) {
      fruit.addImage(fruit2);
    } else if (r == 3) {
      fruit.addImage(fruit3);
    } else {
      fruit.addImage(fruit4);
    }
    
     if(World.frameCount%80 === 0){
    fruit=createSprite (600,200,20,20);
    fruit.scale = 0.2;
      //fruit.debug=true;
    r=Math.round(random(1,4));
    if (r == 1) {
      fruit.addImage(fruit1);
    } else if (r == 2) {
      fruit.addImage(fruit2);
    } else if (r == 3) {
      fruit.addImage(fruit3);
    } else {
      fruit.addImage(fruit4);
    }
     }
    
    
    var position = Math.round(random(1,2));
    fruit= createSprite(400,200,20,20);
    
    if(position==1)
    {
      fruit.x=600;
      fruit.velocityX= -(7+(score/4));
    } else (position==2) 
    {
      fruit.x=0;
      fruit.velocityX= (7+(score/4));
    
    fruit.y = Math.round(random(50,550));
    }
    
    
    fruit.setLifetime = 100;
    
    fruitGroup.add(fruit);
  }
}

function Enemy(){
  if(World.frameCount%200 === 0){
    monster = createSprite(600,200,20,20);
    monster.addAnimation("moving", monsterImage);
    monster.y = Math.round(random(100,550));
    monster.velocityX = -8;
    monster.setLifetime= 50;
    
    enemyGroup.add(monster);
  }
}