 //Write a JavaScript program to check whether two given integer values are in the range 50..99 (inclusive). 
 //Return true if either of them are in the said range.

 function numberInRange ( number ) {  

    return ( number >= 50 && number <= 99 );

}

console.log(numberInRange  (66));
console.log(numberInRange  (76));
console.log(numberInRange  (606));
console.log(numberInRange  (16));

