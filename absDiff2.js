//Write a JavaScript program to compute the absolute difference between a specified number and 19. Returns triple their 
//absolute difference if the specified number is greater than 19.  
function diffAbs(num){
    let diff,triple;
    if (num >= 19){
       diff= Math.abs(num-19);
       triple = diff*3;
    return triple;
    }
    else if (num < 19)
    return num;
    }
    console.log(diffAbs(29));
    console.log(diffAbs(10));
    // console.log(diffAbs(2));