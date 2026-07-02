function leapYear(year){
    // centruy years must also be divisible by 400 
    if(year % 100 == 0 ) {
        if(year % 400 == 0 ) console.log(`${year} is a leap year.`);
        else console.log(`${year} isn't a leap year.`);

    }
    else if(year % 4 == 0) console.log(`${year} is a leap year.`);
    else console.log(`${year} isn't a leap year.`);
    
}

leapYear(2000);
leapYear(2026);
leapYear(1947);
leapYear(2004);