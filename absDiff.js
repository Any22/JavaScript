// Write a JavaScript program to get the difference between a given number and 13, if the number is greater 
// than 13 return double the absolute difference

function diffAbs(num) {

let diff,double;

    if ( num >= 13 ) {

       diff= Math.abs(num-13);
       double = diff*2;
    return double;

    }
    else if (num < 13)
    return num;

    }

console.log(diffAbs(15));
console.log(diffAbs(10));
console.log(diffAbs(2));