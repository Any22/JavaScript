//dipsplaying date in differnt formats

const d=new Date();
const day = d.getDay();
const mon = d.getMonth();
const yr= d.getFullYear();


console.log(day+"/"+ mon +"/"+ yr);
console.log(day+"-"+ mon +"-"+ yr);
console.log(mon+"/"+ day +"/"+ yr);
console.log(mon+"-"+ day +"-"+ yr);