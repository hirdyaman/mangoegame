var hypnoticBall, database;
var position;
var gamestate =0,playercount=0,game,form,player;s

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);
  game=new Game()
  game.getstate()
  game.start()
}

function draw(){
if(playercount===4){
gamestate=1

}
if (gamestate===1){
game.play()

}
}

