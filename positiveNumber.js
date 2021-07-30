//Write a JavaScript program to check from two given integers, whether one is positive and another one is negative.  
//proposed solution
// function positive_negative(x, y)
// {
//   if ((x < 0 && y > 0) || x > 0 && y < 0) 
//   {
//     return true;
//   }
//   else 
//   {
//     return false;
//   }
// } 
function integerNumbers (num1,num2){
if (num1>=0 && num2 >=0)
return ("both are positive");
else if( num1>=0 && num2<=0)
console.log(num1+" " + "positive number and" + " " + num2 +  " "+"is negative number");
else if( num2>=0 && num1<=0)
console.log(num2+" " + "positive number and" + " " + num1 + " "+ "is negative number");
else
return ("both are negative");

}
console.log(integerNumbers(2,3));
console.log(integerNumbers(-2,-3));
console.log(integerNumbers(7,-3));
console.log(integerNumbers(-127,30));

