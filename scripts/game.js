let game = {
    currentGame: [],
    playerMoves: [],
    turnNumber: 0,
    score: 0,
    choices: ["button1", "button2", "button3", "button4"]
};

function newGame(){
    game.score = 0;
    game.currentGame = [];
    game.playerMoves = [];
    for (let circle of document.getElementsByClassName("circle")) {
        if (circle.getAttribute("data-listener") !== "true") {
            circle.addEventListener("click", (e) => {
                let move = e.target.getAttribute("id");
                lightsOn(move);
                game.playerMoves.push(move);
                playerTurn();
            });
            circle.setAttribute("data-listener", "true");
        }
    }
    displayScore();
    addTurn();
}

function displayScore() {
    document.getElementById("score").innerText = game.score;
}

function addTurn() {
    game.playerMoves = [];
    randomButton = game.choices[(Math.floor(Math.random() * 4))];
    game.currentGame.push(randomButton);
    showTurns();
}

function lightsOn(circel) {
    document.getElementById(circel).classList.add("light");
    setTimeout(() => {
        document.getElementById(circel).classList.remove("light");
    }, 400);
}

function showTurns() {
    game.turnNumber = 0;
    let turns = setInterval(() => {
        lightsOn(game.currentGame[game.turnNumber]);
        game.turnNumber++;
        if (game.turnNumber >= game.currentGame.length) {
            clearInterval(turns);
        }
    }, 800);
}

module.exports = { game, newGame, displayScore, addTurn, lightsOn, showTurns };