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
//BossDetail second property (first method)
BossDetails.prototype.getBossDetails = function() {
	let bossInfo = [];
	bossInfo = [this.bossDetail.bossName, this.bossDetail.sections, this.bossDetail.bossAddress];
	return bossInfo;
}

//definition of a subclass
let Staff = function() {
	this.staffName = "member1";

	//Encapsulation (data hiding), using closure, only 'st' method could change the name of the staff
	let st = function () {
		this.staffName = 'newStaff';
		return this.staffName;
	}
  
  //first method for subclass
  this.staffInfo = function() {
    return this.staffName + ", " + this.bossDetail.bossName + ", " + this.bossDetail.sections[5];
  };
};

//extending the properties of a superclass object (BossDetails) to subclass object (staff)
Staff.prototype = new BossDetails();

///note that, this is only unidirectional, if you want the super class to be able to access the sub class you must declare its prototype as an object
//BossDetails.prototype = new Staff();

//create new instances of the objects
let staff2 = new Staff();
let staff = new BossDetails();


//access the properties using the different objects
console.log(staff.bossDetail.bossName);
console.log(staff2.bossDetail.bossName);

//To show inheritance
console.log(staff2.bossDetail.bossName);
console.log(staff2.getBossDetails());

//To show encapsulation (hide the property in a function and that is closure in concepts)
console.log(staff.staffName);

//but it is accessible inside the property
console.log(staff2.staffInfo());
//console.log(staff.staffInfo());
