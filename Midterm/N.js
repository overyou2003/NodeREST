function numberSplit(nums) {
    result = [];
    number = nums;
    for(let i = 0 ; i < 2 ; i++) {
        number /= 2;
        result.push(number);
    }
    return number;
}

console.log(numberSplit(4));
console.log(numberSplit(10));
console.log(numberSplit(11));
console.log(numberSplit(-9));
