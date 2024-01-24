function getBudgets(obj) {
    
    let result = obj.reduce((Sum,number)=>{
        return Sum+ number.budget
    },0)
    console.log(result + "Result")
    
    
    let Sum = 0
    for(let i = 0; i < obj.length;i++){
      Sum += obj[i].budget
    }
    
    return Sum + "Sum"
}

console.log(getBudgets([
    {name: "John", age: 21, budget: 23000},
    {name: "Steve", age: 32, budget: 40000},
    {name: "Martin", age: 16, budget: 2700},
]));
console.log(getBudgets([
    {name: "John", age: 21, budget: 29000},
    {name: "Steve", age: 32, budget: 32000},
    {name: "Martin", age: 16, budget: 1600},
]));

