function numberSplit(nums) {
    result = [];
    number = Math.floor(nums/2);
    number1 = Math.ceil(nums/2);
    return [number,number1];
}

console.log(numberSplit(4));
console.log(numberSplit(10));
console.log(numberSplit(11));
console.log(numberSplit(-9));
