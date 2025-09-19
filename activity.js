// 22 JULY  by  ashwini mam

//  countOccurrences(arr, target) Description: Count how many times a given target appears in an array.
function countOccurrences(arr, t){
    c = 0;
    for(let i=0; i < arr.length; i++){
        if(arr[i] == t){
            c += 1
        }
    }
    console.log(c);
}

countOccurrences(['a','b','a','c','a'], 'a');
countOccurrences([1,2,3,2,2,4], 2);
countOccurrences([], 'x'); 



//  Return a new array with elements greater than the threshold.
function filterGreaterThan(arr2, target){
    list = []
    for(let i=0; i<arr2.length; i++){
        if(arr2[i] > target){
            list.push(arr2[i]);
        }
    }
    console.log(list);
}

filterGreaterThan([5, 10, 2, 8, 1], 5);
filterGreaterThan([0, -1, -5], 0);  
filterGreaterThan([], 3);  