function highestDigit(nums) {
    let index = 0;
    let text = nums.toString();
    text.split('').forEach((char) => {
        if(char > index) {
            index = char;
        }
    })
    return index;
}

console.log(highestDigit(379));
console.log(highestDigit(2));
console.log(highestDigit(377401));