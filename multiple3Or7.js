// Write a JavaScript program to check whether a given positive number is a multiple of 3 or a multiple of 7.

function testNumber(num) {
    
    if ( num >= 0 ){

        if (num%3==0 || num%7==0)
        return ("multiple of 3 or 7");
        else 
        return ("not a multiple of 3 or 7");
    }  

    else 
    return("Enter positive numbers only");
  }
  
console.log(testNumber(-1));
console.log(testNumber(5));
console.log(testNumber(14));
console.log(testNumber(3));
console.log(testNumber(2));

