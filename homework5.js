// homework 5
// task 1 
// Create a function that builds a tree.

let treeNodes = [
    {id: 'root', children: [1, 2]},
    {id: 1, children: [3,]},
    {id: 2, children: [4, 5]},
    {id: 3, children: [6]},
    {id: 4, children: [7]},
    {id: 5, children: []},
    {id: 6, children: []},
    {id: 7, children: [8, 9]},
    {id: 8, children: []},
    {id: 9, children: [10]},
    {id: 10, children: []},
];

function toTree(arr,id = 'root'){
const tree = {};
const child = arr.filter(el => el.id === id );

if(!child.length){
    return tree;
}
child.forEach(c =>{
    c.children.forEach(e =>{
        tree[e] = toTree(arr, e);
    });
    
   
});
return tree;

}
console.log(toTree(treeNodes));

//  task 2
// Write a JavaScript function to get all possible subsets of given length of the given
// array.
function allSubsets(arr , k, newArr = [], i=0){
    for (i; i<=arr.length-1; i++) {
        let array = [...arr];
        array.splice(i,1);
        if(array.length === k){
            newArr.push(array);
        } else {
            allSubsets(array,k,newArr,i);
        }
   } 
    return newArr;
}
console.log(allSubsets([1,2,3,4],2));

// task 3
// Create a decorator delay(f, ms) that delays each call of ‘f’ by ‘ms’ milliseconds.
function decoratorDelay(fn,ms){
    function res(...args){
        return setTimeout(()=>console.log( fn.call(this,...args)),ms);
    }
    return res;
}

function some(f,g,h){
    return f+g+h;   
}

let newDelay = decoratorDelay(some,3000);

newDelay(1,2,5);

// tarberak 2

function decoratorDelay2(fn){
    function res(...args){
        return  fn.call(this,...args);
    }
    return res;
}

function some(f,g,h){
    return f+g+h;
}

let newDelay2 = decoratorDelay2(some);

setTimeout(function(){console.log(newDelay2(2,3,5));}, 4000);



// task 4
function debounce(fn, ms) {
    let time;
    function res(...args){
        clearTimeout(time);
        return time = setTimeout(()=>console.log(fn.call(this,...args)),ms);
    }
    return res;
 }

 function some2(f,g,h){
    return f+g+h;
}
 let newDeb = debounce(some2,2000);

 newDeb(1,2,3);
 newDeb(1,4,5);
 newDeb('as','df','fg');

