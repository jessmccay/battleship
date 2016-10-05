//purpose: Create battleship game, user gets 25 turns to hit random 5 targets within a 10x10 board.
//signature: array, for loop, functions
//example: user clicks square-- square turns red if target hit, yellow if missed.


$(document).ready(function() {
  html="";
  var box = 0;          //counter for making board spaces

  for(row = 0; row < 10; row ++){      // make rows

    html= html+ "<tr>";    //when called adds row each time

    for(data = 0; data < 10; data++){
      html=html + '<td id="' + box + '"> </td>';     ///makes 10 spaces for each row
      box++;
    }

    html= html + "</tr>"   //ends row
  }
  $("table").append(html); //prints out board to user

  $("td").on("click", function() {   // if user clicks board space function runs
    // console.log("\n")

     $(this).addClass("boom")  // adding class to board space that user clicked



  });

});
