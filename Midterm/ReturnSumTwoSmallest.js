function sumTwoSmallestNums(nums) {
    let result = 0
    let count = 0
    console.log(nums.sort((a,b) => a - b));
   
    for(let i of nums)
        if(i <  0){
            count++
    }
    if(count > 0){
        result = nums[count] + nums[count+1]
    }else{
        result = nums[count] + nums[count+1]
    }
    return result ;
}

console.log(sumTwoSmallestNums([19,5,42,2,77])); 
console.log(sumTwoSmallestNums([10,343445353,3453445,3453545353435]));
console.log(sumTwoSmallestNums([2,9,6,-1,-1,-4,-6]));