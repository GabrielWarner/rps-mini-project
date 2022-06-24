var choices = ["r", "p", "s"];

var win = 0;
var loss = 0;
var tie = 0;

var playAgain = false;

var game = function() {
    var computerChoice = choices[Math.floor(Math.random() * choices.length)];

    var userChoice = prompt("Please chose R, P, or S");
    if (userChoice === "r" || userChoice === "s" || userChoice === "p") {
      if (userChoice === "r" && computerChoice === "s") {
        win++;
        alert("You win!");
        
      } else if (userChoice === "p" && computerChoice === "r") {
        win++;
        alert("You win!");
        
      } else if (userChoice === "s" && computerChoice === "p") {
        win++;
        alert("You win!");
      } else if (userChoice === "s" && computerChoice === "r") {
        loss++;
        alert("You lose!");
      } else if (userChoice === "r" && computerChoice === "p") {
        loss++;
        alert("You lose!");
      } else if (userChoice === "p" && computerChoice === "s") {
        loss++;
        alert("You lose!");
      } else if (userChoice === "s" && computerChoice === "s") {
        tie++;
        alert("Its a tie!");
      } else if (userChoice === "p" && computerChoice === "p") {
        tie++;
        alert("Its a tie!");
      } else if (userChoice === "r" && computerChoice === "r") {
        tie++;
        alert("Its a tie!");
      } else {
        loss++;
      }
    }
    var playAgain = confirm(`Do you want to play again?
                             wins: ${win}
                             loss's: ${loss}
                             tie's: ${tie}`)

    if (playAgain === true) {
        game()
    }else{
        window.close
    }

}

game();






//TODO: randomly choose computer choice
//TODO: randomly select from  r, p, or s (maybe an array?)
//TODO: store in variable
//TODO: collect users choice (R,P,S)
//TODO: ask user for r,p,or s via popup
//TODO: EDGE CASE: user doenst pick r,p or s
//TODO: figure out result
//TODO: win: r:s, p:r, s:p
//TODO: loss: s:r, r:p, p:s
//TODO: tie s:s, r:r, p:p
//TODO: Log stats
//TODO: craete variables for win, loss, and tie
//TODO: update appropriate variable based on result
//TODO: display to user
//Keep playing until quit

// var randomNum  = Math.random()
// console.log(randomNum)
// var numTimesLength = randomNum * names.length
// console.log(numTimesLength)
// var roundDown = Math.floor(numTimesLength)
// console.log(roundDown)

//var checkInput = function() {
//    if (userChoice != "r","p","s") {
//        var userChoice = prompt("Please Choose R, P, or S")
//   }else{
//       retur
