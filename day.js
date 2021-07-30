// Write a JavaScript program to display the current day and time in the following format

const dateArray=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const d = new Date();
const day = d.getDay();
const hr = d.getHours();
const min= d.getMinutes();
const sec= d.getSeconds();
if (hr > 12 && hr <=24){
    console.log(hr +" "+"PM" +":" +  min + ":"+ sec );
}
else console.log(hr+" "+"AM" +":" +  min + ":"+ sec );
if (day === 0)
console.log( "Today is:"+ dateArray[0]);
else if (day === 1)
console.log( "Today is :"+ dateArray[1]);
else if (day === 2)
console.log( "Today is :"+ dateArray[2]);
else if (day === 3)
console.log( "Today is :"+ dateArray[3]);
else if (day === 4)
console.log( "Today is :"+ dateArray[4]);
else if (day === 5)
console.log( "Today is :"+ dateArray[5]);
else if (day === 6)
console.log( "Today is :"+ dateArray[6]);
else 
console.log("nothing to show");
