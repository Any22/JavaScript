//Write a JavaScript program to find 1st January is being a Sunday between 2014 and 2050

function dayCheck(){
    for ( let year=2014 ; year<=2050 ; year++){
        let d = new Date(year,0,1)  // 0 shows here Sunday and 1 shows here 1st month i.e January
        if (d.getDay()=== 0)
        {
            console.log("1st january is being a Sunday in"+" "+ year);
        }
        else
        console.log("not such thing");
    }
}
dayCheck();