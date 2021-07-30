//Write a JavaScript program to create a new string from a given string taking the last 
//3 characters and added at both the front and back. The string length must be 3 or more.

function stringChange1 ( mainString ) {  
    
    const len=mainString.length;
    let subStr,newStr;

  if ( len >= 3){

    subStr=mainString.substring(0,3);
    newStr= mainString.concat(subStr);
           
    return subStr.concat(newStr);
 
   
   }
 else 
    return ("Enter the string with length must be 3 or more.")

}


console.log(stringChange1  ("Python"));
console.log(stringChange1 ("saba"));
console.log(stringChange1 ("sa"));
