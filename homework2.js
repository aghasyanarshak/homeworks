// homework 2

// task1
// Given an array of numbers which is almost sorted in ascending order.  Find the index
// where sorting order is violated.

function getIndexArr(findArr){
    let getIndexArr = findArr.findIndex(function(el,i,arr){
    
        return arr[i] > arr[i+1] ;   
    });
    return getIndexArr ;
}

console.log(getIndexArr([-9, -4, -4, 3, 12, 4, 5]));

// tarberak 2

function getIndexArrVers2(findArr){
    
    for(let i = 0;i< findArr.length;i++ ){
        if( findArr[i] <= findArr[i+1] ){
           continue;
        }else if(findArr[i] > findArr[i+1]){
            return i+1;
        }else{
            return -1;
        }
    }
}

console.log(getIndexArrVers2([-9, -4, -4, 3, 12, 4, 5]));


// task 2. Given an array consisting from the arrays of numbers (like a two-dimensional array).
// Find sum of each row and print them as an array


function getSumNasteddArr(arrNestedds){
    let sumNasteddArr = arrNestedds.map(function(elem){
        let sum = 0;
        let a = elem.map(function(item){
            return sum += item;
        });
        return sum;
    });
    return sumNasteddArr;
}

console.log(getSumNasteddArr([[3,4,5],[1,0,0],[4,5,4],[8,8,-1]]));

// tarberak 2

function arraySumItems(array){
    let result = [];
    let sum = 0;
    for(let i = 0;i < array.length;i++){ 
        let index = array[i];
        for(let k = 0; k < index.length;k++){
                sum += index[k];   
        }
        result.push(sum);
        sum = 0;
    }
    return result;
}

console.log(arraySumItems([[3,4,5],[1,0,0],[4,5,4],[8,8,-1]]));

// task 3 Given an array of integers. Write a function that return new array from first array,
// where removed even numbers, and odd numbers was multiplied with new array length

function deleteEvenItems(array){
    let newArr = [];
    for(let i = 0;i < array.length;i++){
        if(array[i] % 2 !== 0){
            newArr.push(array[i]);
        }
    }
    let newArr2 = [];
    for(let k = 0;k < newArr.length;k++){
        newArr2.push(newArr[k] * newArr.length);
    }
    return newArr2;
}
console.log(deleteEvenItems([5, 4, 78, 0, -3, 7]));

// tarberak 2

function getSumOddItems(evenSumArray){
    let deleteEvItems = evenSumArray.filter(function(el){  
        return el % 2 !== 0;
    });
    let result = deleteEvItems.map(function(elem,i,array){
        return elem * array.length;
    });
    return result;
}
console.log(getSumOddItems([5, 4, 78, 0, -3, 7]));


// task 4
// Given a number. Write a function that calculates its sum of the digits and if that sum
// has more than 1 digit find the sum of digits of that number. Repeat that process if needed and
// return the result.

function sumDigits(n){
    let sum = 0;
    for(;n!==0;n=Math.trunc(n/10)){
        sum += n % 10;
    }
    return sum;
}

function getSumElems(num) {
    let result = sumDigits(num);
    if(result > 9 || result < -9){
        result = sumDigits(result);
    }
    return result;
}
console.log(getSumElems(29));

// task5
// Write a recursive function which receives  a number as arguments and returns the
// fibonacci sequence as array.


function fibo(nmb){
    if(nmb === 1 || nmb === 0){
        return 1;
    }
    else {

        return fibo(nmb - 1) + fibo(nmb - 2);
    }
}

function fiboNumbers(n){
    let resultar = [];
    for(let i = 0; i < n; i++){
        resultar.push(fibo(i));
    }
    return resultar;
}
console.log(fiboNumbers(10));
