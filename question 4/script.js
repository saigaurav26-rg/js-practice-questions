//question 4
//take 3 numbers as input from user and check which is the largest

var num1= Number(prompt("enter num1"))
var num2= Number(prompt("enter num2"))
var num3= Number(prompt("enter num3"))
let body = document.querySelector("body")

if(num1>=num2 && num1>=num3){
    body.innerHTML = "num1 is largest";
    
}
else if(num2>=num1 && num2>=num3){
    body.innerHTML = "num2 is largest";
    
}
else{
    body.innerHTML = "num3 is largest";
    
}