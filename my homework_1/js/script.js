// task 1. Declare 2 variables a and b, such that a > b, and define values for them. Output their
// a. sum
// b. difference (between a and b)
// c. product
// d. quotient (between a and b)
// e. remainder (between a and b)

let a ;
let b ;
let sumResult = a + b;
console.log(sumResult);
let differenceResult = a - b;
console.log(differenceResult);
let productResult = a * b;
console.log(productResult);
let quotientResult = a / b;
console.log(quotientResult);
let remainderResult = a % b;
console.log(remainderResult);

// task 2
// Print your name and age in the following format: “My name is ____, I am ____ .”

let myName = "Arshak";
let myAge = 36;
console.log("“My name is "+myName+", I am "+myAge+".”");
 

// // task 3
// Declare a variable with defined value. Print the last digit of the number.

let x  ;
if( x >= 9999 && x <= 99999){
    console.log(x % 10);
} else if(x >= -999 && x <= -100){
    console.log(x % 10);
} else if(x >= 0 && x <= 10){
    console.log(x % 10);
}
else{
    console.log("not");
}


// task 4
// Check whether a given number is negative. Print “yes”, if it is negative, print “no”
// otherwise.

 let negativeNumber  ;

 if(negativeNumber < 0){
    console.log('Yes');
 } else{
     console.log('No');
 }

// task 5
// Given two numbers print 1 if one of them is divisible by the other one,
//  otherwise print 0.

let number_1 ;
let number_2 ;
if(number_1 % number_2 == 0 || number_2 % number_1 == 0 ){
    console.log(1);
}else{
    console.log(0);
}

//  task 6 
//  Given any number between 1 and 12. Print the name of the respective month.

let month ;

switch(month){
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("September");
        break;
    case 10:
        console.log("October");
        break;
    case 11:
        console.log("November");
        break;
    case 12:
        console.log("December");
        break;
            
}
// task 7
// Given three numbers. Find the maximum one.

let Num_1 = 14 ,
Num_2 = 8,
Num_3 = 14,
Max = Num_1;

if(Max <= Num_2 ){
    Max = Num_2;
}
if(Max <= Num_3 ){
    Max = Num_3;
}
console.log(Max + " is maximum");


// let someArray = [14, 8, 14,64,45,86];
// let max = 0;
// let index;
//  for(index in someArray){
//      if(someArray[index] > max){
//          max = someArray[index];
//      }
    
//  }
//  console.log(max);
//  let aNew = +prompt("1in tiv");
//  let bNew = +prompt("1in tiv");
// if(aNew <= bNew){
//     for(; aNew < bNew; aNew++){
//         console.log(aNew);
//      }
// }

 