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
}

function displayScore() {
    document.getElementById("score").innerText = game.score;
}


module.exports = { game, newGame, displayScore };
