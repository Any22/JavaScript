//Write a JavaScript program to create a new string adding "Py" in front of a given string. 
//If the given string begins with "Py" then return the original string.  

function addString(testString) {

    
        if ( testString.substring(0, 2) === 'py') 
        {
          return testString;
        }
        return "py"+testString;
      }
      
    
    

console.log(addString("Python"));
console.log(addString("thon"));
