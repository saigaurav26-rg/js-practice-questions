// 3 question //

let body = document.querySelector("body")

var ch = prompt("enter a character");

if(ch>="A" && ch<="Z"){
    body.innerHTML= "uppercase character";
    
}
else if(ch>="a" && ch<="z"){
    body.innerHTML="lowercase character";
    
}
else{
    body.innerHTML = "not a character";
    
}