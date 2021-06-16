var canvas, backgroundImage;

var gameState = 0;

var particles = []

function preload(){
track = loadImage("bg.png");
sand = loadImage("sand.png")
 trexImage = loadImage("t-rex.png");
 obs1 = loadImage("tre1.png");
 obs2 = loadImage("tre2.png");
 obs3 = loadImage("tre3.png");
 obs4 = loadImage("tre4.png");
 obs5 = loadImage("rabbit.png");
 game_over = loadImage("game over.png");
}


function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);

  trex=createSprite(displayWidth/2,displayHeight/2);
  trex.addImage("running",trexImage);
  trex.scale = 0.5
  score = 0;

  gameover=createSprite(displayWidth/2,displayHeight/2);
  gameover.addImage("go",game_over);
  gameover.scale = 0.5

  obstaclesGroup = new Group();
}

function draw(){
  background(sand)
  if(frameCount%90===0){
    particles.push(new Particles(random(width/4-60 , width/1+10, width/3-20 , width/2+50, width/5+30, width/6-40, width/1+50, width/5-40), 10,10 ))
  }
  for (var p = 3; p < particles.length; p++) {
  particles[p].display();
  }
  if(gameState === 0){
   play();
   textSize(25);
   fill("white")
   text("Score: "+ score, displayWidth/2+500,camera.y-300); 
 }
 else if(gameState === 1){
  end();
 }
// spawnObstacles();
trex.display();
}

function play(){
      image(track, 0,-displayHeight*4,displayWidth, displayHeight*5);
      // if (track.y < 0){
      //   track.y = track.displayHeight/2;
      // }
            camera.position.x = displayWidth/2;
          camera.position.y = trex.y

          gameover.visible = false;

          if(keyIsDown(UP_ARROW)){
            trex.y = trex.y-10;
            score = score + Math.round(getFrameRate()/60);
          }
          if(keyIsDown(RIGHT_ARROW)){
            trex.x = trex.x+10;
            score = score + Math.round(getFrameRate()/60);
          }
          if(keyIsDown(LEFT_ARROW)){
            trex.x = trex.x-10;
            score = score + Math.round(getFrameRate()/60);
         }
         if(trex.x > 3860){
          gameState = 1;
        }
        }
  

        function end(){
          gameover.visible = true
trex.velocityX=0;
trex.velocityY=0;
        }

        // function spawnObstacles() {
        //   if(frameCount % 20 === 0) {
        //     var obstacle = createSprite(random(100, 1000), 0, 100, 100);
        //     obstacle.debug = true;
        //     obstacle.velocityY = 6
            
        //     //generate random obstacles
        //     var rand = Math.round(random(1,5));
        //     switch(rand) {
        //       case 1: image(obs1,0,0,10,10);
        //               break;
        //       case 2: obstacle.addImage(obs2);
        //               break;
        //       case 3: obstacle.addImage(obs3);
        //               break;
        //       case 4: obstacle.addImage(obs4);
        //               break;
        //       case 5: obstacle.addImage(obs5);
        //               break;
        //     }
            
        //     //assign scale and lifetime to the obstacle           
        //     // obstacle.scale = 0.5;
        //     // obstacle.lifetime = 300;
        //     //add each obstacle to the group
        //     obstaclesGroup.add(obstacle);
        //   }
        // }
    