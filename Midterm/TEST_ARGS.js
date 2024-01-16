// example args
function sum(args) {
    let sum = 0;
    for (let arg of args) sum += arg;
    return sum;
}

let x = sum(4,9,2,1,10,11);