//Here i have created an Object literal of the month of January 



const January = {
    //With an int to represent the months number
    monthNum: 1,
    //a string to display which month it is
    month: 'January',
    // and added the amount of days in it
    days: 31
}
//I've done the same for each month in the year
const February = {
    monthNum: 2,
    month: 'February',
    days: 28
}
const March = {
    monthNum: 3,
    month: 'March',
    days: 31
}
const April = {
    monthNum: 4,
    month: 'April',
    days: 30
}
const May = {
    monthNum: 5, 
    month: 'May',
    days: 31
}
const June = {
    monthNum: 6,
    month: 'June',
    days: 30
}
const July = {
    monthNum: 7,
    month: 'July',
    days: 31
}
const August = {
    monthNum: 8,
    month: 'August',
    days: 31
}
const September = {
    monthNum: 9,
    month: 'September',
    days: 31
}
const October = {
    monthNum: 10,
    month: 'October',
    days: 31
}
const November = {
    monthNum: 11,
    month: 'November',
    days: 30
}
const December = {
    monthNum: 12,
    month: 'December',
    days: 31
}

//Here is an array of the week to be able to display each day.  Since the year started on a saturday that is the first day within the array
const week = [ 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

//I've added each month to an array
const year = [January, February, March, April, May, June, July, August, September, October, November, December]

//Then i create count variables.  One for the days of the month
let xDays = 0;
//and one for the months
let xMonths = 0;

let count = 1;

let remainder = xDays %= 7;


//and a placeholder to be able to use abstraction on the month
let thisMonth = year[xMonths];
const mainContainer = document.getElementById('#mainContainer');


//This will iterate over each month of the year
for(xMonths; xMonths < year.length; xMonths++){
    count = 1;
    thisMonth.days = year[xMonths].days;
    //A console.log of the month number along with the months name
    console.log('---' + year[xMonths].monthNum + " " + year[xMonths].month + '---');

    //A border for the month is created


        //Here i iterate over each day of the month
    for(xDays; xDays < thisMonth.days; xDays++){
        //Now if 'x' is equivalent to 7
        
        if(xDays === 7){
            //Then i subtract 7 from the placeholder of 'thisMonth'
            thisMonth.days -= 7;
            //And reset 'x' back to 0
            xDays = 0;
        }        
        //and console.log the result of the 'week' array with the position of 'x'
        console.log(count + " " + week[xDays]);
        count++;
    }
}


//It is not precise on the days.  This must have something to do with -thisMonth.days -= 7-  This will need some more figuring out

//Some test codes

console.log("--- Test Codes ---")
