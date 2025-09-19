//  BY  ASHWINI  MAM  

//  BASIC  &  METHODS

// 1. Print all elements of an array using a for loop.
let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for(let i=0; i < arr1.length; i++){
    if(arr1[i] % 2 == 0){
        // console.log(arr1[i]);
    }
}




//  2. Add a number at the beginning and end of an array.
arr1.push(11, 12, 13, 14, 15);
// console.log(arr1);

arr1.unshift(-5, -4, -3, -2, -1, 0);
// console.log(arr1);




//  3. Remove the first and last elements from an array. 
// console.log(arr1.pop());          //  This only removes one last value.
// console.log(arr1);

arr1.splice(0, 5);                //  This removes 5 values from beginning
// console.log(arr1);

arr1.splice(11, 4);               //  This removes 4 values from end. 
// console.log(arr1);               





//  4. Find the index of "banana" in ["apple", "banana", "mango"].
let arr2 = ["apple", "banana", "mango"];
for(let i=0; i < arr2.length; i++){
    if(arr2[i] == "banana"){
        // console.log("index: ", i);
    }
}



//  5.  Check if "kiwi" exists in the array using includes().
arr2 = ["apple", "banana", "mango"];
// console.log(arr2.includes('kiwi'));        // false 
// console.log(arr2.includes('apple'));       // true 




//  6.  Use forEach() to print all items with their index.
arr2 = ["apple", "banana", "mango"];

//  Arrow function
arr2.forEach((fruit, i) => {                          
    // console.log(i, fruit);
});

//  Named function     (parameter is like (element, index))
function printValue(fruit, i){
//     console.log(i, fruit);
}
arr2.forEach(printValue);

//  normal function   (parameter is like (element, index))
arr2.forEach(function printValue(fruit, i){
    // console.log(i, fruit);
});



//  7. Use splice() to replace the second item in an array with "peach".
arr2 = ["apple", "banana", "mango"];
arr2.splice(1, 1, 'peach');
// console.log(arr2);                //  [ 'apple', 'peach', 'mango' ]



//  8. Use slice() to copy the last two elements of an array.
arr2 = ["apple", "banana", "mango"];
// console.log(arr2.slice(1, arr2.length));         //   [ 'banana', 'mango' ]



//  9. Convert a string "1,2,3" into an array and vice versa using split() and join().
let str = "1,2,3";
str = str.split(",");
// console.log(str);           // [ '1', '2', '3' ]

let str1 = ["1", "2", "3"]
str1 = str1.join(",");
// console.log(str1);          //  1,2,3



//  10. Join all items of an array into a single string separated by -.
let array = ["I", "Love", "Coding"];
array = array.join("-");
// console.log(array);           //  I-Love-Coding
// console.log(typeof(array));   //  string



//  11. Use includes() to check if "carrot" is in the array ["potato", "tomato", "carrot", "onion"].
let array1 = ["potato", "tomato", "carrot", "onion"];
array1 = array1.includes("carrot");
// console.log(array1);             // true



//  12. Use indexOf() to find the index of "onion" in the array.
array1 = ["potato", "tomato", "carrot", "onion"];
// console.log(array1.indexOf("onion"));      // -1




//  Intermediate  

//  1.  Find the sum of all numbers in an array.
let arr3 = [10, 20, 30, 40, 50];
sum = 0;
for(let i of arr3){
    sum = sum + i;
}
// console.log(sum);



// 2.  Reverse Words: Create a new array where each word is reversed
let arr4 = ["hello", "world", "javascript"];
for(let i=0; i<arr4.length; i++){
    arr4[i] = arr4[i].split("").reverse().join("");    
}
// console.log(arr4);



// 3.  Remove Duplicates: Remove duplicates and return
let arr5 = [1, 2, 3, 2, 4, 1, 5];
newArr = [];
for(let i=0; i<arr5.length; i++){
    if(!newArr.includes(arr5[i])){
        newArr.push(arr5[i]);
    }
}
// console.log(newArr);



//  4.  Find the second largest number.
let arr6 = [10, 5, 20, 8, 15];
arr6.sort((a, b) => b - a);
// console.log(arr6[1]);
// console.log(arr6); 



//  5. The Palindrome Checker: takes a string as an argument and returns true if the string is a palindrome, and false otherwise.
function isPalindrome(str){
    str = str.toLowerCase();
    revstr = str.split("").reverse().join("");
    revstr = revstr.toLowerCase();
    if(revstr == str){
        console.log("True");
    } else{
        console.log("False");
    }
}
// isPalindrome("Racecar");



//  6.  The Array Sorter: takes an array of strings (names) and returns a new array with the names sorted alphabetically.
arr7 = ['Charlie', 'Bob', 'Alice'];
function sortNamesAlphabetically(arr7){
    // arr7.sort();
    // console.log(arr7);

    for(let i=0; i<arr7.length; i++){
        temp = "";
        for(let j=i+1; j<arr7.length; j++){
            if(arr7[i] > arr7[j]){
                temp = arr7[j];
                arr7[j] = arr7[i];
                arr7[i] = temp;
            } 
        }
    }
    console.log(arr7);
}
// sortNamesAlphabetically(arr7);



//  Hard level

// 1. The Array Intersector: that takes two arrays of numbers and returns a new array containing only the numbers 
//    that are present in both input arrays.
const first = [1, 2, 3, 4, 5];
const second = [4, 5, 6, 7, 8];

let newArray = [];
for(let i=0; i<first.length; i++){
    for(let j=0; j<second.length; j++){
        if(first[i] == second[j]){
            newArray.push(first[i]);
        }
    }
}
// console.log(newArray);



//  2. The Array Flattener: that takes an array of arrays and returns a single array containing all the elements from the nested arrays, 
//     sorted in ascending order.
const nestedArray = [
  [3, 1, 2],
  [6, 5],
  [4]
];

let flatArray = [];
for(let i=0; i<nestedArray.length; i++){
    for(let j=0; j<nestedArray[i].length; j++){
        flatArray.push(nestedArray[i][j]);
    }
}
// console.log(flatArray.sort());



// 3. The Matrix Transpose: that takes a 2D array (a matrix) and returns a new matrix where the rows and columns have been swapped.
const matrix = [
  [1, 2, 3],
  [4, 5, 6]
];

let transposeArray = [];
for(let i=0; i<matrix.length; i++){
    for(let j=0; j<matrix[i].length; j++){
        transposeArray[j] = []
        transposeArray[j].push(matrix[i][j]);
    }
}
console.log(transposeArray);