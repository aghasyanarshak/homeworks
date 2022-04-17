// TASK 1
// Given an object. Invert it (keys become values and values become keys). If there is
// more than key for that given value create an array.

function invertKeyValue(obj) {
    let newObj = {};
    for (let k in obj){
        newObj[obj[k]] = newObj[obj[k]] || [];
        newObj[obj[k]].push(k);
    }
    return newObj;
}
console.log(invertKeyValue({ a: '1', b: '2', c: '2', d: '2' }));


// TASK2. 
// Given two objects. Write a function that performs shallow compare.

function shallowCompare(a,b){
    if(Object.keys(a).length !== Object.keys(b).length ) {
        return false;
    }
    for(let key in a){
       if(a[key] !== b[key]) {
            return false;
       } 
    }
    return true;
}
console.log(shallowCompare({a: '1', b: '5'},{a: '1', c: '5'}));

// TASK 3
// Given an array. Determine whether it consists only from uniques or not.

function checkUniques(newArr) {
    let newArray = [];
    for (let i = 0; i < newArr.length; i++){
        if(newArray.indexOf(newArr[i]) == -1){
            newArray.push(newArr[i]);
        }else{
            return false;
        }
    }
    return true;
}
console.log(checkUniques([1,2,3,4,5,6,1,8]));

// TASK4
// Determine if a word or phrase is an isogram. An isogram (also known as a "non pattern
// word") is a word or phrase without a repeating letter.

function isogramOrNot(str) {
    return !str.match(/([a-z]).*\1/i);
   
}
console.log(isogramOrNot('thohm'));

// TASK 5
// Given an array of integers. All numbers are unique. Find the count of missing numbers
// between minimum and maximum elements to make integers sequence.
function getCountMiss(array) {
    array.sort(function(a, b) {
        return  a - b;
    });
    numbersLength = array.length;
    maxNumber = array[numbersLength-1];
    return maxNumber-numbersLength;
}
console.log(getCountMiss([1,7,4,6]));

