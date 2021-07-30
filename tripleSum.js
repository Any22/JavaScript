// Write a JavaScript program to compute the sum of the two given integers. 
// If the two values are same, then returns triple their sum.
function sumNumbers (num1,num2){
    let comp,sum,triple;
    if (num1 === num2){
        sum= num1+num2;
        triple = sum*3;
        return triple;
    }
    else if (num1 !== num2){
        return sum=num1+num2;
    }
    
    
    }
    console.log(sumNumbers(15,9));
    console.log(sumNumbers(10,10));
