class Game {
    constructor(){
  
    }
  
    getState(){

      var gameStateRef  = database.ref('gameState');
      
      gameStateRef.on("value",function(data){

         gameState = data.val();

      })
  
    }
  
    update(state){
        
      database.ref('/').update({

      gameState: state

      });

    }
  
    async start(){
      if(gameState === 0){

        player = new Player();

        var playerCountRef = await database.ref('playerCount').once("value");

        if(playerCountRef.exists()){

          playerCount = playerCountRef.val();

          player.getCount();
          
        }

        form = new Form()
        form.display();

      }
  
      athlete1 = createSprite(123,58,40,30);
      athlete1.addImage("player1",athlete1Img);
  
      athlete2 = createSprite(129,167,40,30);
      athlete2.addImage("player2",athlete2Img);
      
      athlete3 = createSprite(80,276,40,30);
      athlete3.addImage("player3",athlete3Img);
      
      athlete4 = createSprite(73,393,40,30);
      athlete4.addImage("player4",athlete4Img);
  
      athlete5 = createSprite(86,504,40,30);
      athlete5.addImage("player5",athlete5Img);
  
      }
  
    play(){

      form.hide();

      this.reset = createButton("Reset");
      this.reset.position(displayWidth-100,20);
  
      this.reset.mousePressed(()=>{

        player.updateCount(0);

        game.update(0);

      });
  
      Player.getPlayerInfo();
      
      if(allAthletes !== undefined){

        background(ground);
                
        var index = 0;
  
        var x = 175 ;
        var y;
  
        var speed=random (0.3,0.9);
        athlete5.x= athlete5.x+speed;

        var speed=random (0.2,0.8);
        athlete2.x = athlete2.x+speed;

        var speed=random (0.4,0.7);
        athlete3.x=athlete3.x+speed;

        var speed=random (0.3,0.7);
        athlete4.x=athlete4.x+speed;
  
    if(keyIsDown(32) ){

        var speed=random(0.5,1.1);

        athlete1.x = athlete1.x+speed;   
      
      }
      
      if (keyIsDown(RIGHT_ARROW)){

        athlete1.x = athlete1.x+2;
      
      }
  
        for(var athl in allAthletes){
          
          index = index + 1 ;
  
          
          x = x + 200;
  
          y = displayHeight - allAthletes[athl].distance;
  
  
        }
  
      }
     
      console.log(mouseX,mouseY);
  
      drawSprites();

    }
  
    end(){

      console.log("Game Ended");
      game.update(2);
    
    }
  
  playerRank(){

    if(gameState===2){

      if(dist1>dist2||dist1>dist3|dist1>dist4|dist1>dist5){

        var rank=1;

      } else if (dist2>dist3||dist2>dist4||disdt2>dist5) {

          rank=2;

      } else if(dist3>dist4|dist3>dist5){

          rank=3;

      } else if(dist4>dist5){

          rank=4;

      }else{

          rank=5;

      }

    console.log(rank);

    var result=createElement('h1');
    result.position(300,75);
    
    
    switch (rank) {
                
        case 1:
          result.html(playerName1+ "    is the WINNER");
        break;

        case 2:
          result.html(playerName2+ "    is the WINNER");
        break;

        case 3:
          result.html(playerName3+ "    is the WINNER");
        break;

        case 4:
          result.html(playerName4+ "    is the WINNER");
        break;

        case 5:
          result.html(playerName5+ "    is the WINNER");
        break;

      }
    
    }
  
  } 

}
