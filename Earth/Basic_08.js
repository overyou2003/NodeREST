function simplePair(arr, mul) {
    const result = [];
    const check = [];

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] * arr[j] === mul && arr[i] !== arr[j]) {
                check.push(arr[i], arr[j]);
            }
        }
    }
    console.log(check);

    for (let i = 0; i < check.length; i += 2) {
        const pair = [check[i], check[i + 1]]; 
        if (!result.some(existing => existing.includes(pair[0]) && existing.includes(pair[1]))) { 
            result.push(pair); 
        }
    }

    return result;
}

console.log(simplePair([1, 2, 3, 4, 5, 6], 12));
