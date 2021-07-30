// Write a JavaScript program to create a new string from a given string changing the position of first and last characters. 
 //The string length must be greater than or equal to 1.  
 
 function stringChange ( testString,ch1,ch2 ) {  
     const len=testString.length;
     let newString;

    if ( len >= 1){

        newString=testString.split('');
        newString[0]=ch1;
        newString[len-1]=ch2;

   return newString.join('');
    
    }

}


console.log(stringChange ("Python",'a','b'));
console.log(stringChange("aummet",'s','r'));
