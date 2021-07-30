//Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar. 
function leapYear (yr){

  if ( yr%4 === 0 )
    console.log(yr + " "+"leap year")
  else 
    console.log(yr +" "+"not a leap year");

return yr;

}
console.log(leapYear (2008));