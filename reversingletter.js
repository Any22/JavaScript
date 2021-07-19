//Write a JavaScript program to rotate the string 'w3resource' in right direction by periodically removing one letter
//  from the end of the string and attaching it to the front. 
function strreverse (str){
 str= str.toLowerCase();
let arr= str.split('');
let len = arr.length;
let ret;
let space='';
 while (len>=1){
     ret=arr.pop();
     space=space+ret;
     len--;
 }
 
return space;
}
console.log(strreverse("Russia"));
console.log(strreverse("w3rEsoUrce"));