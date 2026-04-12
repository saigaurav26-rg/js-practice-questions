// QUESTION 1
// Take an input from the user and check if the user is minor, adult or old and print its result in the console 

var age = Number(prompt("enter your age"))

if(age<18){
    console.log("you are minor");
}
else if(age>18 && age<60){
    console.log("you are adult");
    
}
else{
    console.log("you are old");
    
}