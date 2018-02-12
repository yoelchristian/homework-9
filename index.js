var inquirer = require("inquirer");
var _ = require("lodash")
var Word = require("./Word.js");

var foods = ["nugget", "noodles", "spam", "meatballs", "pasta"];

var word = _.sample(foods);
foods = _.without(foods, word);

var game = new Word(word);
game.pushLetterArray();
game.guessALetter();


