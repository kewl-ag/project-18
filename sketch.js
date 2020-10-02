var backimage,backg;
var monkey, monkeyr;
var ground,groundi;

var foodgroup, bananaimage;
var obstaclegroup, obstaclei;

var gameover;
var score = 0;


function preload(){
  backimage=loadImage("jungle2.jpg");
  monkeyr = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
  

  bananaimage = loadImage("Banana.png");
  obstaclei = loadImage("stone.png"); 
  
}

function setup() {
  createCanvas(600,400);
  
  backg=createSprite(0,0,600,400);
  backg.addImage(backimage);
  backg.scale=1.5;
  backg.x=backg.width/2;
  backg.velocityX = -4;
  
  monkey = createSprite(100,340,20,50);
  monkey.addAnimation("Running",monkeyr);
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,800,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  ground.visible=false;
  
  foodgroup = new Group();
  obstaclesGroup = new Group();
  
  score = 0;
}

function draw() {
  
  background(255);
  
    
  if(ground.x<0) {
    ground.x=ground.width/2;
  }
  if(backg.x<100){
    backg.x=backg.width/2;
  }
  
    if(foodgroup.isTouching(monkey)){
      foodgroup.destroyEach();
    score = score + 2;
    }
    switch(score){
        case 10: monkey.scale=0.13;
                break;
        case 20: monkey.scale=0.15;
                break;
        case 30: monkey.scale=0.17;
                break;
        case 40: monkey.scale=0.19;
                break;
        default: break;
    }
  
    if(keyDown("space") ) {
      monnkey.velocityY = -12;
    }
    monkey.velocityY = monkey.velocityY + 0.8;
  
   monkey.collide(ground);
    spawnfood();
    spawnobstacles();
 
    if(obstaclegroup.isTouching(monkey)){ 
       monkey.scale=0.2;
   
    }
  
  drawSprites();
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+ score, 500,50);
}

function spawnfood() {

  if (frameCount % 80 === 0) {
    var banana = createSprite(600,250,40,10);
    banana.y = random(120,200);    
    banana.addImage(bananaImage);
    banana.scale = 0.05;
    banana.velocityX = -5;
  
    banana.lifetime = 300;
    player.depth = banana.depth + 1;
    
    
    FoodGroup.add(banana);
  }
}

function spawnobstacles() {
  if(frameCount % 300 === 0) {
    var obstacle = createSprite(800,350,10,40);
    obstacle.velocityX = -6;
    obstacle.addImage(obstacle_img);
    
    obstacle.scale = 0.2;
    obstacle.lifetime = 300;
    
    obstaclesGroup.add(obstacle);
  }
}


  

