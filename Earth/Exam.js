// Pass by value and Pass by reference
// reference : array , obj
// value คือทุก tpye ที่เหลือ

let b = [1,2]; // dress : 1

function add(a) { // dress : 1
    a.push(5); // dress : 1
    console.log(a); // dress : 1
}

add(b); // dress : 1
console.log(b); //dress : 1

// Function Declaration
function test(x) {
    return x;
}

// Function Expression
const test = function(x) {
    return x;
}

// Arrow Function Expression
const test = (x) => {
    return x;
}

// Concise Arrow Function Expression
const test = x => x;