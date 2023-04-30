let game = {
    currentGame: [],
    playerMoves: [],
    score: 0,
    choices: ["button1", "button2", "button3", "button4"]
};

function newGame(){
    game.score = 0;
    game.currentGame = [];
    game.playerMoves = [];
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
}

function lightsOn(circel) {
    document.getElementById(circel).classList.add("light");
    setTimeout(() => {
        document.getElementById(circel).classList.remove("light");
    }, 400);
}


module.exports = { game, newGame, displayScore, addTurn, lightsOn };
