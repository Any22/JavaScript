// Write a JavaScript program to calculate days left until next Christmas.
function dayCheck(){
    
        let d1= new Date();
        let d2= new Date("2021/11/24"); //
         
        let diff = (d2-d1)/(1000*3600*24);
        
        console.log(diff);
        
    }

dayCheck();