// Write a JavaScript program to check two given numbers and
//  return true if one of the number is 50 or if their sum is 50. 

// solution1 
// function test50(x, y) 
// {
//   return ((x == 50 || y == 50) || (x + y == 50));
// }
// console.log(test50(50, 50))
// console.log(test50(20, 50))
// console.log(test50(20, 20))
// console.log(test50(20, 30))

function sumNumbers (num1,num2){
    let sum;
    sum =num1+num2;
    if (num1 === 50 || num2 === 50|| sum === 50 ){
        
        return true;
    }
    else {
        return false;
    }
    
    
    }
    console.log(sumNumbers(15,35));
    console.log(sumNumbers(10,10));
