var targetNum;
var playerScore;
var gem1;
var gem2;
var gem3;
var gem4;
var wins = 0;
var losses = 0;

var init = function(){
    playerScore = 0;
    $("#yourScore").text(playerScore);
    $("#wins").text(wins);
    $("#losses").text(losses);

    gem1 = Math.floor(Math.random()*12) + 1;
    gem2 = Math.floor(Math.random()*12) + 1;
    gem3 = Math.floor(Math.random()*12) + 1;
    gem4 = Math.floor(Math.random()*12) + 1;

    targetNum = Math.floor(Math.random()*102) + 19;
    $("#target").text(targetNum);
};

init();

// //Testing purposes
// console.log(gem1);
// console.log(gem2);
// console.log(gem3);
// console.log(gem4);
// console.log(targetNum);


$("#first-gem").on("click", function(){
    playerScore = playerScore + gem1;
    $("#yourScore").text(playerScore);
    if (playerScore === targetNum){
        alert("You win!  Want to play again?");
        wins ++;
        init();
    };
    if (playerScore > targetNum){
        alert("You lose!  Want to play again?");
        losses ++;
        init();
    };
});

$("#second-gem").on("click", function(){
    playerScore = playerScore + gem2;
    $("#yourScore").text(playerScore);
    if (playerScore === targetNum){
        alert("You win!  Want to play again?");
        wins ++;
        init();
    };
    if (playerScore > targetNum){
        alert("You lose!  Want to play again?");
        losses ++;
        init();
    };
});

$("#third-gem").on("click", function(){
    playerScore = playerScore + gem3;
    $("#yourScore").text(playerScore);
    if (playerScore === targetNum){
        alert("You win!  Want to play again?");
        wins ++;
        init();
    };
    if (playerScore > targetNum){
        alert("You lose!  Want to play again?");
        losses ++;
        init();
    };
});

$("#fourth-gem").on("click", function(){
    playerScore = playerScore + gem4;
    $("#yourScore").text(playerScore);
    if (playerScore === targetNum){
        alert("You win!  Want to play again?");
        wins ++;
        init();
    };
    if (playerScore > targetNum){
        alert("You lose!  Want to play again?");
        losses ++;
        init();
    };
});


