'use strict'
/**
a function called *aritGeo* that takes one argument, an Array. 
Then it check if the array passed as an argument is 
arithmetic, geometric, neither arithmetic nor geometric in progression 
or if the array is empty.
**/

module.exports = {
ArthGeo : function(arr){
    var output="";
    for (var i=0;i<arr.length-2;i++){    	
        if(arr[i+1]-arr[i]===arr[i+2]-arr[i+1]){
        //check if argument is arithmetic
            output = "Arithmetic";
        }
        else if(arr[i+1]/arr[i] ===arr[i+2]/arr[i+1]){
            //check if argument is geometric
            output = "Geometric"
        }
        //check if argument is neither arithmetic nor geometric
        else output= "-1";
      }
      if(arr.length === 0)
      	//check if the array is empty
        output =  "0";
      
      return output;
    }
}    
