//QUESTION 2
// take two inputs from user as integer and perform their sum and check wheather the sum is even or odd
 
var num1= Number(prompt("enter num1"))
var num2= Number(prompt("enter num2"))

var sum = num1 + num2;

if(sum % 2===0){
    console.log("even sum");
    
}
else{
    console.log("odd sum");
    
}