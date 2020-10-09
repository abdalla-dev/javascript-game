/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var Val;  
var player=0;
var playerScore=[0,0];
var current=[0,0];
var GameStatus;


var OnInit=function(){  
  NewGame();
  ButtonsFunctionality();
}

var swicher=function(){

    current[player]=0;
     UpdateInterface();
     document.querySelector('.player-0-panel').classList.toggle('active')
     document.querySelector('.player-1-panel').classList.toggle('active')
        if(player===0)
        player=1;
        else
        player=0;
        

}

var DiceValue=function(){

   Val=(Math.round(Math.random()*5)+1);               // calculating dice value
   
    current[player]=current[player]+Val;
   
     UpdateInterface();

}

var HoldRules=function(){
    if(GameStatus===1)
    {
playerScore[player]=playerScore[player]+current[player];
UpdateInterface();
if(playerScore[player]>=100)
{
  
    document.querySelector('.dice').style.display='none';
    document.querySelector(`#name-${player}`).innerHTML='WINNER !';
    document.querySelector('.player-0-panel').classList.remove('active')
    document.querySelector('.player-1-panel').classList.remove('active')
    GameStatus=0;

}
swicher();

   }
                        }

var NewGame=function(){
    GameStatus=1;
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector(`#name-0`).innerHTML='Player 1';
    document.querySelector(`#name-1`).innerHTML='Player 2';
 document.querySelector('.dice').style.display='none';
 document.querySelector('#score-0').textContent=0;
 document.querySelector('#score-1').textContent=0;
 document.querySelector('#current-0').textContent=0;
 document.querySelector('#current-1').textContent=0;
Val=0;  
player=0;
playerScore=[0,0];
current=[0,0];


}

var RollingRules=function(){
    if(GameStatus===1)
    {
    DiceValue() ;                                                 //calling dice value to get the value 

 document.querySelector('.dice').src='dice-' + Val + '.png';
 document.querySelector('.dice').style.display='block';           // getting the dice image back
 if(Val===1)
 {
 swicher();
 }
}
}

var UpdateInterface=function(){

document.querySelector(`#current-${player}`).textContent=current[player];   // update current score 
document.querySelector(`#score-${player}`).textContent=playerScore[player];   // update player score 


}

 var ButtonsFunctionality = function()
{
    
    document.querySelector('.btn-roll').addEventListener('click',RollingRules);
    document.querySelector('.btn-hold').addEventListener('click',HoldRules);
    document.querySelector('.btn-new').addEventListener('click',NewGame);
    
 }
 


OnInit();
