// Write a JavaScript program where the program takes a random integer between 1 to 10, the user is then prompted to input a guess number. If the user input matches with guess number, the program will display a message "Good Work" otherwise display a message "Not matched".
function getRandomIntInclusive(guessNum) {

   let num = Math.ceil(Math.random()*10);

    if( guessNum <=10 && guessNum === num )
    console.log("Good Work");
    else 
    console.log(num+ " " +"is not matched : Pick a number 1-10 only");
    return num
  }
  
  console.log(getRandomIntInclusive(4));
  console.log(getRandomIntInclusive(3));
  console.log(getRandomIntInclusive(9));
  console.log(getRandomIntInclusive(13));