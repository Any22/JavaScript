// Write a JavaScript program to check whether a string starts with 'Java' and false otherwise. 

function stringChange1 ( mainString ) {  

let result;
let regEx= /Java/ig;

    result = regEx.test( mainString )
    
 
   return result;
   
}

console.log(stringChange1  ("Python"));
console.log(stringChange1  ("Java"));
console.log(stringChange1  ("java"));
console.log(stringChange1  ("javaScript"));
console.log(stringChange1  ("my favorite language is javascript"));
