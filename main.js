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

    const $newSquare = obtainRandomSquare();
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

function obtainRandomSquare(){
    $squares = document.querySelectorAll(".square");
    index = Math.floor(Math.random() * $squares.length )
    return $squares[index];
}

function updateStatus(status, error = false){
   document.querySelector("#status").textContent = status;
    if(error){
        document.querySelector("#status").classList.remove("alert-primary");
        document.querySelector("#status").classList.add("alert-danger");
    } else {
        document.querySelector("#status").classList.remove("alert-danger");
        document.querySelector("#status").classList.add("alert-primary");
    }
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
        $square.onclick = playerInputManagement;
    });
}

function highlight($square) {
    $square.style.opacity = 1;
    setTimeout(function() {
        $square.style.opacity = 0.5; 
    }, 500); 
};

function playerInputManagement(e){
    const $square = e.target;
    highlight($square);
    playerSequence.push($square);

    const $machineSquare = machineSequence[playerSequence.length - 1]

    if($square.id !== $machineSquare.id){
        lost();
        return;
    }

    if(playerSequence.length === machineSequence.length){
        blockPlayerInput();
        setTimeout(roundManagement, 1000)
    }
}

function lost() {
    blockPlayerInput();
    updateStatus('You lose. Press "Start" to play again', true)
    resetStatus();
}
