// how do we declare variables  in javascript?

// you can use var , let ,  const to delcare variables

let num =10;

if(true){
    let num=5;
    console.log(num);
}

console.log(num);
  num = 25;
console.log(num);


let abc=100;
function fun1()
{
     abc=10;
    console.log("abc in fun1 " + abc);
    abc=15;
    console.log("abc in fun1 " + abc);
}

function fun2(){
    var abc=20;
}

fun1();
fun2();
console.log(abc);