//Dice game Starting

var scores, roundScores, activePlayers,  dice , gamePlaying, lastDice

init();

document.querySelector('.btn-roll').addEventListener('click' , function(){
    if(gamePlaying){
        var dice = Math.floor(Math.random() * 6) + 1;

        //display the result 
    
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png'

        if(dice === 6 && lastDice === 6){
            scores[activePlayers] = 0;
            document.querySelector('#score-' + activePlayers ).textContent =  '0';
            nextPlayer();
        } else if(dice !== 1){
            //score add
            roundScores += dice;
            document.querySelector('#current-' + activePlayers).textContent = roundScores;
        } else {
            //next player turn
            nextPlayer()
        }

        lastDice = dice;
    }

})

document.querySelector('.btn-hold').addEventListener('click', function(){
    if(gamePlaying){
        scores[activePlayers] += roundScores;

        document.querySelector('#score-' + activePlayers ).textContent =  scores[activePlayers]
    
        //if scores 100 any player he will be the winner
    
        if(scores[activePlayers] >= 100){
            document.querySelector('#name-' + activePlayers ).textContent = "Winner!!!!!" ;
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayers + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayers + '-panel').classList.remove('active');
            gamePlaying = false;
    
        } else {
            nextPlayer();
        }
    }

})

document.querySelector('.btn-new').addEventListener('click', init)

function nextPlayer(){

            //next player turn
            activePlayers === 0 ? activePlayers = 1 : activePlayers = 0 ;
            roundScores = 0;
    
            document.querySelector('#current-0').textContent = '0'
            document.querySelector('#current-1').textContent = '0'
    
            document.querySelector('.player-0-panel').classList.toggle('active');
            document.querySelector('.player-1-panel').classList.toggle('active');
    
            document.querySelector('.dice').style.display = 'none';
}

//Initialization all
function init(){
    scores = [0,0];
    roundScores = 0;
    activePlayers = 0;
    gamePlaying = true;


    document.querySelector('.dice').style.display = 'none';

    document.querySelector('#score-0').textContent = '0';
    document.querySelector('#current-0').textContent = '0';
    document.querySelector('#score-1').textContent = '0';
    document.querySelector('#current-1').textContent = '0';
    document.querySelector('#name-0').textContent = "Player 1" ;
    document.querySelector('#name-1').textContent = "Player 2" ;
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');


}