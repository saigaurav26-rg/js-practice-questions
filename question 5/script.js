//5//
// rules for leap year questions//
/*
1. The year must be divisible by 4

2.But if it is divisible by 100, it is not a leap year

3.Except if it is also divisible by 400, then it is a leap year*/

var year= Number(prompt("enter year"))

if((year%4 ===0 && year%100 !== 0) || (year%400===0)){
    console.log(" leap year");
    
}
else{
    console.log("not a leap year");
    
}