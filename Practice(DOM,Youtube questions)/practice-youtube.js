//    Code With Harry  


//      Switch - cases:

// let age = prompt("what's your age");
// switch(age){
//   case '12':
//     console.log("your age is 12.")
//     break
  
//   case '15':
//     console.log("your age is 15.")
//     break

//   default:
//     console.log("not found!.")
//     break
// };



//   L O O P S   

// Question  1
//  Write  a  program  to print  the  marks  of  a  student  in  an  object  using  for  loop.

// Question  2
//  Write  a  program  to print  the  marks  of  a  student  in  an  object  using  for - in  loop.


let marks = {
  harry: 90,
  lovish: 87,
  sakshi: 93,
  karan: 58
}

for(let keys in marks){
  console.log("The marks of", keys, "are", marks[keys]);
}

//  OUTPUT:

  // The marks of harry are 90
  // The marks of lovish are 87
  // The marks of sakshi are 93
  // The marks of karan are 58



// Question  3
//  write  a  program  to  print  "try  again"  until  the  user  catches  correct  number.

let correctNum = 43;
let i

while(i != correctNum){
  console.log("Try again!")
  // i = prompt("enter a number:");
}
console.log("You entered the correact number!");