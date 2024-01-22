
function totalVolume(...nums){
    let sum = [];
    let result = [0];
    let count = 0;
    for(let i = 0 ; i < nums.length ; i++) {
        sum.push(1);
    }
    for(let j = 0 ; j < nums.length ; j++) {
        for(let num of nums[j]) sum[j] *= num;
    }
    for(let o = 0 ; o < sum.length ; o++) result[0] += sum[o];
    return result[0];
}

console.log(totalVolume([4,2,4], [3,3,3], [1,1,2], [2,1,1]));
console.log(totalVolume([2,2,2], [2,1,1]));
console.log(totalVolume([1,1,1]));



