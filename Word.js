var inquirer = require("inquirer");
var _ = require("lodash")
var Letter = require("./Letter.js");

var foods = ["nugget", "noodles", "spam", "meatballs", "pasta"];
var correctCounter = 0;
var mistakeCounter = 10;
var oldCorrectCounter = 0;
var gameCounter = 5;


function Word(word) {
    this.wordSplit = word.split("");
    this.letterArray = [];
    this.pushLetterArray = function() {
        for(var i = 0; i < this.wordSplit.length; i++) {
            var pushLetter = new Letter(this.wordSplit[i]);
            this.letterArray.push(pushLetter);
        }       
    }
    this.guessALetter = function() {
        var letterArrayLocal = this.letterArray;
        var localFunction = this;

        inquirer.prompt([
        {
            name: "letterInput",
            message: "Guess a letter:"
        }
        ]).then(function(answers) {
            var updateLogAdd = "";
            for(var i = 0; i < letterArrayLocal.length; i++) {
                letterArrayLocal[i].letterGuess(answers.letterInput);
                if(letterArrayLocal[i].letterChar === answers.letterInput) {
                    correctCounter++;
                }
                if(correctCounter === letterArrayLocal.length) {
                    console.log("You Won");
                    return;
                } else if(mistakeCounter === 0) {
                    console.log("You Lost");
                    return;
                }
                updateLogAdd += letterArrayLocal[i].updateLog();  
            }
            if(oldCorrectCounter === correctCounter) {    
                mistakeCounter--;
                console.log("Incorrect!");             
            }
            oldCorrectCounter = correctCounter;
            console.log("You have " + mistakeCounter + " guesses remaining");
            console.log(updateLogAdd);
            localFunction.guessALetter();
        })         
    }
}

module.exports = Word;