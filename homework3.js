// task 1
// Given an array. Write a recursive function that removes the first element and returns the given
// array. (without using arr.unshift(),assign second element to first, third element to second...)

function assignItems(array){  
    for(let i = 0; i < array.length; i++){
        if(array[i+1] === undefined){
            array.pop();
        }else{
           array[i] = array[i+1];
        }  
    }
    return array; 
    // chstacvec rekursia grel
}
console.log(assignItems([6, 78, 'n', 0, 1]));


// task 2
// Given an array of nested arrays. Write a recursive function that flattens it. (Hint create function
//     that concats arrays).


function originalFlat(array){
    return array.flat(Infinity);
}
console.log(originalFlat([1, [3, 4, [1, 2]], 10]));

// tarberak 2

function fakeFlat(array){
    let result = [];
    array.forEach(function(el,i,a){
        if(typeof el === 'object'){
            result = result.concat(fakeFlat(el));
        }else{
            result.push(el);
        } 
    });
    return result;
}
console.log(fakeFlat([1, [3, 4, [1, 2]], 10]));

// task 3
// Given an array and a number N.  Write a recursive function that rotates an array N places to the
// left. (Hint: to add element to the beginning use arr.unshift())

function rotateLeftItems(array, n) {
    if(n > 0) {
        let arrPop = array.pop();
        array.unshift(arrPop);
        rotateLeftItems(array, n-1);
    }   
    return array;
}
console.log(rotateLeftItems([6, 78, 'n', 0, 1],2));

// task 4
// Given the list of the following readers:
// Output the books sorted by the percent in descending order which readStatus is true.


function percentSort(array){
    let deleteFalsesObj = array.filter(function(el){
        return el.readStatus === true;
    });
    let result = deleteFalsesObj.sort(function(a,b) {
        return b.percent - a.percent;
    });
    return result;
}
console.log(percentSort([{book: 'Catcher in the Rye', readStatus: true, percent: 40},
            {book:'Animal Farm',readStatus: true, percent: 20},
            {book:'Solaris',readStatus: false, percent: 90},
            {book:'The Fall',readStatus: true, percent: 50},
            {book:'White Nights',readStatus: false, percent: 60},
            {book:'After Dark',readStatus: true, percent: 70},
]));

// task 5
// Implement “map” method for plain objects (same as Array map method.)

function mapObj(fn){
    if (typeof fn !== 'function'){
        console.log(`${fn} 'is not function'`);
        return;
    }
    const result = {};
    for(let key in this){
        
        result[key] = this[key];
    }
    return result;
}
// sharunakutyun@ chstacvec
