function simplePair(numArray,num) {
    for(let i = 0 ; i < numArray.length ; i++) {
        for(let j = 0 ; j < numArray.length ; j++) {
            if(i != j) {
                if((numArray[i] * numArray[j]) == num) {
                    
                }
            }
        }
    }
}

console.log(simplePair([1,2,3] , 3));
console.log(simplePair([1,2,3] , 6));
console.log(simplePair([1,2,3] , 9));

