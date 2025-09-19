//  BY  ASHWINI  MAM  
//  VARIABLES   -  var, let, const

var age = 20;
age = 30;
// console.log(age);



let name = "iknoor";
// let name = "noor;"
name = "noor";    
// console.log(name);      
//  we can't update the variable made by let; but we can re-declare;


const city = "baru sahib";
//  city = "hanumangarh";                 // shows error
// console.log(city);
// we can't update and re-declared;






//  SWITCH - CASES  

// Write a program that takes a number from 1 to 7 and prints the corresponding day:
//  1 → Monday, 2 → Tuesday, ..., 7 → Sunday, Anything else → "Invalid day".

let day = 5;
switch(day){
    case 1:
        console.log("Monday");
        break

    case 2:
        console.log("Tuesday");
        break

    case 3:
        console.log("Wednesday");
        break

    case 4:
        console.log("Thursday");
        break

    case 5:
        // console.log("Friday");
        break

    case 6:
        console.log("Saturday");
        break

    case 7:
        console.log("Sunday");
        break

    default:
        console.log("Invalid day!")
};




//  SCOPES  -  global,  function,  block

// global:
let num = 20;
function number(){
    // console.log(num);
}
number();



// function:
function state(){
    let state = "rajasthan";
    // console.log(state);
}
state();



// block:
if(true){
    let country = "India";
    // console.log(country);
}
// console.log(country);         //  Shows error




// console.log(typeof(null));
// console.log(typeof(NaN));




//  Explicit  type - conversion 
let a = 2;
a = String(a);
// console.log(typeof(a));

let b = 0;
b = Boolean(b);
// console.log(b);


//   Implicit  type - coercion 
let result = "5" + 2;       //      "52" (number 2 is coerced to string)
let result2 = "5" - 2;      //      3 (string "5" is coerced to number)
let result3 = true + 1;     //      2 (true becomes 1)
let result4 = false + "3";  //      "false3" (false becomes string)

// console.log(result," -> ", typeof(result));
// console.log(result2," -> ", typeof(result2));
// console.log(result3," -> ", typeof(result3));
// console.log(result4," -> ", typeof(result4));






//  FOR  LOOP
for(let i = 0; i <= 5; i++){
    // console.log(i);
}


//  WHILE  LOOP
let i = 0;
while(i <= 10){
    if(i % 2 == 0){
        // console.log(i);
    }
    i += 1;
}


//  DO-WHILE  LOOP
let c = 5;
do{
    // console.log(c);
    c++;
} while(c < 10);



//  FOR - OF  LOOP 
array = ["apple", "banana", "cherry"];
for(let i of array){
    // console.log(i)
}


//  FOR - IN  LOOP 
let obj = {
    name: "iknoor",
    course: "BCA"
}
for(let ele in obj){
    // console.log(ele, "-", obj[ele]);
}
