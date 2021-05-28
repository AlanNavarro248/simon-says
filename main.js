let machineSequence = [];
let playerSequence = [];
let round = 0;

document.querySelector("#button-start").onclick = startGame;

updateStatus('Press "Start" to play');
updateRound("-")
blockPlayerInput();

function startGame(){
    resetStatus();
    roundManagement();
}

function resetStatus(){
    machineSequence = [];
    playerSequence = [];
    round = 0;
}

function roundManagement(){
    updateStatus("AI Turn");
    blockPlayerInput();

    const $newSquare = ObtainRandomSquare();
    machineSequence.push($newSquare);

    const PLAYER_TURN_DELAY = (machineSequence.length + 1) * 1000;

    machineSequence.forEach(function($square, index) {
    const MS_DELAY = (index + 1) * 1000
        setTimeout(function() {
            highlight($square);
       }, MS_DELAY);
     });
    
    setTimeout(function() {
        updateStatus("Player Turn");
        unlockPlayerInput();
    }, PLAYER_TURN_DELAY);

    playerSequence = [];
    round++;
    updateRound(round);
}

function updateStatus(status){
   document.querySelector("#status").textContent = status;
}

function updateRound(round){
document.querySelector("#round").textContent = round;
}

function blockPlayerInput(){
    document.querySelectorAll(".square").forEach(function($square) {
     $square.onclick = function() {
     }
    });
}

function unlockPlayerInput(){
    document.querySelectorAll(".square").forEach(function($square) {
    $square.onclick = playerInputManagement();
    });
}

function ObtainRandomSquare(){

}

function highligh($square) {
    $square.style.opacity = 1;
    setTimeout(function name() {
        
    }) {
        
    }, 500);
    
}

function playerInputManagement(e){
    const $square = e.target;
    highligh($square);
    playerSequence.push($square);

    const $machineSquare = 


}
