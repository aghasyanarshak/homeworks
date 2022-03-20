// TASK 1
// Given three numbers a, b (a ≤ b) and step. Create an array of evenly spaced elements
// starting from a to b spaced by step.

function addStep(start,end,step){
    let newAddStep = [];
    for(let i = start; i <= end; i+= step){
        newAddStep.push(i);
    }
    return newAddStep;
}

console.log(addStep(10,100,20));

// TASK 2
// Given a string and a symbol. Find the number of occurrences of the symbol in the string.

function occurrencesSymbol(str,smb){
    let result = 0;
    for(let i = 0; i< str.length; i++){
        
        if(str[i] === smb){
            result += 1;
        }
    }
    return result;
}

console.log(occurrencesSymbol('another string','t'));

//    TASK3
// Given a string. Check whether the string is palindrome or not.

function chekPalindrome(str){
    revStr = str.split('').reverse().join('');
        if(str.length <= 0){
            return "no";
        }else if(str === revStr){
            
            return 'yes';
        }
        else{
            return 'no';
        }
}
console.log(chekPalindrome("t"));

// TASK 4
// Given an array of numbers. Find the maximum element in array.

function getMaxOfArray(numArray) {
    return Math.max(...numArray);
  }

  console.log(getMaxOfArray([3,7,12,5,20,0]));

  // TASK5 
// Given an array. Create the array which elements are products between two neighbours.

function productElems(neigborsProduct){
    
    productArrayElems = [];
    for (let i = 0; i < neigborsProduct.length -1; i++){
       
        productArrayElems.push(neigborsProduct[i] * neigborsProduct[i+1]);  
    }
    return productArrayElems;
}
console.log(productElems([1, 1, 4, 32, 6]));

// task6
// Given a string and symbols. Change first symbol by the second one in the string.

function changeIndex(str,elm1,elm2) {
   let result = str.replaceAll(elm1,elm2);
   
   return result;
  }
  
  console.log(changeIndex('does the following code','o','0'));

function changeIndexVersion2(str,elm1,elm2) {
    let newStr = "";
    for(let i = 0; i < str.length; i++){
        if(str[i] === elm1){
            newStr += elm2;
        }else{
            newStr += str[i];
        }
    }
    
    return newStr;
   }
   
   console.log(changeIndexVersion2('The results are not recorded yet','t','w'));

//    TASK 7
//    Print the following number pattern:


// chi stacvum bayc porcumem 