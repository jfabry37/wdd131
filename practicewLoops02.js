const numberOfDays = 6; // variable days in future setting
const options = { weekday: "long" }; // Intl.DateTimeFormat vs. short, etc.

// BEGIN
const today = new Date();
// TODAY test output
let todaystring = new Intl.DateTimeFormat("en-US", options).format(today);
document.getElementById("today").innerHTML = `Today is <strong>${todaystring}</strong>`;

// next n days
// for (let i = 1; i <= numberOfDays; i++) {
// 	const nextday = new Date();
// 	nextday.setDate(today.getDate() + i);
// 	let nextdaystring = new Intl.DateTimeFormat("en-US", options).format(nextday);
// 	const item = document.createElement("li"); // list item
// 	item.textContent = nextdaystring;
// 	document.querySelector("ul").appendChild(item);
// }


// while loop
//  let i = 0;
// while( i< numberOfDays){
// 	const nextday = new Date();
// 	nextday.setDate(today.getDate() +i);
// 	let nextdaystring = new Intl.DateTimeFormat("en-US",
// 			options).format(nextday);
// 	const item = document.createElement("li");
// 	item.textContent = nextdaystring;
// 	document.querySelector("ul").appendChild(item);
// 		i ++;
// }


// FOR LOOP:
// for..in loop === needed to creat an array,
// took the number of days and created an array form that.
// the rest of the text is similar  to the other loops.
 
// const days = Array.from({length: numberOfDays});
// for (let i in days){
// 		const nextday = new Date();
// 	nextday.setDate(today.getDate() +i);
// 	let nextdaystring = new Intl.DateTimeFormat("en-US",
// 			options).format(nextday);
// 	const item = document.createElement("li");
// 	item.textContent = nextdaystring;
// 	document.querySelector("ul").appendChild(item);	
// }




// for each loop.
// foreach sutomatically provides:
//that array item
//the index (i) so you sholdn't increment is yourself.
//proper function parameters
// days.forEach(function(day,i){            })
//or
//days.forEach((day, i) => {            })
const days = Array.from({length: numberOfDays});
days.forEach(function(day,i){ // i becomes the offset
	const nextday = new Date();
	nextday.setDate(today.getDate() +i);
	let nextdaystring = new Intl.DateTimeFormat("en-US",
			options).format(nextday);
	const item = document.createElement("li");
	item.textContent = nextdaystring;
	document.querySelector("ul").appendChild(item);
});
		