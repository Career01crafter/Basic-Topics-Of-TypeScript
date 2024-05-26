//GLOBAL AND BLOCK SCOPE VARIABLES:
//Global scope variables can be access from anywhere without any limits.
//Block scope variables accessation has limits.
var Teacher = "Ali"; //Global scope
console.log(Teacher);
function Class1() {
    var Total_students = 26;
    console.log("Total ".concat(Total_students, " are in the class of Sir ").concat(Teacher));
}
Class1();
function Class2() {
    var present_students = 24;
    console.log("".concat(present_students, " are present in Sir ").concat(Teacher, " class."));
}
Class2();
