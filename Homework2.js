// task 1 
// For a given number calculate the sum of its digits.


let num ,
sumDigits = 0;
for(;num!==0;num=Math.trunc(num/10)){
    sumDigits += num%10;
}
console.log(sumDigits);

// task 2 Given three sides of a triangle. 
// Check whether the triangle is valid or not. Print “yes” if it is valid
// and “no” otherwise. 
// (Triangle is valid if the sum of its two sides are greater than the third side).

let aSide ,
bSide ,
cSide ;

if(aSide + bSide > cSide && aSide + cSide > bSide && bSide + cSide > aSide){
    console.log("Yes");
}else{
    console.log("No");
}

// task 3
// Given a number print its digits count.

let num_3 ,
countDigits = 0 ;
if(num_3 === 0){
    countDigits++;
}else{
    for(;num_3!==0;num_3=Math.trunc(num_3/10)){
        countDigits++;
    }
}

console.log(countDigits);


// task 4 
// Count numbers of digit 9 in a number.
let num_4 ,
someResult,
nineCount = 0 ;
for(;num_4!==0;num_4=Math.trunc(num_4/10)){
    someResult = num_4%10;
    if(someResult == 9){
        nineCount++;
    }
}
console.log(nineCount);

// task 5 
// Given a positive number. Print it in reverse order.


let num_5,
newStr = String(num_5),
revStr = newStr.split('').reverse().join('');

console.log(parseInt(revStr));
