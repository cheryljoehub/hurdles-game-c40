var canvas;

var gameState = 0;

var playerCount;

var allAthletes;

var distance = 0;

var database;

var form, player, game;

var athlete1,athlete2,athlete3,athlete4,athlete5,athletes;

var athlete1Img,athlete2Img,athlete3Img,athlete4Img,athlete5Img;

var ground;

function preload (){

  athlete1Img=loadImage("./Images/athlete1.png");
  athlete2Img=loadImage("./Images/athlete2.png");
  athlete3Img=loadImage("./Images/athlete3.png");
  athlete4Img=loadImage("./Images/athlete4.png");   
  athlete5Img=loadImage("./Images/athlete5.png");

  ground=loadImage("./Images/track.jpg");                                                                        
  ground.scale = 0.1;

}

function setup(){

  canvas = createCanvas(displayWidth - 20,displayHeight - 140);

  database = firebase.database();

  game = new Game();
  game.getState();
  game.start();

  obstacle=new Hurdles();
  obstacle.erect();

}

 

function draw(){

  if(playerCount === 5){

    game.update(1);
  
  }

  if(gameState === 1){

    clear();

    game.play();
 
  }

}