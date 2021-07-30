//Write a JavaScript program to check whether a string "Script" presents at 5th (index 4) position in a given string, 
//if "Script" presents in the string return the string without "Script" otherwise return the original one.

function pattern ( targetString ) {  

let result;
result = targetString.indexOf("Script") ;

     if (result === 4)
    
     return (targetString.replace("Script", ""));
      
     else 

    return (targetString);

}

console.log( pattern  ("hello program world"));
console.log( pattern  ("the Script is beautiful"));
