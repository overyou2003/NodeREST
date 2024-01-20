function totalVolume(nums1,nums2,nums3,nums4) {
    let sum = [];
    // input array
    for (let j = 0 ; j < totalVolume.length ; j++) {
        sum.push(1);
    } sum.push(0);
    // calculate
    if (totalVolume.length === 1) for (let num of nums1) sum[0] *= num;
    else if (totalVolume.length === 2) {
        for (let num of nums1) sum[0] *= num;
        for (let num of nums2) sum[1] *= num;
    }
    else if (totalVolume.length === 3) {
        for (let num of nums1) sum[0] *= num;
        for (let num of nums2) sum[1] *= num;
        for (let num of nums3) sum[2] *= num;
    } 
    else if (totalVolume.length === 4) {
        for (let num of nums1) sum[0] *= num;
        for (let num of nums2) sum[1] *= num;
        for (let num of nums3) sum[2] *= num;
        for (let num of nums4) sum[3] *= num;
    } 
    
    // result
    for (let i = 0 ; i < sum.length-1  ; i++) sum[4] += sum[i]; 
    return totalVolume.length//sum[4] ;
}

//console.log(totalVolume([4,2,4], [3,3,3], [1,1,2], [2,1,1]));
//console.log(totalVolume([2,2,2], [2,1,1]));
console.log(totalVolume([1,1,1]));



