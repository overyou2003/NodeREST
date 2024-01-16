function totalVolume(nums1,nums2,nums3,nums4) {
    let sum = [1];
    for (let num of nums1) sum[0] *= num;
    return sum[0];
}

console.log(totalVolume([4,2,4], [3,3,3], [1,1,2], [2,1,1]));
console.log(totalVolume([2,2,2], [2,1,1]));
console.log(totalVolume([1,1,1]));


