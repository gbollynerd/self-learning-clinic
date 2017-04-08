'use strict'
/**
a function called *fizzBuzz* to return 'Fizz', 
'Buzz', 'FizzBuzz', or the argument it receives, 
all depending on the argument of the function, a number that is divisible by, 3, 5, or both 3 and 5, respectively..
**/

module.exports = {
fizzBuzz : function(number){
    var result;   
    if((number % 3 === 0) && (number % 5 === 0)) {
       //return FizzBuzz for number divisible by 3 and 5
      result = "FizzBuzz";
    }
    else if(number % 3 === 0){
      //return Fizz for number divisible by 3
      result = "Fizz";
    }
    else if(number % 5 === 0){
      //return Buzz for number divisible by 5
      result = "Buzz";
    }
    else {
      //return the number for number not divisible by 3, 5 or 3 and 5
      result = number;
    }
    return result;
  }
 }
