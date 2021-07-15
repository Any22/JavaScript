function disemvowel(str) {
   const lex=/[aeiou]/ig;
 return str.replace(lex, "");
  
 
}
console.log(disemvowel("this is good"));