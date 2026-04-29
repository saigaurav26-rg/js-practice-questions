//6. perform different operations using different operators.....


var num1= Number(prompt("enter num1"))
var num2= Number(prompt("enter num2"))
var operator= prompt("enter operator(+,-,*,/)")

var result;
if(operator==="+"){
    result=num1+num2
}
else if(operator==="-"){
    result=num1-num2
}
else if(operator==="*"){
    result=num1*num2
}
else if(operator==="/"){
    result=num1/num2
}
else{
    console.log("invalid operator");
    
}
console.log("result:",result);