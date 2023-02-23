function testVar(){
    var x = 6;
    if(true){
        var x = 15;
        console.log("x in Block : " , x)
    }
    console.log("x Out Block : " , x)
}
// testVar()

//------------Let
function testLet(){
    let y = 10 ;
    if(true){
        let y = 5;
        console.log("y in Block : " , y)
    }
    console.log("y Out Block : " , y)
}
// testLet()

function testConst(){
    const y = 10 ;
    if(true){
        const y = 5;
        console.log("y in Block : " , y)
    }
    console.log("y Out Block : " , y)
}

// testConst()


// const x = 9;
// x= 10;

// console.log(x)


const obj = {};

// obj.name = "foulen";
// obj = {age:55}
// console.log(obj)


const arr = [];
// arr = [1,2,3]
arr[0]=1
arr.push(5)

console.log(arr)