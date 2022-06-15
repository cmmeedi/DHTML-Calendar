/*
**TODO**
The way this will be layed out is that this will be laid out is that the year will be displayed as a div wrapped in a border and each month will be a div within the year div and each day will be a div within the month div.  it will be a divception.  

- Each season will be indicated by a specific background color for the seasons
    -Spring begins with the Vernal Equinox, Thursday, March 20, 2025, 5:01 a.m. 
    -Summer begins with the Summer Solstice, Friday, June 20, 2025, 10:42 p.m. 
    -Fall begins with the Autumnal Equinox, Monday, September 22, 2025, 2:19 p.m. 
    -Winter begins with the Winter Solstice, Sunday, December 21, 2025, 10:03 a.m.

- A clock API with real time will need to be implemented into the app

- Holidays will be included, even those stupid holidays like buttcheek day

- Birthdays of my friends and families will be included

- Each date will also be able to hold notes

- Alarms will also be able to be created.

**
*/


//I've created an array called year to hold all the months within a year

const year = [
    January = {
        monthNum: 1,
        monthShort: 'Jan',
        month: 'January',
        days: 31
    },

    February = {
        monthNum: 2,
        monthShort: `Feb`,
        month: `February`,
        days: 28
    },

    March = {
        monthNum: 3,
        monthShort: `Mar`,
        month: `March`,
        days: 31
    },

    April = {
        monthNum: 4,
        monthShort: `Apr`,
        month: `April`,
        days: 29
    },
    
    May = {
        monthNum: 5,
        monthShort: `May`,
        month: `May`,
        days: 31
    },
    June = {
        monthNum: 6,
        monthShort: `Jun`,
        month: `June`,
        days: 30 
    }, 
    July = {
        monthNum: 7,
        monthShort: `Jul`,
        month: `July`,
        days: 31
    }, 
    August = {
        monthNum: 8,
        monthShort: `Aug`,
        month: `August`,
        days: 31
    }, 
    September = {
        monthNum: 9,
        monthShort: `Sep`,
        month: `September`,
        days: 30
    }, 
    October = {
        monthNum: 10,
        monthShort: `Oct`,
        month: `October`,
        days: 31
    }, 
    November = {
        monthNum: 11,
        monthShort: `Nov`,
        month: `November`,
        days: 30
    }, 
    December = {
        monthNum: 12,
        monthShort: `Dec`,
        month: `December`,
        days: 31
    }
];

//remember to add defer to the JS file so it loads after the HTML file.

//I've created an object of the #mainContainer div
const mainContainer = document.querySelector('#mainContainer');
const body = document.querySelector(`body`);
//A new div element
const month = document.createElement(`div`);
//add the div to the #mainContainer
mainContainer.append(month);
month.style.border = `3px solid black`;
month.style.height = `100px`;
month.style.width = `100px`;

/*

    for every 3 months a new row needs to be created
        this can be achieved by using `%3 = 0
    
*/

const main = document.createElement(`main`);

//Here is where the calendar officially starts
body.after(main);
main.setAttribute(`id`, `theCalendar`);
main.setAttribute(`class`, `container-fluid`);
main.style.border = `3px solid black`;

year.forEach(element => {
    for(let x = 0; x < year.length; year++){
        
    
    }
    
});




function createYear(){
    //This is going to be used to create each year
}

function createSeason(){
    //This is going to be used to create a new Season
}

function createMonth(){
    //This is going to be used to create a new Month
}

function createWeek(){
    //This is going to be used to create a new Week
}

function createDay(){
    //This is going to be used to create a new day
}