console.log("hello")
//choose letters available
//alaphbet is array name
var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l',
    'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];

    //now we create an event listener (listneing for an event, key up/one key up)


    //set everything to 0, 0 is where we are starting 
    //(var="information" things, nouns)
    //functions are what my variables are gonna do
    
var wins = 0;
var losses = 0;
var guesses = 10;
var guessesMade = [];
var userGuess;
var computerChoice;



//Create Computer's Choice Function

//Record how many guesses are left and what the user has already guessed
// onto the page...



//The User's Guess Function
document.onkeyup = function(events) {


   userGuess = event.key;

   console.log("User's Guess", userGuess);
   // win function
   if(userGuess === computerChoice){
      wins++;
      alert("Perfect!");
   }
   else(userGuess != computerChoice); { //loses function
      alert("Nope");
      losses++;
      alert("try again");
   }

   if(userGuess == computerChoice); {
      computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
      alert("winner!")


   }
   

      
   computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];

   
   
   
   
   
   
   //they need to try again here, 10 turns in total
   if(guesses == 0){
      losses++
   }
}


