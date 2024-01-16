function sumTwoSmallestNums(nums) {
    
    nums.sort((a, b) => b.localeCompare(a));
    return nums
}

console.log(sumTwoSmallestNums([19,5,42,2,77]));
