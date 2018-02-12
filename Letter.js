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
        }
    }  
}

module.exports = Letter;





