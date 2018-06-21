$(document).ready(function() {

    
    var randomNumber = Math.floor(Math.random() * 100+20);
    var crystalGreen = Math.floor(Math.random() * 11+1);
    var crystalBlack = Math.floor(Math.random() * 11+1);
    var crystalRed = Math.floor(Math.random() * 11+1);
    var crystalClear = Math.floor(Math.random() * 11+1);
    var wins = 0;
    var losses = 0;
    var currentScore = 0;

    

    $("#random-number").text(randomNumber);
    $("#current-score").text(currentScore);
    

    $("#crystal-green").on("click", function() {
        $("#current-score").text(currentScore += crystalGreen)
        console.log(crystalGreen);
        endGame();
        
    });
    $("#crystal-black").on("click", function() {
        $("#current-score").text(currentScore += crystalBlack)
        console.log(crystalBlack);
        endGame();
    });
    $("#crystal-red").on("click", function() {
        $("#current-score").text(currentScore += crystalRed)
        console.log(crystalRed);
        endGame();
    });
    $("#crystal-clear").on("click", function() {
        $("#current-score").text(currentScore += crystalClear)
        console.log(crystalClear);
        endGame();
    });

    function initalizeGame() {
        //reset current score, reset all crystal values and reset random number reset wins/losses
        randomNumber = Math.floor(Math.random() * 100+20);
     crystalGreen = Math.floor(Math.random() * 11+1);
     crystalBlack = Math.floor(Math.random() * 11+1);
     crystalRed = Math.floor(Math.random() * 11+1);
     crystalClear = Math.floor(Math.random() * 11+1);
     
     currentScore = 0;

     $("#random-number").text(randomNumber);
      $("#current-score").text(currentScore);
    }

    function endGame() {
        if (currentScore === randomNumber) {
            $("#end-game").text("You Win!");
            wins++;
            $("#wins").text(wins);
            initalizeGame()
        }
        else if (currentScore > randomNumber) {
            $("#end-game").text("You Lose");
            losses++;
            $("#loses").text(losses);
            initalizeGame()
        };
       

};

    

   
});
