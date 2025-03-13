// Dates

let myDate = new Date()//DATE datatype=OBJECT
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);//OBJECT

// let myCreatedDate = new Date(2023, 0, 23)
// month starts from 0 in JS

// let myCreatedDate = new Date(2023, 0, 23, 5, 3)

// let myCreatedDate = new Date("2023-01-14")

let myCreatedDate = new Date("01-14-2023")

// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

// console.log(Math.floor(Date.now()/1000));//SECONDS

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})
