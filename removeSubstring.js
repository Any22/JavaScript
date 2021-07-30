//Write a JavaScript program to remove a character at the
// specified position of a given string and return the new string. 

function addString ( testString, position ) {   

    return ( testString.split('').filter( ( item, index ) => ( index !== position) ) );

}


console.log(addString("Python",1));
console.log(addString("Python",3));
console.log(addString("thon",3));
