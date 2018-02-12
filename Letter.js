var inquirer = require("inquirer");

function Letter(letterChar) {
    this.letterChar = letterChar;
    this.hasBeenGuessed = false;
    this.updateLog = function() {
        if(this.hasBeenGuessed) {
            return this.letterChar + " ";
        } else {
            return "_ ";
        }
    };
    this.letterGuess = function(x) {
        if(x === this.letterChar) {
            this.hasBeenGuessed = true;
        } else {
            console.log(this.hasBeenGuessed)
        }
    }  
}

var word1 = "horse";
var wordSplit = word1.split("");
var letterArray = [];
var guessLimit = 10;

for(var i = 0; i < wordSplit.length; i++) {
    var pushLetter = new Letter(wordSplit[i]);
    letterArray.push(pushLetter);
}

function guessALetter() {
    inquirer.prompt([
        {
            name: "letterInput",
            message: "Guess a letter:"
        }
    ]).then(function(answers) {
        var updateLogAdd = "";
        for(var i = 0; i < letterArray.length; i++) {
            letterArray[i].letterGuess(answers.letterInput);
            updateLogAdd += letterArray[i].updateLog();
        }
        console.log(updateLogAdd);
        guessLimit--;
        if(guessLimit > 0) {
            guessALetter();
        }
    })
}

guessALetter();



