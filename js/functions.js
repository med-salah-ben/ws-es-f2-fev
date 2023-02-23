// 3 ways to declare function with JS

//-------------func declaration

// function sum(a,b){
//     return a+b
// }

// console.log(sum(7,5))

//--------------------func expression

// var minus = function(x,y){
//     return x-y
// }

// console.log(minus(77,55))

//--------------arrow func

const square = (x,y)=>{
    return x*y
}

const square2 = (a)=> a*a

const square3 = b=> b*b

console.log(square(5,6))
console.log(square2(5))
console.log(square3(4))