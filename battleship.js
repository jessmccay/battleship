//purpose: Create battleship game, user gets 25 turns to hit random 5 targets within a 10x10 board.
//signature: array, for loop, functions
//example: user clicks square-- square turns red if target hit, yellow if missed.
var board = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];
var SHIP = 1;
var HIT = 0;
var MISS = 0;
var torpedosUsed = 0

$(document).ready(function() {

  makeBoard();

  makeShips();

  // TODO: user clicks on a square
  // TODO: square changes color based on presence/absence of ship


  $("td").on("click", function() {   // if user clicks board space function runs
    // console.log("\n")



     // if we find a ship
     var clickedOn = $(this).attr("id"); // 56

     var clickedOnRow = clickedOn.charAt(0); // 5
     var clickedOnCol = clickedOn.charAt(1); // 6

     console.log("clicked on :" + clickedOn);
     console.log("clicked on row:" + clickedOnRow);
     console.log("clicked on column:" + clickedOnCol);

    // check for ship
    // if (HIT === 5){
      if (board[clickedOnRow][clickedOnCol] == 1) {
        // show ship
        $(this).text("🚢");
        HIT++;
        $("h3").text("HIT " + HIT);
      } else {
        // or show boom
        $(this).addClass("boom");
        MISS++;
        $("h4").text("MISS " + MISS);  // adding class to board space that user clicked
      }

     $(this).off();    //cannot re bomb a used board space
      torpedosUsed++;       //counting torpedos that user has used
      console.log(torpedosUsed + " torpedos fired");
      $("h2").text(torpedosUsed + " torpedos fired");

      if (HIT === 5) {
        $("h1").text(" YOU SUNK ALL THE BATTLESHIPS, YOU WIN!")
      }
    });
  });

  // if (shipChecker()) {
  //   $("board[]").addClass("shipIsHere");
  // }


// Add five random ships to our board
function makeShips(){
  var shipsUsed = 0
  var col;
  var row;

  while(shipsUsed < 5) {        //run this code to get random number for row and col until ships are placed at different location for 5 times
    col = Math.floor(Math.random() * 10);   // randomly generate col location within 0 - 10
    row = Math.floor(Math.random() * 10);    // randomly generate row location within 0 - 10
    if (board[col][row] != SHIP) {            // to check if randomly selected location already have ship
      board[col][row] = SHIP                 //placing ship at randomly chosen location
      shipsUsed++;                            // add counter each time
    };

  }
};

// Make gameboard
function makeBoard() {
  html="";

  for(row = 0; row < 10; row ++){      // make rows

    html= html+ "<tr>";    //when called adds row each time

    for(column = 0; column < 10; column++){
      html=html + '<td id="' + row + column + '"> </td>';     ///makes 10 spaces for each row
    }

    html= html + "</tr>"   //ends row
  }
  $("table").append(html); //prints out board to user

};
// TODO: check for presence/absence of ship in a square, use this function up in controller (kind of like didWin in tic tac toe)
// function shipChecker() {
//   var col;
//   var row;
//   if (board[col][row] === 1) {
//     return board[col][row];
//     console.log(board[col][row])
//
//
//   };
// };
