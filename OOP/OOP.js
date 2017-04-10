/*
	This script shows how to implement function object as a class in a real world senario
	of a Boss and the staffs
*/

//First define an empty function

let BossDetails = function() { };

//use the prototype keyword to set properties of the function object

//BossDetail first property

BossDetails.prototype.bossDetail = {
  bossName : "Ajayi Omogbolade",
  sections : ["Human Resource", "Finance", "Customer Care", "IT", "Sales", "Marketing"],
  bossAddress : "12, Samuel Onafuwa, Rivervalley"
  
};

