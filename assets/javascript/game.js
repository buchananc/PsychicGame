window.onload = function () {

    // Creating variables to hold the number of wins and losses. They start at 0.
    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var wins = 0;
    var losses = 0;
    var guesses = 9;
 
    var letters = []; //array to push user choices to

    // Shows available guesses
    var showGuesses = document.getElementById('myGuesses');

    // This function is run whenever the user presses a key.
    document.onkeydown = function(event) {

        // Accept user guess
        var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
        
        //play sound effect when player gets a win
        var winnerAudio = document.createElement('audio');
            winnerAudio.src = 'assets/images/twinkle.mp3';

        //play sound effect when player loses a round
        var loserAudio = document.createElement('audio');
        loserAudio.src = 'assets/images/blop.mp3';

        // Randomly chooses a choice from the options array. This is the Computer's guess.
        var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];

        //This logic determines the outcome of the game (win/loss), and increments the appropriate number    
        if (/^[a-zA-Z]+$/.test(userGuess) && letters.indexOf(userGuess) == -1) {
            letters.push(userGuess);
            
            if (userGuess === computerGuess) {
                wins++;
                winnerAudio.play();
                guesses = 9; //resets guesses to 9
                letters.length = 0; //removes previously guessed letters
                alert('Way to go! You Won!');
            }
            else if (guesses === 1) {
                losses++;
                loserAudio.play();
                guesses = 9;
                letters.length = 0;
                alert('You lost this time!  Try again!');
            }
            else if (userGuess !== computerGuess) {
                guesses--; //subtracting from guesses left
            }

            var displayLetters = letters.join(', ');
            var html =
                "<p>You chose: </p>" + 
                "<p>" + displayLetters + "</p>" +
                "<p>wins: " + wins + "</p>" +
                "<p>losses: " + losses + "</p>" +
                "<p>guesses left: " + guesses + "</p>"
            document.querySelector("#game").innerHTML = html;
        }   
        
    }
};