// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

var computerNumber=Math.random();
 
if (computerNumber <.3){
     $("#computerChoice").html("Rock");
  }
   if (computerNumber <.6 && computerNumber >=.3){
     $("#computerChoice").html("Paper");
  } 
  if (computerNumber < 1 && computerNumber>= .6){
      $("#computerChoice").html("Scissors");
  }
   
 if ( $("Userchoice").val()==="rock"){
     if ( $("#computerChoice").val()==="Rock"){
         $("#result").html("Tie");
         
     }
       if ( $("#computerChoice").val()==="Paper"){
         $("#result").html("computer wins");
     }
   if ( $("#computerChoice").val()==="Scissors"){
       $("#result").html("You win");
   }
     }

    if ( $("Userchoice").val()==="Paper"){
        if ( $("#computerChoice").val()==="Rock"){
            $("#result").html("You win");
        }
         if ( $("#computerChoice").val()==="Paper"){
             $("#result").html("Tie");
            
         }      
        if ( $("#computerChoice").val()==="Scissors"){
            $("result").html("Computer wins");
        }
       if ( $ ("userChoice").val()==="Scissors"){
           if ( $("#computerChoice").val()==="Rock"){
               $("#result").html("Computer wins");
           }
           if ( $ ("#computerChoice").val()==="Paper"){
               $("result").html("You win");
                }
                if ( $ ("#computerChoice").val()==="Scissors"){
                    $("result").html("Tie")
                }
       }
   
  
       


















































//GLOBAL VARIABLES
/* global $ */



// DOCUMENT READY FUNCTION BELOW








































