let students = [
    {name:"ahmed",age:30},
    {name:"majdi" , age:22},
    {name:"elyes" , age : 17},
    {name:"morad", age:55},
    {name:"aram" , age:15}
]

//expression func 
let ageSum = students
.filter(function(person){
    return person.age >20 && person.age <50 
})
.filter(function(person){
    return person.name === "majdi"
})
.map(function(person){
    return person.age
})
// console.log(ageSum)

//arrow func
let age = students
.filter((person)=>person.age >20 && person.age <50)
.filter((person)=>person.name === "ahmed")
.map(person=>person.age)

console.log(age)