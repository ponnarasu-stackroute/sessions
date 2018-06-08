/*
function add(n1,n2){
    return n1+n2;
}

console.log(add(3,4));

let sum=add;  // function is assigned to a variable

console.log(sum(5,8));  // using variable can access the function

console.log(add(3,4));

*/

/*let sum = function add(n1,n2){
    return n1+n2;
}
console.log(sum(5,8));
console.log(add(3,4));*/

let showResult = function (result){
    console.log(result);
}

function add(a,b,next){
    return next(a+b);
}

add(4,5,showResult);

showResult(55);