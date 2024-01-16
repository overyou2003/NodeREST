
function getBudgets(budgets) {
    sum = 0
    for(let budget of budgets) {
        sum += budget;
    }
    return sum;
}



const getBudgets ([
    { name: "John" , age: 21, budget: 23000},
    { name: "Steve" , age: 32, budget: 40000},
    { name: "Martin" , age: 16, budget: 2700},
])

const getBudgets ([
    { name: "John" , age: 21, budget: 29000},
    { name: "Steve" , age: 32, budget: 32000},
    { name: "Martin" , age: 16, budget: 1600},
])