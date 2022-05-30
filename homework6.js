// homework 6
// task 1 
// Get array of node ids from tree (keys).

let someobj = {
    0:{1:{3:{},4:{6:{}}},2:{5:{}}}
};


function getObjectKeys(o,result = []){
    for(let key in o){
        if(typeof o[key] === 'object' && o[key] !== null){
            result.push(key);
            getObjectKeys(o[key],result);            
        }   
    }
    return result;
}
console.log(getObjectKeys(someobj));

// task 2
// Get array of nodes from tree.
function setObjectNodesInArray(o,result = []){
    for(let key in o){
        if(typeof o[key] === 'object' && o[key] !== null){
            result.push({id:key , children: Object.keys(o[key])});
            setObjectNodesInArray(o[key],result);
        }
    }
    return result;
}
console.log(setObjectNodesInArray(someobj));

// task3
// Implement binary search.

function binarSearch(numbers,target){
    numbers.sort(function(a,b){
        return a-b;
    });
    let left = 0;
    let right = numbers.length - 1;
    let midlle;

    while(left <= right){
        midlle = Math.round((right - left)/2) + left;

        if(target === numbers[midlle]){
            return midlle;
        }else if(target < numbers[midlle]){
            right = midlle - 1;
        }else{
            left = midlle + 1; 
        }
    }
    return -1;
}
console.log(binarSearch([-1,0,1,2,3,8,4,5,6],8))