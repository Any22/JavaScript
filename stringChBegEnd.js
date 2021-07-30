//JavaScript program to create a new string from a given string with the first character of the given 
//string added at the front and back.

function stringChange1 ( testString ) {

const len=testString.length;
let newArr,temp;

  if ( len >= 1){

    newArr=testString.split('');
    temp = newArr[0];
    newArr.splice(0,0,temp);
    newArr.splice(len+1,0,temp);

  return newArr.join('');
   
   }

}


console.log(stringChange1  ("Python"));
console.log(stringChange1 ("saba"));
