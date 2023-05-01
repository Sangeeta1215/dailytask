'use strict'
result=10;                 //Can't use a variable without var or let
console.log(result);

//Can't use reserved words as variables
let eval=10;
let arguments="some args";
//Can't delete a variable
delete result;
//Can't delete a function
delete useStrictSample;