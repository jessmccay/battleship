//purpose: Create battleship game, user gets 25 turns to hit random 5 targets within a 10x10 board.
//signature: array, for loop, functions
//example: user clicks square-- square turns red if target hit, yellow if missed.
var board = [
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  []
];
var SHIP = 1;

$(document).ready(function() {
  html="";

    var box = 0;          //counter for making board spaces
    var torpedosUsed = 0
    for(row = 0; row < 10; row ++){      // make rows

      html= html+ "<tr>";    //when called adds row each time

      for(data = 0; data < 10; data++){
        html=html + '<td id="' + box + '"> </td>';     ///makes 10 spaces for each row
        box++;
      }

      html= html + "</tr>"   //ends row
    }
    $("table").append(html); //prints out board to user

    // pieces are placed
    shipPlace();
    console.log(board);

    // TODO: user clicks on a square
    // TODO: square changes color based on presence/absence of ship


    $("td").on("click", function() {   // if user clicks board space function runs
      // console.log("\n")

       $(this).addClass("boom")  // adding class to board space that user clicked
       $(this).off();    //cannot re bomb a used board space
       torpedosUsed++;       //counting torpedos that user has used
       console.log(torpedosUsed + " torpedos fired");
      $("h2").text(torpedosUsed + " torpedos fired");


    });



});

function shipPlace(){      //To create and insert shit to our board randomly
  var shipsUsed = 0
  var col;
  var row;
  while(shipsUsed < 5) {        //run this code to get random number for row and col until ships are placed at different location for 5 times
    col = Math.floor(Math.random() * 10);
    row = Math.floor(Math.random() * 10);
    if (board[col][row] != SHIP) {            // to check if randomly selected location already have ship
      board[col][row] = SHIP                 //placing ship at randomly chosen location
      shipsUsed++;
    };

  }
};

// TODO: check for presence/absence of ship in a square, use this function up in controller (kind of like didWin in tic tac toe)
