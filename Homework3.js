// task 1
// Given an array․ Compute the length of the array. (without using .length)

function getArrayLength(otherArray){
    ArrayLength = 0;
    for(let i = 0; i < otherArray.length;i++){
        ArrayLength += 1;
    }
    return ArrayLength;
}
getArrayLength([1,2,5,1]);

// task 2
// Given an array of numbers. Print the sum of the elements in array.

function getArrayElemsSum(someArray){
    ArrayElemsSum = 0;
    for(let i = 0; i < someArray.length;i++){
        ArrayElemsSum += someArray[i];
    }
    return ArrayElemsSum;
}
getArrayElemsSum([1,2,3]);

// task 3
// Given two numbers. Print powers of 2 between that numbers. (without using
// Math.pow)

function getPowerResult(arg_1,arg_2){
    let newArray = [];
    for(let i = 0;i <= arg_2; i++){
        if ( (2**i) >=arg_1 && (2**i)<=arg_2){
            newArray.push(2**i);
        }
    }
    return newArray;
}

getPowerResult(0, 150);

// task 4
// Given a number as input, insert dashes (-) between each two even numbers.

let newNumber = 2222;
let stringNumber = String(newNumber);
let all = '' ;
for(let k = 0;k < stringNumber.length;k++){
    if(stringNumber[k] % 2 == 0 && stringNumber[k+1] % 2 == 0){
       all += stringNumber[k] + '-';
    }else{
        all += stringNumber[k];
    }
}
console.log(all);

// task 5
// Insert a n positive number. Print the n-st prime number.

function getNstPrimeNumber(n){
    let m = 0;
    for (let i = 2; i < Infinity; i++){
        let flag = false;
        for(j = 2; j < i; j++){
            if(i % j == 0){
                flag = true;
                break;
            }
        }
        if(!flag)
            m++;
            if(m === n){
                return i;
            }
    }
}
getNstPrimeNumber(15);