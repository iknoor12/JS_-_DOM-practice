// PRACTICE Q1:

// WHILE LOOP!

// let i = 0;
// let count = 0;
// while(i<=100){
// if(i % 2 == 0) {
//     console.log("i=", i);
//     count = count + 1;
//     i++;
// } else {
//     i++;
// }
// }
// console.log(count);


// FOR LOOP!

// for(let i = 0; i <= 100; i++) {
//     if(i % 2 ==0){
//         console.log("i =", i);
//     }
// }


// DO-WHILE LOOP!

// let i = 0;
// do{
//     if(i % 2 == 0){
//     console.log("i =", i);
//     i++;
//     } else {
//         i++;
//     }
// } while(i <= 100);


// PRACTICE Q2:

// let gameNumber = 25; 
// let userNum = prompt("guess the game number:");

// while(userNum != gameNumber) {
//     userNum = prompt("You entered wrong number. Guess again")
// }
// console.log("Congratulations! You entered right number!")


// FOR-OF LOOP!(string):

// let str = "coding";
// let count = 0;

// for(let val of str){
//     console.log(val);
//     count = count + 1;
// }
// console.log(count);



// FOR-IN LOOP! (object):

// let myself = {
//     name: "Iknoor",
//     age: 18,
//     course: "BCA",
//     time: 6,
// };
// for(let key in myself) {
//     console.log("key =", key, ",value =", myself[key]);
// }



//STRINGS// 

// QUESTION 1:

// let fullName = prompt("Enter your full name");

// let length = fullName.length;
// let userName = "@" + fullName + fullName.length;
// console.log(userName);



// ARRAY //

// let students = ["Riya", "Iknoor", "Noor", "Deepasha"];
// console.log(typeof(students));
// console.log(students[1]);

// students[2] = "Noor Setia";
// console.log(students);



// FOR LOOP //

// let bag = ["pencil-case", "notebook", "bottle", "lunch-box"];

// for(let i=0; i<bag.length; i++){
//     console.log(bag[i]);
// }



// FOR-OF LOOP ON ARRAY //

// let rollno = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,45]

// for(let num of rollno){
//     console.log(num);
// }
// console.log("length =", rollno.length);





// PRACTICE QUESTION 1 OF ARRAY // :

// BY FOR LOOP //

// let marks = [85,97,44,37,76,60];
// let sum = 0;

// for(let i=0; i<marks.length; i++){
//     sum = sum + marks[i];
// }
// // console.log(sum);

// let avg = sum/marks.length;
// console.log("avg =", avg);



// BY FOR -OF LOOP //

// let marks = [85,97,44,37,76,60];
// let sum = 0;

// for(let i of marks){
//     sum = sum + i;
// }
// // console.log(sum);

// let avg = sum/marks.length;
// console.log("avg =", avg);
// console.log(`average is equal to ${avg}`);



// PRACTICE QUESTION 2 //

// BY FOR LOOP //

// let price = [250,645,300,900,50];
// console.log(price);

// for(let i=0; i<price.length; i++){
//     let off_val = price[i] * 10/100;
//     let new_val = price[i] - off_val;
//     price[i] = new_val;
// }
// console.log(price);


// BY FOR-OF LOOP //

// let price = [250,645,300,900,50];
// console.log(price);

// for(let val of price){
//     let off_val = val * 10/100;
//     val = val - off_val;
// }
// console.log();



// ARRAY - METHOD QUESTION //


// let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];

// (a) REMOVE FIRST ELEMENT FROM ARRAY //

// console.log(companies.shift());
// console.log(companies);

// companies.splice(0,1);
// console.log(companies);

//(b) REMOVE "UBER" AND ADD "OLA" IN IT'S PLACE //

// companies.splice(2,1,"Ola");
// console.log(companies);

// (c) ADD "AMAZON" IN THE END //

// companies.push("Amazon");
// console.log(companies)







//         F U N C T I O N S       //

function num(a, b) {
    sum = a + b;
    return sum;
    // console.log("sum =", sum);
}
// num(20, 300);
// console.log("sum =", sum);




//   ARROW FUNCTION   //

const arrowSum = (a, b) => {
    console.log(a+b);
}
// arrowSum(30,40);


const arrowMul = (x, y) => {
    console.log(x*y);
}
// arrowMul(56,67);




//  PRACTICE QUESTION OF FUNCTION  //

function countVowel(str) {
    let count = 0;
    for(let char of str){
        if (char==="a" || char==="e" || char==="i" || char==="o" || char==="u"){
            count++;
        }
    }
    console.log(count);
}

// countVowel("iknoor");
// countVowel("DEEPASHA");



// ARROW FUNCTION OF ABOVE QUESTION  //

// const countVowel = (str) => {
//     let count = 0;
//     for(let char of str){
//         if (char==="a" || char==="e" || char==="i" || char==="o" || char==="u"){
//             count++;
//         }
//     }
//     console.log(count);
// }

// countVowel("iknoor");
// countVowel("DEEPASHA");




// FOR-EACH LOOP IN ARRAY //

// let arr = [1, 2, 3, 4];

// arr.forEach((val) => {
//     let square = val*val;
//     console.log(square);
// });




// PRACRICE QUESTION-1 OF ARRAY METHOD  //

// let arr = [76,84,65,99,94,91];

// let grade90 = arr.filter((val) => {
//     return val > 90
// });

// console.log(grade90);







//                   { EXTRA QUESTION  }              //


 // 1️⃣ Filter out numbers greater than 10        //
let numbers = [5, 12, 8, 20, 3, 15, 7];
let value = numbers.filter((val) => {
    return val > 10
});
// console.log(value);


  //  2️⃣ Filter out words with more than 5 letters  //
let words = ["apple", "banana", "cat", "dog", "elephant"];
let charcters = words.filter((char) => {
    return char.length > 5
});
// console.log(charcters);


  //  3️⃣ Filter out students who scored more than 50 marks   //
  let students = [
    { name: "Alice", marks: 45 },
    { name: "Bob", marks: 65 },
    { name: "Charlie", marks: 30 },
    { name: "David", marks: 80 }
  ];
let grades = students.filter((student) => {
    return student.marks > 50
});
// console.log(grades);


  //  4️⃣ Get all students who passed in both Math and Science (pass mark: 40)  //
  let allStudents = [
    { name: "Aryan", math: 45, science: 50 },
    { name: "Meera", math: 30, science: 60 },
    { name: "Kabir", math: 80, science: 75 },
    { name: "Simran", math: 25, science: 55 }
  ];
  let passing = allStudents.filter((student) => {
    return student.math > 40 && student.science > 40 
  });
  // console.log(passing);


  //  5️⃣ Filter out books that have more than 300 pages and were published after 2015
 let books = [
  { title: "Book A", pages: 250, publishedYear: 2018 },
  { title: "Book B", pages: 400, publishedYear: 2020 },
  { title: "Book C", pages: 150, publishedYear: 2012 },
  { title: "Book D", pages: 350, publishedYear: 2017 }
 ];
 let published = books.filter((book) => {
    return book.pages > 300 && book.publishedYear > 2015
 });
//  console.log(published);




// PRACTICE QUESTION-2  //

// let n = prompt("Enter a number : ");
// let arr = [];
// for( let i = 1; i <= n; i++){
//     arr[i-1] = i;
// };
// console.log(arr);



// SUM OF ALL VALUES IN ARRAY  //

// let sum = arr.reduce((prev, curr) => {
//     return prev + curr;
// });
// console.log("sum =", sum);  



// PRODUCT OF ALL VALUES IN ARRAY  //

// let product = arr.reduce((prev, curr) => {
//     return prev * curr;
// });
// console.log("product =", product);  









//                  { EXTRA QUESTION  }              //


  // 7️⃣ Find the total marks of all students   //
let allStudent = [
  { name: "Alice", marks: 45 },
  { name: "Bob", marks: 65 },
  { name: "Charlie", marks: 30 },
  { name: "David", marks: 80 }
];
let prev = 0;
let totalMarks = allStudent.reduce((prev, curr) => {
    return prev + curr.marks 
}, 0);
// console.log(totalMarks);


  // 8️⃣ Find the longest word in an array using reduce()  //
let fruits = ["apple", "banana", "cherry", "mango", "strawberry"];
  let longest = fruits.reduce((prev, curr) => {
    if(prev.length > curr.length){
        return prev;
    } else{
        return curr;
    }
  });
  // console.log(longest);


  //  9️⃣ Find the most expensive product from the list   // 
let products = [
  { name: "Phone", price: 30000 },
  { name: "Tablet", price: 20000 },
  { name: "Laptop", price: 60000 },
  { name: "Headphones", price: 5000 }
];
let expensive = products.reduce((prev, curr) => {
    if(prev.price > curr.price){
        return prev;
    } else {
        return curr;
    }
});
// console.log(expensive);
  




 




//   PRACTICE    QUESTIONS    RELATED   TO    **SWITCH CASES**  //


//                                         QUESTION     1

// let day = "saturday";
// switch(day){
//   case "sunday", "saturday":
//     console.log("Holiday");
//   break;

//   case "monday":
//     console.log("First-day");
//   break;

//   case "tuesday":
//     console.log("Second-day");
//   break;

//   default:
//     console.log("Normal week-day");
// };



//                                          QUESTION    2

// let month = "january";
// switch(month){
//   case "january":case "march":case "may":case "july":case "august":case "october":case "december":
//     console.log("31 days");
//   break;

//   case "february":
//     console.log("29 days");
//   break;

//   case "april":case "june":case "september": case "november":
//     console.log("30 days");
//   break;

//   default:
//     console.log("invaild month");
// };



//                                           QUESTION    3

// let grade = "A+";
// switch(grade.toUpperCase()){
//   case "A":case "A+":
//     console.log("Excellent");
//   break;

//   case "B":case "B+":
//     console.log("Very Good");
//   break;

//   case "C":
//     console.log("Good");
//   break;

//   default:
//     console.log("Invalid grade");
// };


