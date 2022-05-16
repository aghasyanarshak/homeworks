// HOMEWORK 4

// task 1 and task 2 are in process. I hope they will be ready soon.

// task 3
// Write a recursive function to determine whether all digits of the number are odd or
// not.


function checkAddOrNot(n, i=0) {
    let convertNumber = n.toString();
    if(i !== convertNumber.length && +convertNumber.charAt(i) % 2 === 0) {
        return false;
    } else if (i < convertNumber.length) {
        i++;
       return checkAddOrNot(n, i);
    }else{
        return true;
    }
}
console.log(checkAddOrNot(3));


// task 4
// Given an array of numbers. Write a recursive function to find its minimal positive element. (if
// such element does not exist, return -1)․

function getMinPosElem(array,i = 0){
        if(array[i] < 0 && i !== array.length){
            i++;
            return getMinPosElem(array, i);
        }else if(i === array.length && array[i-1] < 0){
            return -1;      
        } else {
            let posArr = array.filter(function(el){
                return el > -1;
            });
            return Math.min(...posArr);
        }
}

console.log(getMinPosElem([ -9, -15, -5, 4,15,-78]));

